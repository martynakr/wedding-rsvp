import { parse } from "cookie";

export const verifyToken = async (event) => {
    const cookieHeader = event.headers?.cookie;

    if (!cookieHeader) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "Unauthorized" }),
        };
    }

    const cookies = parse(cookieHeader);
    const token = cookies.jwt;

    if (!token) {
        throw { statusCode: 401, message: "Unauthorized" };
    }

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
        const decoded = jwt.verify(token, secret);
        return decoded;
    } catch (e) {
        throw { statusCode: 401, message: "Unauthorized" };
    }
};
