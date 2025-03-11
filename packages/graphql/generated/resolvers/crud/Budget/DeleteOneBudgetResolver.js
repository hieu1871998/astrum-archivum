"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneBudgetResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneBudgetArgs_1 = require("./args/DeleteOneBudgetArgs");
const Budget_1 = require("../../../models/Budget");
const helpers_1 = require("../../../helpers");
let DeleteOneBudgetResolver = class DeleteOneBudgetResolver {
    async deleteOneBudget(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).budget.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteOneBudgetResolver = DeleteOneBudgetResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Budget_1.Budget, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneBudgetArgs_1.DeleteOneBudgetArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneBudgetResolver.prototype, "deleteOneBudget", null);
exports.DeleteOneBudgetResolver = DeleteOneBudgetResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Budget_1.Budget)
], DeleteOneBudgetResolver);
