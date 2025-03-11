"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumTransactionTypeWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumTransactionTypeFilter_1 = require("../inputs/NestedEnumTransactionTypeFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const TransactionType_1 = require("../../enums/TransactionType");
let NestedEnumTransactionTypeWithAggregatesFilter = class NestedEnumTransactionTypeWithAggregatesFilter {
};
exports.NestedEnumTransactionTypeWithAggregatesFilter = NestedEnumTransactionTypeWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionType_1.TransactionType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumTransactionTypeWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionType_1.TransactionType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumTransactionTypeWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionType_1.TransactionType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumTransactionTypeWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumTransactionTypeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumTransactionTypeWithAggregatesFilter)
], NestedEnumTransactionTypeWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumTransactionTypeWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumTransactionTypeFilter_1.NestedEnumTransactionTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumTransactionTypeFilter_1.NestedEnumTransactionTypeFilter)
], NestedEnumTransactionTypeWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumTransactionTypeFilter_1.NestedEnumTransactionTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumTransactionTypeFilter_1.NestedEnumTransactionTypeFilter)
], NestedEnumTransactionTypeWithAggregatesFilter.prototype, "_max", void 0);
exports.NestedEnumTransactionTypeWithAggregatesFilter = NestedEnumTransactionTypeWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumTransactionTypeWithAggregatesFilter", {})
], NestedEnumTransactionTypeWithAggregatesFilter);
