import type { GraphQLResolveInfo } from "graphql";
import { Tag } from "../../../models/Tag";
import { Transaction } from "../../../models/Transaction";
import { TagTransactionsArgs } from "./args/TagTransactionsArgs";
export declare class TagRelationsResolver {
    transactions(tag: Tag, ctx: any, info: GraphQLResolveInfo, args: TagTransactionsArgs): Promise<Transaction[]>;
}
