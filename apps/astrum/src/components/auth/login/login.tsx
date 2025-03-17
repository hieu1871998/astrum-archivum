'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2Icon } from 'lucide-react';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { login, type LoginState } from './login.actions';

const initialState: LoginState = {
	message: '',
	errors: {},
};

export const LoginForm = () => {
	const [state, formAction] = useActionState(login, initialState);

	console.log('state: ', state);

	return (
		<form action={formAction}>
			<div className='grid items-center gap-4'>
				<div className='flex flex-col space-y-1'>
					<Label htmlFor='email'>Email</Label>
					<Input
						type='text'
						id='email'
						name='email'
						placeholder='Enter your email'
					/>
					<p className='text-xs text-red-700'>{state.errors?.email}</p>
				</div>
				<div className='flex flex-col space-y-1'>
					<Label htmlFor='password'>Password</Label>
					<Input
						id='password'
						type='password'
						name='password'
						placeholder='Enter your password'
					/>
					<p className='text-xs text-red-700'>{state.errors?.password}</p>
				</div>
			</div>
			<div className='mt-6 flex justify-end'>
				<SubmitButton />
			</div>
		</form>
	);
};

const SubmitButton = () => {
	const { pending } = useFormStatus();

	return (
		<Button
			type='submit'
			className='w-full'
		>
			{pending ? <Loader2Icon className='animate-spin' /> : null}
			Submit
		</Button>
	);
};
