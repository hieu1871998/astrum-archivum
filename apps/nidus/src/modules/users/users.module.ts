import { Module } from '@nestjs/common';

import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

import { PrismaService } from '@/common/prisma/prisma.service';

@Module({
	providers: [UsersResolver, UsersService, PrismaService],
})
export class UsersModule {}
