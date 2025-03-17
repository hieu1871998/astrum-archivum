import { z } from 'zod';

export const signInSchema = z.object({
	email: z.string().email().min(6),
	password: z.string().min(6),
});
