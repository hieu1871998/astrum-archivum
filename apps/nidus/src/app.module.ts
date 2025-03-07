import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { UsersController } from '@/modules/users/users.controller';
import { PrismaService } from '@/prisma.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
	imports: [ConfigModule.forRoot()],
	controllers: [AppController, UsersController],
	providers: [AppService, PrismaService],
})
export class AppModule {}
