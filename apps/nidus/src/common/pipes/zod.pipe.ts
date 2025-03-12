import {
	BadRequestException,
	Logger,
	type PipeTransform,
} from '@nestjs/common';
import { ZodError, type ZodSchema } from 'zod';

export class ZodValidationPipe<T = unknown> implements PipeTransform<T> {
	constructor(
		private schema: ZodSchema<T>,
		private logger = new Logger(ZodValidationPipe.name),
	) {}

	transform(value: T) {
		try {
			const parsed = this.schema.parse(value);

			return parsed;
		} catch (error) {
			if (error instanceof ZodError) {
				this.logger.error('Validation failed:', error);
				throw new BadRequestException(
					error.errors[0].message,
					error.errors[0].code,
				);
			}

			throw new BadRequestException('Validation failed: ', error as Error);
		}
	}
}
