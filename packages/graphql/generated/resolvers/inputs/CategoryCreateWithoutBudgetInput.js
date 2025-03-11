"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCreateWithoutBudgetInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateNestedManyWithoutParentCategoryInput_1 = require("../inputs/CategoryCreateNestedManyWithoutParentCategoryInput");
const CategoryCreateNestedOneWithoutSubcategoriesInput_1 = require("../inputs/CategoryCreateNestedOneWithoutSubcategoriesInput");
const TransactionCreateNestedManyWithoutCategoryInput_1 = require("../inputs/TransactionCreateNestedManyWithoutCategoryInput");
let CategoryCreateWithoutBudgetInput = class CategoryCreateWithoutBudgetInput {
};
exports.CategoryCreateWithoutBudgetInput = CategoryCreateWithoutBudgetInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryCreateWithoutBudgetInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CategoryCreateWithoutBudgetInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryCreateWithoutBudgetInput.prototype, "icon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryCreateWithoutBudgetInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateNestedOneWithoutSubcategoriesInput_1.CategoryCreateNestedOneWithoutSubcategoriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryCreateNestedOneWithoutSubcategoriesInput_1.CategoryCreateNestedOneWithoutSubcategoriesInput)
], CategoryCreateWithoutBudgetInput.prototype, "parentCategory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateNestedManyWithoutParentCategoryInput_1.CategoryCreateNestedManyWithoutParentCategoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryCreateNestedManyWithoutParentCategoryInput_1.CategoryCreateNestedManyWithoutParentCategoryInput)
], CategoryCreateWithoutBudgetInput.prototype, "subcategories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateNestedManyWithoutCategoryInput_1.TransactionCreateNestedManyWithoutCategoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionCreateNestedManyWithoutCategoryInput_1.TransactionCreateNestedManyWithoutCategoryInput)
], CategoryCreateWithoutBudgetInput.prototype, "transactions", void 0);
exports.CategoryCreateWithoutBudgetInput = CategoryCreateWithoutBudgetInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryCreateWithoutBudgetInput", {})
], CategoryCreateWithoutBudgetInput);
