import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import { comparePasswords } from "../../../scripts/hasher.js";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";
import {
    SecretsManagerClient,
    GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";

const client = new DynamoDBClient({ region: "ap-southeast-2" });
const docClient = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
    try {
        const secret_name = "JWT_SECRET";

        const clientForSecret = new SecretsManagerClient({
            region: "ap-southeast-2",
        });

        let response;

        response = await clientForSecret.send(
            new GetSecretValueCommand({
                SecretId: secret_name,
            }),
        );

        const secret = response.SecretString;

        const { password, inviteCode } = JSON.parse(event.body);
        console.log(event);
        console.log(Object.keys(event));

        console.log(password, inviteCode, "DETAILS");

        if (!password)
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "Invalid details" }),
            };

        const command = new GetCommand({
            TableName: "Wedding",
            Key: { inviteCode: inviteCode },
        });

        const result = await docClient.send(command);
        console.log(result, "result");

        if (!result.Item) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "Invalid details" }),
            };
        }

        const isPasswordValid = await comparePasswords(
            password,
            result.Item.password,
        );

        if (!isPasswordValid) {
            return {
                statusCode: 401,

                body: JSON.stringify({
                    message:
                        "Uh oh, looks like you are not invited, the details are incorrect",
                }),
            };
        }

        const token = jwt.sign({ id: inviteCode }, secret, { expiresIn: "2h" });

        const cookie = serialize("jwt", token, {
            httpOnly: true,
            secure: true,
            path: "/",
            sameSite: "None",
            maxAge: 60 * 60,
        });

        return {
            statusCode: 200,
            // headers: {
            //     "Set-Cookie": `jwt=${token}; HttpOnly; Secure; SameSite=None; Path=/`,
            // },
            headers: {
                "Set-Cookie": cookie,
                "Access-Control-Allow-Origin": "https://pierreandmartyna.com",
                "Access-Control-Allow-Credentials": "true",
            },
            body: JSON.stringify({ success: true }),
        };
    } catch (e) {
        return { statusCode: 500, body: JSON.stringify(e.message) };
    }
};
