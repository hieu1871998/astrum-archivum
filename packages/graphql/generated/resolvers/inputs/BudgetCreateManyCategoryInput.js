"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetCreateManyCategoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BudgetCreateManyCategoryInput = class BudgetCreateManyCategoryInput {
};
exports.BudgetCreateManyCategoryInput = BudgetCreateManyCategoryInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BudgetCreateManyCategoryInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BudgetCreateManyCategoryInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], BudgetCreateManyCategoryInput.prototype, "periodStart", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], BudgetCreateManyCategoryInput.prototype, "periodEnd", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], BudgetCreateManyCategoryInput.prototype, "limit", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BudgetCreateManyCategoryInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BudgetCreateManyCategoryInput.prototype, "updatedAt", void 0);
exports.BudgetCreateManyCategoryInput = BudgetCreateManyCategoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BudgetCreateManyCategoryInput", {})
], BudgetCreateManyCategoryInput);
