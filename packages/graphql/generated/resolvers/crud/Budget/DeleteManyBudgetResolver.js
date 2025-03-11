"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyBudgetResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyBudgetArgs_1 = require("./args/DeleteManyBudgetArgs");
const Budget_1 = require("../../../models/Budget");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyBudgetResolver = class DeleteManyBudgetResolver {
    async deleteManyBudget(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).budget.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyBudgetResolver = DeleteManyBudgetResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyBudgetArgs_1.DeleteManyBudgetArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyBudgetResolver.prototype, "deleteManyBudget", null);
exports.DeleteManyBudgetResolver = DeleteManyBudgetResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Budget_1.Budget)
], DeleteManyBudgetResolver);
