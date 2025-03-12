import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';

import { RequestWithUser } from './auth.interfaces';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt.guard';
import { LocalAuthGuard } from './local.guard';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post('login')
	@UseGuards(LocalAuthGuard)
	async login(@Request() req: RequestWithUser) {
		return this.authService.login(req.user);
	}

	@Post('auth/logout')
	@UseGuards(LocalAuthGuard)
	async logout(
		@Request() req: RequestWithUser & { logout: () => Promise<void> },
	) {
		return req.logout();
	}

	@Get('profile')
	@UseGuards(JwtAuthGuard)
	getProfile(@Request() req: RequestWithUser) {
		return req.user;
	}
}
