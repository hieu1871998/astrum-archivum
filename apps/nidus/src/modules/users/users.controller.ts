import { PrismaService } from '@/prisma.service';
import { Address, User } from '@astranova/prisma';
import { Body, Controller, Get, Header, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
	constructor(private readonly prisma: PrismaService) {}

	@Post()
	@Header('Cache-Control', 'no-store')
	async create(
		@Body()
		request: {
			email: string;
			name: string;
			address: Address;
		},
	) {
		const user = await this.prisma.user.create({
			data: {
				name: request.name,
				email: request.email,
				address: request.address,
			},
		});

		return user;
	}

	@Get()
	async findAll(): Promise<User[]> {
		const users = await this.prisma.user.findMany();

		return users;
	}

	@Get(':id')
	async findOne(@Param('id') id: string): Promise<User> {
		const user = await this.prisma.user.findUnique({
			where: {
				id,
			},
		});

		if (!user) {
			throw new Error('User not found');
		}

		return user;
	}
}
