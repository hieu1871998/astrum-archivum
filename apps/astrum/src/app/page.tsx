import { LoginForm } from '@/components/auth/login';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
	return (
		<main className="min-h-screen flex flex-col justify-center">
			<div className="container max-w-md">
				<Card>
					<CardHeader>
						<CardTitle>Log in</CardTitle>
					</CardHeader>
					<CardContent>
						<LoginForm />
					</CardContent>
				</Card>
			</div>
		</main>
	);
}
