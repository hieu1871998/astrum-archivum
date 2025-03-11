import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneTagArgs } from "./args/DeleteOneTagArgs";
import { Tag } from "../../../models/Tag";
export declare class DeleteOneTagResolver {
    deleteOneTag(ctx: any, info: GraphQLResolveInfo, args: DeleteOneTagArgs): Promise<Tag | null>;
}
