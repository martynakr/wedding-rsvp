import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
    DynamoDBDocumentClient,
    GetCommand,
    UpdateCommand,
} from "@aws-sdk/lib-dynamodb";
// import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const client = new DynamoDBClient({ region: "ap-southeast-2" });
const docClient = DynamoDBDocumentClient.from(client);
// const ses = new SESClient({ region: "ap-southeast-2" });

export const handler = async (event) => {
    try {
        const body = JSON.parse(event.body);

        const {
            firstName,
            lastName,
            email,
            isAttending,
            dietaryRequirements,
            plusOneName,
            inviteCode,
        } = body;

        const result = await docClient.send(
            new GetCommand({
                TableName: "Wedding",
                Key: { inviteCode },
            }),
        );

        if (!result.Item) {
            return {
                statusCode: 404,
                body: JSON.stringify({ message: "Invite not found" }),
            };
        }

        const item = result.Item;

        const guestIndex = item.guests.findIndex(
            (g) =>
                g.firstName.toLowerCase() === firstName.toLowerCase() &&
                g.lastName.toLowerCase() === lastName.toLowerCase(),
        );

        const guestsUpdated = [...item.guests];

        guestsUpdated[guestIndex] = {
            ...guestsUpdated[guestIndex],
            email,
            isAttending,
            dietaryRequirements,
        };

        if (plusOneName) {
            const [f, l] = plusOneName.split(" ");
            guestsUpdated[guestIndex].firstName = f;
            guestsUpdated[guestIndex].lastName = l;
        }

        const updatedItem = {
            ...item,
            guests: guestsUpdated,
            hasResponded: true,
            respondedAt: new Date().toISOString(),
        };

        const updateResult = await docClient.send(
            new UpdateCommand({
                TableName: "Wedding",
                Key: { inviteCode },
                UpdateExpression: `
                    SET guests = :guests,
                        hasResponded = :hasResponded,
                        respondedAt = :respondedAt
                `,
                ExpressionAttributeValues: {
                    ":guests": guestsUpdated,
                    ":hasResponded": true,
                    ":respondedAt": updatedItem.respondedAt,
                },
                ReturnValues: "ALL_NEW",
            }),
        );

        const { password, ...rest } = updateResult.Attributes;

        return {
            statusCode: 200,
            body: JSON.stringify({ ...rest }),
        };
    } catch (e) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: e.message }),
        };
    }
};
