'use server';

import { signInSchema } from '@astranova/validations';
import { cookies } from 'next/headers';

export interface LoginState {
	message: string;
	errors?: LoginFieldError;
}

type LoginFieldError = Record<string, string>;

export const login = async (prevState: LoginState, formData: FormData): Promise<LoginState> => {
	const email = formData.get('email');
	const password = formData.get('password');

	const payload = {
		email,
		password,
	};

	const { success, data, error } = signInSchema.safeParse(payload);

	if (!success) {
		return {
			message: 'Invalid credentials',
			errors: error.issues.reduce<LoginFieldError>((acc, issue) => {
				acc[issue.path[0]] = issue.message;

				return acc;
			}, {}),
		};
	}

	console.log('data: ', data);

	const res = await fetch(`${process.env.API_URL}/auth/login`, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
	});

	if (res.ok) {
		const { accessToken } = (await res.json()) as { accessToken: string };
		const cookieStore = await cookies();

		cookieStore.set({
			name: 'accessToken',
			value: accessToken,
			httpOnly: true,
		});

		return { message: 'Login success' };
	}

	console.log('res', res);

	return { message: res.statusText };
};
