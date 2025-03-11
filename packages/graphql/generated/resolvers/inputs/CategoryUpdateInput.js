"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BudgetUpdateManyWithoutCategoryNestedInput_1 = require("../inputs/BudgetUpdateManyWithoutCategoryNestedInput");
const CategoryUpdateManyWithoutParentCategoryNestedInput_1 = require("../inputs/CategoryUpdateManyWithoutParentCategoryNestedInput");
const CategoryUpdateOneWithoutSubcategoriesNestedInput_1 = require("../inputs/CategoryUpdateOneWithoutSubcategoriesNestedInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TransactionUpdateManyWithoutCategoryNestedInput_1 = require("../inputs/TransactionUpdateManyWithoutCategoryNestedInput");
let CategoryUpdateInput = class CategoryUpdateInput {
};
exports.CategoryUpdateInput = CategoryUpdateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CategoryUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CategoryUpdateInput.prototype, "icon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CategoryUpdateInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateOneWithoutSubcategoriesNestedInput_1.CategoryUpdateOneWithoutSubcategoriesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryUpdateOneWithoutSubcategoriesNestedInput_1.CategoryUpdateOneWithoutSubcategoriesNestedInput)
], CategoryUpdateInput.prototype, "parentCategory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateManyWithoutParentCategoryNestedInput_1.CategoryUpdateManyWithoutParentCategoryNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryUpdateManyWithoutParentCategoryNestedInput_1.CategoryUpdateManyWithoutParentCategoryNestedInput)
], CategoryUpdateInput.prototype, "subcategories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionUpdateManyWithoutCategoryNestedInput_1.TransactionUpdateManyWithoutCategoryNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionUpdateManyWithoutCategoryNestedInput_1.TransactionUpdateManyWithoutCategoryNestedInput)
], CategoryUpdateInput.prototype, "transactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetUpdateManyWithoutCategoryNestedInput_1.BudgetUpdateManyWithoutCategoryNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BudgetUpdateManyWithoutCategoryNestedInput_1.BudgetUpdateManyWithoutCategoryNestedInput)
], CategoryUpdateInput.prototype, "Budget", void 0);
exports.CategoryUpdateInput = CategoryUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryUpdateInput", {})
], CategoryUpdateInput);
