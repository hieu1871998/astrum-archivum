"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BudgetSumAggregate = class BudgetSumAggregate {
};
exports.BudgetSumAggregate = BudgetSumAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], BudgetSumAggregate.prototype, "limit", void 0);
exports.BudgetSumAggregate = BudgetSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BudgetSumAggregate", {})
], BudgetSumAggregate);
