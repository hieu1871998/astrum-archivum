"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByBudgetResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByBudgetArgs_1 = require("./args/GroupByBudgetArgs");
const Budget_1 = require("../../../models/Budget");
const BudgetGroupBy_1 = require("../../outputs/BudgetGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByBudgetResolver = class GroupByBudgetResolver {
    async groupByBudget(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).budget.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByBudgetResolver = GroupByBudgetResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [BudgetGroupBy_1.BudgetGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByBudgetArgs_1.GroupByBudgetArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByBudgetResolver.prototype, "groupByBudget", null);
exports.GroupByBudgetResolver = GroupByBudgetResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Budget_1.Budget)
], GroupByBudgetResolver);
