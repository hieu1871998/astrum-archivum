"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateTagArgs_1 = require("./args/AggregateTagArgs");
const CreateManyTagArgs_1 = require("./args/CreateManyTagArgs");
const CreateOneTagArgs_1 = require("./args/CreateOneTagArgs");
const DeleteManyTagArgs_1 = require("./args/DeleteManyTagArgs");
const DeleteOneTagArgs_1 = require("./args/DeleteOneTagArgs");
const FindFirstTagArgs_1 = require("./args/FindFirstTagArgs");
const FindFirstTagOrThrowArgs_1 = require("./args/FindFirstTagOrThrowArgs");
const FindManyTagArgs_1 = require("./args/FindManyTagArgs");
const FindUniqueTagArgs_1 = require("./args/FindUniqueTagArgs");
const FindUniqueTagOrThrowArgs_1 = require("./args/FindUniqueTagOrThrowArgs");
const GroupByTagArgs_1 = require("./args/GroupByTagArgs");
const UpdateManyTagArgs_1 = require("./args/UpdateManyTagArgs");
const UpdateOneTagArgs_1 = require("./args/UpdateOneTagArgs");
const UpsertOneTagArgs_1 = require("./args/UpsertOneTagArgs");
const helpers_1 = require("../../../helpers");
const Tag_1 = require("../../../models/Tag");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTag_1 = require("../../outputs/AggregateTag");
const TagGroupBy_1 = require("../../outputs/TagGroupBy");
let TagCrudResolver = class TagCrudResolver {
    async aggregateTag(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tag.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyTag(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).tag.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneTag(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).tag.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyTag(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).tag.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneTag(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).tag.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTag(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).tag.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTagOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).tag.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async tags(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).tag.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async tag(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).tag.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getTag(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).tag.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByTag(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).tag.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyTag(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).tag.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneTag(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).tag.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneTag(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).tag.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.TagCrudResolver = TagCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTag_1.AggregateTag, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTagArgs_1.AggregateTagArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagCrudResolver.prototype, "aggregateTag", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyTagArgs_1.CreateManyTagArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagCrudResolver.prototype, "createManyTag", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tag_1.Tag, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneTagArgs_1.CreateOneTagArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagCrudResolver.prototype, "createOneTag", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTagArgs_1.DeleteManyTagArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagCrudResolver.prototype, "deleteManyTag", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tag_1.Tag, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneTagArgs_1.DeleteOneTagArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagCrudResolver.prototype, "deleteOneTag", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Tag_1.Tag, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTagArgs_1.FindFirstTagArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagCrudResolver.prototype, "findFirstTag", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Tag_1.Tag, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTagOrThrowArgs_1.FindFirstTagOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagCrudResolver.prototype, "findFirstTagOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Tag_1.Tag], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTagArgs_1.FindManyTagArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagCrudResolver.prototype, "tags", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Tag_1.Tag, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTagArgs_1.FindUniqueTagArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagCrudResolver.prototype, "tag", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Tag_1.Tag, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTagOrThrowArgs_1.FindUniqueTagOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagCrudResolver.prototype, "getTag", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TagGroupBy_1.TagGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTagArgs_1.GroupByTagArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagCrudResolver.prototype, "groupByTag", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTagArgs_1.UpdateManyTagArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagCrudResolver.prototype, "updateManyTag", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tag_1.Tag, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneTagArgs_1.UpdateOneTagArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagCrudResolver.prototype, "updateOneTag", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Tag_1.Tag, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneTagArgs_1.UpsertOneTagArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagCrudResolver.prototype, "upsertOneTag", null);
exports.TagCrudResolver = TagCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tag_1.Tag)
], TagCrudResolver);
