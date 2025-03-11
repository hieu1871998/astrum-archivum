import type { GraphQLResolveInfo } from "graphql";
import { CreateOneTagArgs } from "./args/CreateOneTagArgs";
import { Tag } from "../../../models/Tag";
export declare class CreateOneTagResolver {
    createOneTag(ctx: any, info: GraphQLResolveInfo, args: CreateOneTagArgs): Promise<Tag>;
}
