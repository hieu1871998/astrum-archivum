"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTagResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyTagArgs_1 = require("./args/UpdateManyTagArgs");
const Tag_1 = require("../../../models/Tag");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyTagResolver = class UpdateManyTagResolver {
    async updateManyTag(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).tag.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManyTagResolver = UpdateManyTagResolver;
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
], UpdateManyTagResolver.prototype, "updateManyTag", null);
exports.UpdateManyTagResolver = UpdateManyTagResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tag_1.Tag)
], UpdateManyTagResolver);
