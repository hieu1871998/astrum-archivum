"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BudgetOrderByRelationAggregateInput_1 = require("../inputs/BudgetOrderByRelationAggregateInput");
const CategoryOrderByRelationAggregateInput_1 = require("../inputs/CategoryOrderByRelationAggregateInput");
const TransactionOrderByRelationAggregateInput_1 = require("../inputs/TransactionOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CategoryOrderByWithRelationInput = class CategoryOrderByWithRelationInput {
};
exports.CategoryOrderByWithRelationInput = CategoryOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryOrderByWithRelationInput.prototype, "icon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryOrderByWithRelationInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryOrderByWithRelationInput.prototype, "parentCategoryId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryOrderByWithRelationInput)
], CategoryOrderByWithRelationInput.prototype, "parentCategory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryOrderByRelationAggregateInput_1.CategoryOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryOrderByRelationAggregateInput_1.CategoryOrderByRelationAggregateInput)
], CategoryOrderByWithRelationInput.prototype, "subcategories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionOrderByRelationAggregateInput_1.TransactionOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionOrderByRelationAggregateInput_1.TransactionOrderByRelationAggregateInput)
], CategoryOrderByWithRelationInput.prototype, "transactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetOrderByRelationAggregateInput_1.BudgetOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BudgetOrderByRelationAggregateInput_1.BudgetOrderByRelationAggregateInput)
], CategoryOrderByWithRelationInput.prototype, "Budget", void 0);
exports.CategoryOrderByWithRelationInput = CategoryOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryOrderByWithRelationInput", {})
], CategoryOrderByWithRelationInput);
