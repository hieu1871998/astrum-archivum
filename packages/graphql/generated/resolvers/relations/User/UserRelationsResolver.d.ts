import type { GraphQLResolveInfo } from "graphql";
import { Account } from "../../../models/Account";
import { Budget } from "../../../models/Budget";
import { Transaction } from "../../../models/Transaction";
import { User } from "../../../models/User";
import { UserAccountsArgs } from "./args/UserAccountsArgs";
import { UserBudgetsArgs } from "./args/UserBudgetsArgs";
import { UserTransactionsArgs } from "./args/UserTransactionsArgs";
export declare class UserRelationsResolver {
    accounts(user: User, ctx: any, info: GraphQLResolveInfo, args: UserAccountsArgs): Promise<Account[]>;
    transactions(user: User, ctx: any, info: GraphQLResolveInfo, args: UserTransactionsArgs): Promise<Transaction[]>;
    budgets(user: User, ctx: any, info: GraphQLResolveInfo, args: UserBudgetsArgs): Promise<Budget[]>;
}
