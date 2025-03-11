import type { GraphQLResolveInfo } from "graphql";
import { Account } from "../../../models/Account";
import { Category } from "../../../models/Category";
import { Tag } from "../../../models/Tag";
import { Transaction } from "../../../models/Transaction";
import { User } from "../../../models/User";
import { TransactionCategoryArgs } from "./args/TransactionCategoryArgs";
import { TransactionTagsArgs } from "./args/TransactionTagsArgs";
export declare class TransactionRelationsResolver {
    account(transaction: Transaction, ctx: any, info: GraphQLResolveInfo): Promise<Account>;
    user(transaction: Transaction, ctx: any, info: GraphQLResolveInfo): Promise<User>;
    category(transaction: Transaction, ctx: any, info: GraphQLResolveInfo, args: TransactionCategoryArgs): Promise<Category | null>;
    tags(transaction: Transaction, ctx: any, info: GraphQLResolveInfo, args: TransactionTagsArgs): Promise<Tag[]>;
}
