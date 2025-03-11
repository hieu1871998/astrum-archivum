"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUpdateWithoutBudgetInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryUpdateManyWithoutParentCategoryNestedInput_1 = require("../inputs/CategoryUpdateManyWithoutParentCategoryNestedInput");
const CategoryUpdateOneWithoutSubcategoriesNestedInput_1 = require("../inputs/CategoryUpdateOneWithoutSubcategoriesNestedInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TransactionUpdateManyWithoutCategoryNestedInput_1 = require("../inputs/TransactionUpdateManyWithoutCategoryNestedInput");
let CategoryUpdateWithoutBudgetInput = class CategoryUpdateWithoutBudgetInput {
};
exports.CategoryUpdateWithoutBudgetInput = CategoryUpdateWithoutBudgetInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CategoryUpdateWithoutBudgetInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CategoryUpdateWithoutBudgetInput.prototype, "icon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CategoryUpdateWithoutBudgetInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateOneWithoutSubcategoriesNestedInput_1.CategoryUpdateOneWithoutSubcategoriesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryUpdateOneWithoutSubcategoriesNestedInput_1.CategoryUpdateOneWithoutSubcategoriesNestedInput)
], CategoryUpdateWithoutBudgetInput.prototype, "parentCategory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateManyWithoutParentCategoryNestedInput_1.CategoryUpdateManyWithoutParentCategoryNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryUpdateManyWithoutParentCategoryNestedInput_1.CategoryUpdateManyWithoutParentCategoryNestedInput)
], CategoryUpdateWithoutBudgetInput.prototype, "subcategories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionUpdateManyWithoutCategoryNestedInput_1.TransactionUpdateManyWithoutCategoryNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionUpdateManyWithoutCategoryNestedInput_1.TransactionUpdateManyWithoutCategoryNestedInput)
], CategoryUpdateWithoutBudgetInput.prototype, "transactions", void 0);
exports.CategoryUpdateWithoutBudgetInput = CategoryUpdateWithoutBudgetInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryUpdateWithoutBudgetInput", {})
], CategoryUpdateWithoutBudgetInput);
