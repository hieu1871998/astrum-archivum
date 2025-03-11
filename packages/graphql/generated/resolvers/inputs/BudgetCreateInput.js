"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateNestedOneWithoutBudgetInput_1 = require("../inputs/CategoryCreateNestedOneWithoutBudgetInput");
const UserCreateNestedOneWithoutBudgetsInput_1 = require("../inputs/UserCreateNestedOneWithoutBudgetsInput");
let BudgetCreateInput = class BudgetCreateInput {
};
exports.BudgetCreateInput = BudgetCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BudgetCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], BudgetCreateInput.prototype, "periodStart", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], BudgetCreateInput.prototype, "periodEnd", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], BudgetCreateInput.prototype, "limit", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BudgetCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BudgetCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutBudgetsInput_1.UserCreateNestedOneWithoutBudgetsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutBudgetsInput_1.UserCreateNestedOneWithoutBudgetsInput)
], BudgetCreateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateNestedOneWithoutBudgetInput_1.CategoryCreateNestedOneWithoutBudgetInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryCreateNestedOneWithoutBudgetInput_1.CategoryCreateNestedOneWithoutBudgetInput)
], BudgetCreateInput.prototype, "category", void 0);
exports.BudgetCreateInput = BudgetCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BudgetCreateInput", {})
], BudgetCreateInput);
