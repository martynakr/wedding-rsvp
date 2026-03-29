import { parse } from "cookie";
import jwt from "jsonwebtoken";
import {
    SecretsManagerClient,
    GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";

function generatePolicy(principalId, effect, resource, context = {}) {
    return {
        principalId,
        policyDocument: {
            Version: "2012-10-17",
            Statement: [
                {
                    Action: "execute-api:Invoke",
                    Effect: effect,
                    Resource: resource,
                },
            ],
        },
        context,
    };
}

const clientForSecret = new SecretsManagerClient({
    region: "ap-southeast-2",
});

let cachedSecret;

export const handler = async (event) => {
    try {
        const cookieHeader = event.headers?.cookie;

        if (!cookieHeader) {
            return generatePolicy("anonymous", "Deny", event.routeArn);
        }

        const cookies = parse(cookieHeader);
        const token = cookies.jwt;

        if (!token) {
            return generatePolicy("anonymous", "Deny", event.routeArn);
        }

        const secret_name = "JWT_SECRET";

        if (!cachedSecret) {
            const response = await clientForSecret.send(
                new GetSecretValueCommand({
                    SecretId: secret_name,
                }),
            );

            cachedSecret = response.SecretString;
        }

        const decoded = jwt.verify(token, cachedSecret);
        return generatePolicy(decoded.id, "Allow", event.routeArn, {
            inviteCode: decoded.id,
        });
    } catch (e) {
        return generatePolicy("anonymous", "Deny", event.routeArn);
    }
};
