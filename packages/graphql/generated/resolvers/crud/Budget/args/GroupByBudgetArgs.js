"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByBudgetArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BudgetOrderByWithAggregationInput_1 = require("../../../inputs/BudgetOrderByWithAggregationInput");
const BudgetScalarWhereWithAggregatesInput_1 = require("../../../inputs/BudgetScalarWhereWithAggregatesInput");
const BudgetWhereInput_1 = require("../../../inputs/BudgetWhereInput");
const BudgetScalarFieldEnum_1 = require("../../../../enums/BudgetScalarFieldEnum");
let GroupByBudgetArgs = class GroupByBudgetArgs {
};
exports.GroupByBudgetArgs = GroupByBudgetArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetWhereInput_1.BudgetWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BudgetWhereInput_1.BudgetWhereInput)
], GroupByBudgetArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BudgetOrderByWithAggregationInput_1.BudgetOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByBudgetArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BudgetScalarFieldEnum_1.BudgetScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByBudgetArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetScalarWhereWithAggregatesInput_1.BudgetScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BudgetScalarWhereWithAggregatesInput_1.BudgetScalarWhereWithAggregatesInput)
], GroupByBudgetArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByBudgetArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByBudgetArgs.prototype, "skip", void 0);
exports.GroupByBudgetArgs = GroupByBudgetArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByBudgetArgs);
