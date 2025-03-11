"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let BudgetAvgOrderByAggregateInput = class BudgetAvgOrderByAggregateInput {
};
exports.BudgetAvgOrderByAggregateInput = BudgetAvgOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BudgetAvgOrderByAggregateInput.prototype, "limit", void 0);
exports.BudgetAvgOrderByAggregateInput = BudgetAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BudgetAvgOrderByAggregateInput", {})
], BudgetAvgOrderByAggregateInput);
