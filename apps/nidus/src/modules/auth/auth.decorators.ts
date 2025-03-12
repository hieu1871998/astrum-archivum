import { createParamDecorator, type ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

import { type RequestWithUser } from './auth.interfaces';

export const CurrentUser = createParamDecorator(
	(data: unknown, context: ExecutionContext) => {
		const ctx = GqlExecutionContext.create(context);

		return ctx.getContext<Record<string, RequestWithUser>>().req.user;
	},
);
