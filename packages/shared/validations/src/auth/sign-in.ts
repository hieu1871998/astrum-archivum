import { z } from 'zod';

export const signInSchema = z.object({
	email: z.string().email().min(5),
	password: z.string().min(8),
});
