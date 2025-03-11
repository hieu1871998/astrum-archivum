"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BudgetAvgAggregate = class BudgetAvgAggregate {
};
exports.BudgetAvgAggregate = BudgetAvgAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], BudgetAvgAggregate.prototype, "limit", void 0);
exports.BudgetAvgAggregate = BudgetAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BudgetAvgAggregate", {})
], BudgetAvgAggregate);
