import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTagOrThrowArgs } from "./args/FindUniqueTagOrThrowArgs";
import { Tag } from "../../../models/Tag";
export declare class FindUniqueTagOrThrowResolver {
    getTag(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTagOrThrowArgs): Promise<Tag | null>;
}
