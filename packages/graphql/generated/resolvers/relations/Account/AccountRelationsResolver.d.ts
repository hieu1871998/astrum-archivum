import type { GraphQLResolveInfo } from "graphql";
import { Account } from "../../../models/Account";
import { Transaction } from "../../../models/Transaction";
import { User } from "../../../models/User";
import { AccountTransactionsArgs } from "./args/AccountTransactionsArgs";
export declare class AccountRelationsResolver {
    user(account: Account, ctx: any, info: GraphQLResolveInfo): Promise<User>;
    transactions(account: Account, ctx: any, info: GraphQLResolveInfo, args: AccountTransactionsArgs): Promise<Transaction[]>;
}
