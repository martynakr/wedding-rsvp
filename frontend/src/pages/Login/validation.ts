import { z } from "zod";

export const schema = z.object({
    passcode: z.string().min(6),
});

export type LoginForm = z.infer<typeof schema>;
