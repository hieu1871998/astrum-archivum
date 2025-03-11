import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneTagArgs } from "./args/UpsertOneTagArgs";
import { Tag } from "../../../models/Tag";
export declare class UpsertOneTagResolver {
    upsertOneTag(ctx: any, info: GraphQLResolveInfo, args: UpsertOneTagArgs): Promise<Tag>;
}
