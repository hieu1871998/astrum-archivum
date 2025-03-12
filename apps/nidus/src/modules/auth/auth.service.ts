import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';

import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
	constructor(
		private readonly usersService: UsersService,
		private readonly jwtService: JwtService,
	) {}

	async validateUser(email: string, password: string) {
		const user = await this.usersService.findOneByEmail(email);

		if (user && user.password === password) {
			return user;
		}

		return null;
	}

	async login(user: User) {
		const payload = { email: user.email, sub: user.id };
		const accessToken = await this.jwtService.signAsync(payload);

		return { accessToken };
	}
}
