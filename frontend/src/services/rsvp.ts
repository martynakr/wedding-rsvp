import { apiCall } from "./apiCall";

export interface RSVPPayload {
    inviteCode: string;
    email: string;
    firstName: string;
    lastName: string;
    isAttending: boolean;
    dietaryRequirements: string;
}

export const rsvp = async (data: RSVPPayload) =>
    apiCall("/rsvp", { method: "POST", body: JSON.stringify(data) });
