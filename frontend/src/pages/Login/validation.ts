import { z } from "zod";

export const schema = z.object({
    password: z.string().min(6, "Password must be min 6 characters long"),
    inviteCode: z.string().min(6, "Invite code must be min 6 characters long"),
});

export type LoginForm = z.infer<typeof schema>;
