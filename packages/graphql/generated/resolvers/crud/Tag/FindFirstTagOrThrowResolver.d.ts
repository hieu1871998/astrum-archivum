import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTagOrThrowArgs } from "./args/FindFirstTagOrThrowArgs";
import { Tag } from "../../../models/Tag";
export declare class FindFirstTagOrThrowResolver {
    findFirstTagOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstTagOrThrowArgs): Promise<Tag | null>;
}
