"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryUpdateOneRequiredWithoutBudgetNestedInput_1 = require("../inputs/CategoryUpdateOneRequiredWithoutBudgetNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const FloatFieldUpdateOperationsInput_1 = require("../inputs/FloatFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutBudgetsNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutBudgetsNestedInput");
let BudgetUpdateInput = class BudgetUpdateInput {
};
exports.BudgetUpdateInput = BudgetUpdateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], BudgetUpdateInput.prototype, "periodStart", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], BudgetUpdateInput.prototype, "periodEnd", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], BudgetUpdateInput.prototype, "limit", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], BudgetUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], BudgetUpdateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutBudgetsNestedInput_1.UserUpdateOneRequiredWithoutBudgetsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutBudgetsNestedInput_1.UserUpdateOneRequiredWithoutBudgetsNestedInput)
], BudgetUpdateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateOneRequiredWithoutBudgetNestedInput_1.CategoryUpdateOneRequiredWithoutBudgetNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryUpdateOneRequiredWithoutBudgetNestedInput_1.CategoryUpdateOneRequiredWithoutBudgetNestedInput)
], BudgetUpdateInput.prototype, "category", void 0);
exports.BudgetUpdateInput = BudgetUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BudgetUpdateInput", {})
], BudgetUpdateInput);
