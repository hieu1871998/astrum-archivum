"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyTagResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyTagArgs_1 = require("./args/FindManyTagArgs");
const Tag_1 = require("../../../models/Tag");
const helpers_1 = require("../../../helpers");
let FindManyTagResolver = class FindManyTagResolver {
    async tags(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).tag.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindManyTagResolver = FindManyTagResolver;
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
], FindManyTagResolver.prototype, "tags", null);
exports.FindManyTagResolver = FindManyTagResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tag_1.Tag)
], FindManyTagResolver);
