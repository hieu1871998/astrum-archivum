"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetCreateWithoutCategoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutBudgetsInput_1 = require("../inputs/UserCreateNestedOneWithoutBudgetsInput");
let BudgetCreateWithoutCategoryInput = class BudgetCreateWithoutCategoryInput {
};
exports.BudgetCreateWithoutCategoryInput = BudgetCreateWithoutCategoryInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BudgetCreateWithoutCategoryInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], BudgetCreateWithoutCategoryInput.prototype, "periodStart", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], BudgetCreateWithoutCategoryInput.prototype, "periodEnd", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], BudgetCreateWithoutCategoryInput.prototype, "limit", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BudgetCreateWithoutCategoryInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BudgetCreateWithoutCategoryInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutBudgetsInput_1.UserCreateNestedOneWithoutBudgetsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutBudgetsInput_1.UserCreateNestedOneWithoutBudgetsInput)
], BudgetCreateWithoutCategoryInput.prototype, "user", void 0);
exports.BudgetCreateWithoutCategoryInput = BudgetCreateWithoutCategoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BudgetCreateWithoutCategoryInput", {})
], BudgetCreateWithoutCategoryInput);
