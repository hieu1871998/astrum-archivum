import { BadRequestException, type PipeTransform } from '@nestjs/common';
import { type ZodSchema } from 'zod';

export class ZodValidationPipe<T = unknown> implements PipeTransform<T> {
	constructor(private schema: ZodSchema<T>) {}

	transform(value: T) {
		try {
			const parsed = this.schema.parse(value);

			return parsed;
		} catch (error) {
			throw new BadRequestException('Validation failed: ', error as Error);
		}
	}
}
