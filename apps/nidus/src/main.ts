import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { type NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from '@/app.module';
import { logger } from '@/common/utils/logger';

declare const module: {
	hot?: {
		accept: () => void;
		dispose: (callback: () => Promise<void>) => void;
	};
};

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule, {
		logger,
	});
	const loggerService = new Logger('BOOTSTRAP');

	if (module.hot) {
		module.hot.accept();
		module.hot.dispose(() => app.close());
	}

	app.set('query parser', 'extended');

	let port = parseInt(process.env.PORT || '3000', 10);
	const maxAttempts = 10; // Prevent infinite loop by setting a reasonable limit
	let attempts = 0;

	while (attempts < maxAttempts) {
		try {
			await app.listen(port);
			loggerService.log(`Nidus is running on port: ${port}`);
			break;
		} catch (_error) {
			const error = _error as Error & { code: string };

			if (error.code === 'EADDRINUSE') {
				attempts++;
				loggerService.warn(`Port ${port} is in use, trying port ${port + 1}`);
				port += 1;
			} else {
				loggerService.error(`Failed to start server: ${error.message}`);
				throw error;
			}
		}
	}

	if (attempts >= maxAttempts) {
		loggerService.error(
			`Could not find an available port after ${maxAttempts} attempts`,
		);
	}
}

void bootstrap();
