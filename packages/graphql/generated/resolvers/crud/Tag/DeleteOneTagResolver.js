"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneTagResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneTagArgs_1 = require("./args/DeleteOneTagArgs");
const Tag_1 = require("../../../models/Tag");
const helpers_1 = require("../../../helpers");
let DeleteOneTagResolver = class DeleteOneTagResolver {
    async deleteOneTag(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).tag.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteOneTagResolver = DeleteOneTagResolver;
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
], DeleteOneTagResolver.prototype, "deleteOneTag", null);
exports.DeleteOneTagResolver = DeleteOneTagResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tag_1.Tag)
], DeleteOneTagResolver);
