import type { GraphQLResolveInfo } from "graphql";
import { AggregateTagArgs } from "./args/AggregateTagArgs";
import { CreateManyTagArgs } from "./args/CreateManyTagArgs";
import { CreateOneTagArgs } from "./args/CreateOneTagArgs";
import { DeleteManyTagArgs } from "./args/DeleteManyTagArgs";
import { DeleteOneTagArgs } from "./args/DeleteOneTagArgs";
import { FindFirstTagArgs } from "./args/FindFirstTagArgs";
import { FindFirstTagOrThrowArgs } from "./args/FindFirstTagOrThrowArgs";
import { FindManyTagArgs } from "./args/FindManyTagArgs";
import { FindUniqueTagArgs } from "./args/FindUniqueTagArgs";
import { FindUniqueTagOrThrowArgs } from "./args/FindUniqueTagOrThrowArgs";
import { GroupByTagArgs } from "./args/GroupByTagArgs";
import { UpdateManyTagArgs } from "./args/UpdateManyTagArgs";
import { UpdateOneTagArgs } from "./args/UpdateOneTagArgs";
import { UpsertOneTagArgs } from "./args/UpsertOneTagArgs";
import { Tag } from "../../../models/Tag";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateTag } from "../../outputs/AggregateTag";
import { TagGroupBy } from "../../outputs/TagGroupBy";
export declare class TagCrudResolver {
    aggregateTag(ctx: any, info: GraphQLResolveInfo, args: AggregateTagArgs): Promise<AggregateTag>;
    createManyTag(ctx: any, info: GraphQLResolveInfo, args: CreateManyTagArgs): Promise<AffectedRowsOutput>;
    createOneTag(ctx: any, info: GraphQLResolveInfo, args: CreateOneTagArgs): Promise<Tag>;
    deleteManyTag(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTagArgs): Promise<AffectedRowsOutput>;
    deleteOneTag(ctx: any, info: GraphQLResolveInfo, args: DeleteOneTagArgs): Promise<Tag | null>;
    findFirstTag(ctx: any, info: GraphQLResolveInfo, args: FindFirstTagArgs): Promise<Tag | null>;
    findFirstTagOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstTagOrThrowArgs): Promise<Tag | null>;
    tags(ctx: any, info: GraphQLResolveInfo, args: FindManyTagArgs): Promise<Tag[]>;
    tag(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTagArgs): Promise<Tag | null>;
    getTag(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTagOrThrowArgs): Promise<Tag | null>;
    groupByTag(ctx: any, info: GraphQLResolveInfo, args: GroupByTagArgs): Promise<TagGroupBy[]>;
    updateManyTag(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTagArgs): Promise<AffectedRowsOutput>;
    updateOneTag(ctx: any, info: GraphQLResolveInfo, args: UpdateOneTagArgs): Promise<Tag | null>;
    upsertOneTag(ctx: any, info: GraphQLResolveInfo, args: UpsertOneTagArgs): Promise<Tag>;
}
