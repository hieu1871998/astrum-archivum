"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCreateWithoutParentCategoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BudgetCreateNestedManyWithoutCategoryInput_1 = require("../inputs/BudgetCreateNestedManyWithoutCategoryInput");
const CategoryCreateNestedManyWithoutParentCategoryInput_1 = require("../inputs/CategoryCreateNestedManyWithoutParentCategoryInput");
const TransactionCreateNestedManyWithoutCategoryInput_1 = require("../inputs/TransactionCreateNestedManyWithoutCategoryInput");
let CategoryCreateWithoutParentCategoryInput = class CategoryCreateWithoutParentCategoryInput {
};
exports.CategoryCreateWithoutParentCategoryInput = CategoryCreateWithoutParentCategoryInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryCreateWithoutParentCategoryInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CategoryCreateWithoutParentCategoryInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryCreateWithoutParentCategoryInput.prototype, "icon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryCreateWithoutParentCategoryInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateNestedManyWithoutParentCategoryInput_1.CategoryCreateNestedManyWithoutParentCategoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryCreateNestedManyWithoutParentCategoryInput_1.CategoryCreateNestedManyWithoutParentCategoryInput)
], CategoryCreateWithoutParentCategoryInput.prototype, "subcategories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateNestedManyWithoutCategoryInput_1.TransactionCreateNestedManyWithoutCategoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionCreateNestedManyWithoutCategoryInput_1.TransactionCreateNestedManyWithoutCategoryInput)
], CategoryCreateWithoutParentCategoryInput.prototype, "transactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetCreateNestedManyWithoutCategoryInput_1.BudgetCreateNestedManyWithoutCategoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BudgetCreateNestedManyWithoutCategoryInput_1.BudgetCreateNestedManyWithoutCategoryInput)
], CategoryCreateWithoutParentCategoryInput.prototype, "Budget", void 0);
exports.CategoryCreateWithoutParentCategoryInput = CategoryCreateWithoutParentCategoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryCreateWithoutParentCategoryInput", {})
], CategoryCreateWithoutParentCategoryInput);
