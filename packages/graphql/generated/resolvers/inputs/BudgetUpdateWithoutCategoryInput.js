"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetUpdateWithoutCategoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const FloatFieldUpdateOperationsInput_1 = require("../inputs/FloatFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutBudgetsNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutBudgetsNestedInput");
let BudgetUpdateWithoutCategoryInput = class BudgetUpdateWithoutCategoryInput {
};
exports.BudgetUpdateWithoutCategoryInput = BudgetUpdateWithoutCategoryInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], BudgetUpdateWithoutCategoryInput.prototype, "periodStart", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], BudgetUpdateWithoutCategoryInput.prototype, "periodEnd", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], BudgetUpdateWithoutCategoryInput.prototype, "limit", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], BudgetUpdateWithoutCategoryInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], BudgetUpdateWithoutCategoryInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutBudgetsNestedInput_1.UserUpdateOneRequiredWithoutBudgetsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutBudgetsNestedInput_1.UserUpdateOneRequiredWithoutBudgetsNestedInput)
], BudgetUpdateWithoutCategoryInput.prototype, "user", void 0);
exports.BudgetUpdateWithoutCategoryInput = BudgetUpdateWithoutCategoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BudgetUpdateWithoutCategoryInput", {})
], BudgetUpdateWithoutCategoryInput);
