import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { PrismaService } from '@/common/prisma/prisma.service';
import { AccountsModule } from '@/modules/accounts/accounts.module';
import { AuthModule } from '@/modules/auth/auth.module';
import { BudgetsModule } from '@/modules/budgets/budgets.module';
import { TransactionsModule } from '@/modules/transactions/transactions.module';
import { UsersModule } from '@/modules/users/users.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
		}),
		UsersModule,
		AccountsModule,
		TransactionsModule,
		BudgetsModule,
		AuthModule,
	],
	controllers: [AppController],
	providers: [AppService, PrismaService],
})
export class AppModule {}
