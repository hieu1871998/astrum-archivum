"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BudgetCreateNestedManyWithoutCategoryInput_1 = require("../inputs/BudgetCreateNestedManyWithoutCategoryInput");
const CategoryCreateNestedManyWithoutParentCategoryInput_1 = require("../inputs/CategoryCreateNestedManyWithoutParentCategoryInput");
const CategoryCreateNestedOneWithoutSubcategoriesInput_1 = require("../inputs/CategoryCreateNestedOneWithoutSubcategoriesInput");
const TransactionCreateNestedManyWithoutCategoryInput_1 = require("../inputs/TransactionCreateNestedManyWithoutCategoryInput");
let CategoryCreateInput = class CategoryCreateInput {
};
exports.CategoryCreateInput = CategoryCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CategoryCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryCreateInput.prototype, "icon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryCreateInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateNestedOneWithoutSubcategoriesInput_1.CategoryCreateNestedOneWithoutSubcategoriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryCreateNestedOneWithoutSubcategoriesInput_1.CategoryCreateNestedOneWithoutSubcategoriesInput)
], CategoryCreateInput.prototype, "parentCategory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateNestedManyWithoutParentCategoryInput_1.CategoryCreateNestedManyWithoutParentCategoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryCreateNestedManyWithoutParentCategoryInput_1.CategoryCreateNestedManyWithoutParentCategoryInput)
], CategoryCreateInput.prototype, "subcategories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateNestedManyWithoutCategoryInput_1.TransactionCreateNestedManyWithoutCategoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionCreateNestedManyWithoutCategoryInput_1.TransactionCreateNestedManyWithoutCategoryInput)
], CategoryCreateInput.prototype, "transactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetCreateNestedManyWithoutCategoryInput_1.BudgetCreateNestedManyWithoutCategoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BudgetCreateNestedManyWithoutCategoryInput_1.BudgetCreateNestedManyWithoutCategoryInput)
], CategoryCreateInput.prototype, "Budget", void 0);
exports.CategoryCreateInput = CategoryCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryCreateInput", {})
], CategoryCreateInput);
