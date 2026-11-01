import { apiCall } from "./apiCall";

export interface InviteDetails {
    inviteCode: string;
    password: string;
    hasResponded: boolean;
    language: "PL" | "EN";
    respondedAt: string;
    guests: Guest[];
}

interface Guest {
    firstName: string;
    lastName: string;
    dietaryRequirements?: string;
    email?: string;
    isAttending?: boolean;
}

export const getCurrentInvite = () => apiCall("/invites");
