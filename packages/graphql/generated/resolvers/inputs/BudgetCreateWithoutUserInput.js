"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateNestedOneWithoutBudgetInput_1 = require("../inputs/CategoryCreateNestedOneWithoutBudgetInput");
let BudgetCreateWithoutUserInput = class BudgetCreateWithoutUserInput {
};
exports.BudgetCreateWithoutUserInput = BudgetCreateWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BudgetCreateWithoutUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], BudgetCreateWithoutUserInput.prototype, "periodStart", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], BudgetCreateWithoutUserInput.prototype, "periodEnd", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], BudgetCreateWithoutUserInput.prototype, "limit", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BudgetCreateWithoutUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BudgetCreateWithoutUserInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateNestedOneWithoutBudgetInput_1.CategoryCreateNestedOneWithoutBudgetInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryCreateNestedOneWithoutBudgetInput_1.CategoryCreateNestedOneWithoutBudgetInput)
], BudgetCreateWithoutUserInput.prototype, "category", void 0);
exports.BudgetCreateWithoutUserInput = BudgetCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BudgetCreateWithoutUserInput", {})
], BudgetCreateWithoutUserInput);
