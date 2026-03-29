import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({ region: "ap-southeast-2" });
const docClient = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
    try {
        const authorizer = event.requestContext?.authorizer;
        const inviteCode = authorizer?.lambda?.inviteCode;

        if (!inviteCode) {
            return {
                statusCode: 404,
                body: JSON.stringify({ message: "Missing invite code" }),
            };
        }

        const command = new GetCommand({
            TableName: "Wedding",
            Key: { inviteCode },
        });

        const response = await docClient.send(command);

        const inviteDetails = response.Item;
        const { password, ...rest } = inviteDetails;

        return {
            statusCode: 200,
            body: JSON.stringify(rest),
        };
    } catch (e) {
        return {
            statusCode: 500,
            body: JSON.stringify({ e: e }),
        };
    }
};
