"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BudgetAvgOrderByAggregateInput_1 = require("../inputs/BudgetAvgOrderByAggregateInput");
const BudgetCountOrderByAggregateInput_1 = require("../inputs/BudgetCountOrderByAggregateInput");
const BudgetMaxOrderByAggregateInput_1 = require("../inputs/BudgetMaxOrderByAggregateInput");
const BudgetMinOrderByAggregateInput_1 = require("../inputs/BudgetMinOrderByAggregateInput");
const BudgetSumOrderByAggregateInput_1 = require("../inputs/BudgetSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let BudgetOrderByWithAggregationInput = class BudgetOrderByWithAggregationInput {
};
exports.BudgetOrderByWithAggregationInput = BudgetOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BudgetOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BudgetOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BudgetOrderByWithAggregationInput.prototype, "categoryId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BudgetOrderByWithAggregationInput.prototype, "periodStart", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BudgetOrderByWithAggregationInput.prototype, "periodEnd", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BudgetOrderByWithAggregationInput.prototype, "limit", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BudgetOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BudgetOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetCountOrderByAggregateInput_1.BudgetCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BudgetCountOrderByAggregateInput_1.BudgetCountOrderByAggregateInput)
], BudgetOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetAvgOrderByAggregateInput_1.BudgetAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BudgetAvgOrderByAggregateInput_1.BudgetAvgOrderByAggregateInput)
], BudgetOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetMaxOrderByAggregateInput_1.BudgetMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BudgetMaxOrderByAggregateInput_1.BudgetMaxOrderByAggregateInput)
], BudgetOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetMinOrderByAggregateInput_1.BudgetMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BudgetMinOrderByAggregateInput_1.BudgetMinOrderByAggregateInput)
], BudgetOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetSumOrderByAggregateInput_1.BudgetSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BudgetSumOrderByAggregateInput_1.BudgetSumOrderByAggregateInput)
], BudgetOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.BudgetOrderByWithAggregationInput = BudgetOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BudgetOrderByWithAggregationInput", {})
], BudgetOrderByWithAggregationInput);
