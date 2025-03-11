"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let BudgetSumOrderByAggregateInput = class BudgetSumOrderByAggregateInput {
};
exports.BudgetSumOrderByAggregateInput = BudgetSumOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BudgetSumOrderByAggregateInput.prototype, "limit", void 0);
exports.BudgetSumOrderByAggregateInput = BudgetSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BudgetSumOrderByAggregateInput", {})
], BudgetSumOrderByAggregateInput);
