"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCreateWithoutSubcategoriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BudgetCreateNestedManyWithoutCategoryInput_1 = require("../inputs/BudgetCreateNestedManyWithoutCategoryInput");
const CategoryCreateNestedOneWithoutSubcategoriesInput_1 = require("../inputs/CategoryCreateNestedOneWithoutSubcategoriesInput");
const TransactionCreateNestedManyWithoutCategoryInput_1 = require("../inputs/TransactionCreateNestedManyWithoutCategoryInput");
let CategoryCreateWithoutSubcategoriesInput = class CategoryCreateWithoutSubcategoriesInput {
};
exports.CategoryCreateWithoutSubcategoriesInput = CategoryCreateWithoutSubcategoriesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryCreateWithoutSubcategoriesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CategoryCreateWithoutSubcategoriesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryCreateWithoutSubcategoriesInput.prototype, "icon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryCreateWithoutSubcategoriesInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateNestedOneWithoutSubcategoriesInput_1.CategoryCreateNestedOneWithoutSubcategoriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryCreateNestedOneWithoutSubcategoriesInput_1.CategoryCreateNestedOneWithoutSubcategoriesInput)
], CategoryCreateWithoutSubcategoriesInput.prototype, "parentCategory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateNestedManyWithoutCategoryInput_1.TransactionCreateNestedManyWithoutCategoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionCreateNestedManyWithoutCategoryInput_1.TransactionCreateNestedManyWithoutCategoryInput)
], CategoryCreateWithoutSubcategoriesInput.prototype, "transactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetCreateNestedManyWithoutCategoryInput_1.BudgetCreateNestedManyWithoutCategoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BudgetCreateNestedManyWithoutCategoryInput_1.BudgetCreateNestedManyWithoutCategoryInput)
], CategoryCreateWithoutSubcategoriesInput.prototype, "Budget", void 0);
exports.CategoryCreateWithoutSubcategoriesInput = CategoryCreateWithoutSubcategoriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryCreateWithoutSubcategoriesInput", {})
], CategoryCreateWithoutSubcategoriesInput);
