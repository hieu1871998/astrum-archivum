"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneBudgetResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneBudgetArgs_1 = require("./args/UpdateOneBudgetArgs");
const Budget_1 = require("../../../models/Budget");
const helpers_1 = require("../../../helpers");
let UpdateOneBudgetResolver = class UpdateOneBudgetResolver {
    async updateOneBudget(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).budget.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateOneBudgetResolver = UpdateOneBudgetResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Budget_1.Budget, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneBudgetArgs_1.UpdateOneBudgetArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneBudgetResolver.prototype, "updateOneBudget", null);
exports.UpdateOneBudgetResolver = UpdateOneBudgetResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Budget_1.Budget)
], UpdateOneBudgetResolver);
