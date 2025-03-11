"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUpdateWithoutParentCategoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BudgetUpdateManyWithoutCategoryNestedInput_1 = require("../inputs/BudgetUpdateManyWithoutCategoryNestedInput");
const CategoryUpdateManyWithoutParentCategoryNestedInput_1 = require("../inputs/CategoryUpdateManyWithoutParentCategoryNestedInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TransactionUpdateManyWithoutCategoryNestedInput_1 = require("../inputs/TransactionUpdateManyWithoutCategoryNestedInput");
let CategoryUpdateWithoutParentCategoryInput = class CategoryUpdateWithoutParentCategoryInput {
};
exports.CategoryUpdateWithoutParentCategoryInput = CategoryUpdateWithoutParentCategoryInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CategoryUpdateWithoutParentCategoryInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CategoryUpdateWithoutParentCategoryInput.prototype, "icon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], CategoryUpdateWithoutParentCategoryInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateManyWithoutParentCategoryNestedInput_1.CategoryUpdateManyWithoutParentCategoryNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryUpdateManyWithoutParentCategoryNestedInput_1.CategoryUpdateManyWithoutParentCategoryNestedInput)
], CategoryUpdateWithoutParentCategoryInput.prototype, "subcategories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionUpdateManyWithoutCategoryNestedInput_1.TransactionUpdateManyWithoutCategoryNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionUpdateManyWithoutCategoryNestedInput_1.TransactionUpdateManyWithoutCategoryNestedInput)
], CategoryUpdateWithoutParentCategoryInput.prototype, "transactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetUpdateManyWithoutCategoryNestedInput_1.BudgetUpdateManyWithoutCategoryNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BudgetUpdateManyWithoutCategoryNestedInput_1.BudgetUpdateManyWithoutCategoryNestedInput)
], CategoryUpdateWithoutParentCategoryInput.prototype, "Budget", void 0);
exports.CategoryUpdateWithoutParentCategoryInput = CategoryUpdateWithoutParentCategoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryUpdateWithoutParentCategoryInput", {})
], CategoryUpdateWithoutParentCategoryInput);
