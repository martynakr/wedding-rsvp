import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { hashPassword } from "./hasher.js";
import invites from "../../guests.json" with { type: "json" };

const client = new DynamoDBClient({ region: "ap-southeast-2" });
const docClient = DynamoDBDocumentClient.from(client);

export const seedDatabase = async (invites) => {
    for (let i = 0; i < invites.length; i++) {
        const { password, inviteCode, ...rest } = invites[i];
        const command = new PutCommand({
            TableName: "Wedding",
            Item: {
                inviteCode: inviteCode,
                ...rest,
                password: await hashPassword(password),
            },
        });

        const response = await docClient.send(command);
        console.log(response);
    }
};

seedDatabase(invites);
