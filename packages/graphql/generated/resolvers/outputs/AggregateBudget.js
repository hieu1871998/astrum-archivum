"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBudget = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BudgetAvgAggregate_1 = require("../outputs/BudgetAvgAggregate");
const BudgetCountAggregate_1 = require("../outputs/BudgetCountAggregate");
const BudgetMaxAggregate_1 = require("../outputs/BudgetMaxAggregate");
const BudgetMinAggregate_1 = require("../outputs/BudgetMinAggregate");
const BudgetSumAggregate_1 = require("../outputs/BudgetSumAggregate");
let AggregateBudget = class AggregateBudget {
};
exports.AggregateBudget = AggregateBudget;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetCountAggregate_1.BudgetCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BudgetCountAggregate_1.BudgetCountAggregate)
], AggregateBudget.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetAvgAggregate_1.BudgetAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BudgetAvgAggregate_1.BudgetAvgAggregate)
], AggregateBudget.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetSumAggregate_1.BudgetSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BudgetSumAggregate_1.BudgetSumAggregate)
], AggregateBudget.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetMinAggregate_1.BudgetMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BudgetMinAggregate_1.BudgetMinAggregate)
], AggregateBudget.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetMaxAggregate_1.BudgetMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BudgetMaxAggregate_1.BudgetMaxAggregate)
], AggregateBudget.prototype, "_max", void 0);
exports.AggregateBudget = AggregateBudget = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateBudget", {})
], AggregateBudget);
