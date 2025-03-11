"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBudgetResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateBudgetArgs_1 = require("./args/AggregateBudgetArgs");
const Budget_1 = require("../../../models/Budget");
const AggregateBudget_1 = require("../../outputs/AggregateBudget");
const helpers_1 = require("../../../helpers");
let AggregateBudgetResolver = class AggregateBudgetResolver {
    async aggregateBudget(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).budget.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateBudgetResolver = AggregateBudgetResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateBudget_1.AggregateBudget, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateBudgetArgs_1.AggregateBudgetArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateBudgetResolver.prototype, "aggregateBudget", null);
exports.AggregateBudgetResolver = AggregateBudgetResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Budget_1.Budget)
], AggregateBudgetResolver);
