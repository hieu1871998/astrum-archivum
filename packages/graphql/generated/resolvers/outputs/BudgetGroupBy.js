"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BudgetAvgAggregate_1 = require("../outputs/BudgetAvgAggregate");
const BudgetCountAggregate_1 = require("../outputs/BudgetCountAggregate");
const BudgetMaxAggregate_1 = require("../outputs/BudgetMaxAggregate");
const BudgetMinAggregate_1 = require("../outputs/BudgetMinAggregate");
const BudgetSumAggregate_1 = require("../outputs/BudgetSumAggregate");
let BudgetGroupBy = class BudgetGroupBy {
};
exports.BudgetGroupBy = BudgetGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BudgetGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BudgetGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BudgetGroupBy.prototype, "categoryId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], BudgetGroupBy.prototype, "periodStart", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], BudgetGroupBy.prototype, "periodEnd", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], BudgetGroupBy.prototype, "limit", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], BudgetGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], BudgetGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetCountAggregate_1.BudgetCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BudgetCountAggregate_1.BudgetCountAggregate)
], BudgetGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetAvgAggregate_1.BudgetAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BudgetAvgAggregate_1.BudgetAvgAggregate)
], BudgetGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetSumAggregate_1.BudgetSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BudgetSumAggregate_1.BudgetSumAggregate)
], BudgetGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetMinAggregate_1.BudgetMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BudgetMinAggregate_1.BudgetMinAggregate)
], BudgetGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetMaxAggregate_1.BudgetMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BudgetMaxAggregate_1.BudgetMaxAggregate)
], BudgetGroupBy.prototype, "_max", void 0);
exports.BudgetGroupBy = BudgetGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BudgetGroupBy", {})
], BudgetGroupBy);
