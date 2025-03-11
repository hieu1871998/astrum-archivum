"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCreateWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BudgetCreateNestedManyWithoutCategoryInput_1 = require("../inputs/BudgetCreateNestedManyWithoutCategoryInput");
const CategoryCreateNestedManyWithoutParentCategoryInput_1 = require("../inputs/CategoryCreateNestedManyWithoutParentCategoryInput");
const CategoryCreateNestedOneWithoutSubcategoriesInput_1 = require("../inputs/CategoryCreateNestedOneWithoutSubcategoriesInput");
let CategoryCreateWithoutTransactionsInput = class CategoryCreateWithoutTransactionsInput {
};
exports.CategoryCreateWithoutTransactionsInput = CategoryCreateWithoutTransactionsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryCreateWithoutTransactionsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CategoryCreateWithoutTransactionsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryCreateWithoutTransactionsInput.prototype, "icon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryCreateWithoutTransactionsInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateNestedOneWithoutSubcategoriesInput_1.CategoryCreateNestedOneWithoutSubcategoriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryCreateNestedOneWithoutSubcategoriesInput_1.CategoryCreateNestedOneWithoutSubcategoriesInput)
], CategoryCreateWithoutTransactionsInput.prototype, "parentCategory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateNestedManyWithoutParentCategoryInput_1.CategoryCreateNestedManyWithoutParentCategoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryCreateNestedManyWithoutParentCategoryInput_1.CategoryCreateNestedManyWithoutParentCategoryInput)
], CategoryCreateWithoutTransactionsInput.prototype, "subcategories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetCreateNestedManyWithoutCategoryInput_1.BudgetCreateNestedManyWithoutCategoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BudgetCreateNestedManyWithoutCategoryInput_1.BudgetCreateNestedManyWithoutCategoryInput)
], CategoryCreateWithoutTransactionsInput.prototype, "Budget", void 0);
exports.CategoryCreateWithoutTransactionsInput = CategoryCreateWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryCreateWithoutTransactionsInput", {})
], CategoryCreateWithoutTransactionsInput);
