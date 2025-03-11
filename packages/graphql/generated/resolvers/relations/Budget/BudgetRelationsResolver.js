"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Budget_1 = require("../../../models/Budget");
const Category_1 = require("../../../models/Category");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let BudgetRelationsResolver = class BudgetRelationsResolver {
    async user(budget, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).budget.findUniqueOrThrow({
            where: {
                id: budget.id,
            },
        }).user({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async category(budget, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).budget.findUniqueOrThrow({
            where: {
                id: budget.id,
            },
        }).category({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.BudgetRelationsResolver = BudgetRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Budget_1.Budget, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BudgetRelationsResolver.prototype, "user", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Category_1.Category, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Budget_1.Budget, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BudgetRelationsResolver.prototype, "category", null);
exports.BudgetRelationsResolver = BudgetRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Budget_1.Budget)
], BudgetRelationsResolver);
