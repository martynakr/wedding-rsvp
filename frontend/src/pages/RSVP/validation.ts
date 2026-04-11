import { z } from "zod";

export const schema = z.object({
    fullName: z.string(),
    email: z.email(),
    isAttending: z.string(),
    dietaryRequirements: z.string(),
    plusOneName: z.string().optional(),
});

export type RSVPForm = z.infer<typeof schema>;
