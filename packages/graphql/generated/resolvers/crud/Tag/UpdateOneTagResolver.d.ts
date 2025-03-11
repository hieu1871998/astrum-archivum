import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneTagArgs } from "./args/UpdateOneTagArgs";
import { Tag } from "../../../models/Tag";
export declare class UpdateOneTagResolver {
    updateOneTag(ctx: any, info: GraphQLResolveInfo, args: UpdateOneTagArgs): Promise<Tag | null>;
}
