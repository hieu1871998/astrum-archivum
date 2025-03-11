"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BudgetListRelationFilter_1 = require("../inputs/BudgetListRelationFilter");
const CategoryListRelationFilter_1 = require("../inputs/CategoryListRelationFilter");
const CategoryNullableRelationFilter_1 = require("../inputs/CategoryNullableRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const TransactionListRelationFilter_1 = require("../inputs/TransactionListRelationFilter");
let CategoryWhereInput = class CategoryWhereInput {
};
exports.CategoryWhereInput = CategoryWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CategoryWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CategoryWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CategoryWhereInput.prototype, "icon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CategoryWhereInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CategoryWhereInput.prototype, "parentCategoryId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryNullableRelationFilter_1.CategoryNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryNullableRelationFilter_1.CategoryNullableRelationFilter)
], CategoryWhereInput.prototype, "parentCategory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryListRelationFilter_1.CategoryListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryListRelationFilter_1.CategoryListRelationFilter)
], CategoryWhereInput.prototype, "subcategories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionListRelationFilter_1.TransactionListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionListRelationFilter_1.TransactionListRelationFilter)
], CategoryWhereInput.prototype, "transactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetListRelationFilter_1.BudgetListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BudgetListRelationFilter_1.BudgetListRelationFilter)
], CategoryWhereInput.prototype, "Budget", void 0);
exports.CategoryWhereInput = CategoryWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryWhereInput", {})
], CategoryWhereInput);
