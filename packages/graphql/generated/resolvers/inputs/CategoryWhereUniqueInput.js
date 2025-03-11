"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BudgetListRelationFilter_1 = require("../inputs/BudgetListRelationFilter");
const CategoryListRelationFilter_1 = require("../inputs/CategoryListRelationFilter");
const CategoryNullableRelationFilter_1 = require("../inputs/CategoryNullableRelationFilter");
const CategoryWhereInput_1 = require("../inputs/CategoryWhereInput");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const TransactionListRelationFilter_1 = require("../inputs/TransactionListRelationFilter");
let CategoryWhereUniqueInput = class CategoryWhereUniqueInput {
};
exports.CategoryWhereUniqueInput = CategoryWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryWhereInput_1.CategoryWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryWhereInput_1.CategoryWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryWhereInput_1.CategoryWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CategoryWhereUniqueInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CategoryWhereUniqueInput.prototype, "icon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CategoryWhereUniqueInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CategoryWhereUniqueInput.prototype, "parentCategoryId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryNullableRelationFilter_1.CategoryNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryNullableRelationFilter_1.CategoryNullableRelationFilter)
], CategoryWhereUniqueInput.prototype, "parentCategory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryListRelationFilter_1.CategoryListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryListRelationFilter_1.CategoryListRelationFilter)
], CategoryWhereUniqueInput.prototype, "subcategories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionListRelationFilter_1.TransactionListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionListRelationFilter_1.TransactionListRelationFilter)
], CategoryWhereUniqueInput.prototype, "transactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetListRelationFilter_1.BudgetListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BudgetListRelationFilter_1.BudgetListRelationFilter)
], CategoryWhereUniqueInput.prototype, "Budget", void 0);
exports.CategoryWhereUniqueInput = CategoryWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryWhereUniqueInput", {})
], CategoryWhereUniqueInput);
