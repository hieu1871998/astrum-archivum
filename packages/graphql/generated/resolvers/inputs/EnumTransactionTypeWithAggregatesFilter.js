"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumTransactionTypeWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumTransactionTypeFilter_1 = require("../inputs/NestedEnumTransactionTypeFilter");
const NestedEnumTransactionTypeWithAggregatesFilter_1 = require("../inputs/NestedEnumTransactionTypeWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const TransactionType_1 = require("../../enums/TransactionType");
let EnumTransactionTypeWithAggregatesFilter = class EnumTransactionTypeWithAggregatesFilter {
};
exports.EnumTransactionTypeWithAggregatesFilter = EnumTransactionTypeWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionType_1.TransactionType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumTransactionTypeWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionType_1.TransactionType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumTransactionTypeWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionType_1.TransactionType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumTransactionTypeWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumTransactionTypeWithAggregatesFilter_1.NestedEnumTransactionTypeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumTransactionTypeWithAggregatesFilter_1.NestedEnumTransactionTypeWithAggregatesFilter)
], EnumTransactionTypeWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumTransactionTypeWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumTransactionTypeFilter_1.NestedEnumTransactionTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumTransactionTypeFilter_1.NestedEnumTransactionTypeFilter)
], EnumTransactionTypeWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumTransactionTypeFilter_1.NestedEnumTransactionTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumTransactionTypeFilter_1.NestedEnumTransactionTypeFilter)
], EnumTransactionTypeWithAggregatesFilter.prototype, "_max", void 0);
exports.EnumTransactionTypeWithAggregatesFilter = EnumTransactionTypeWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumTransactionTypeWithAggregatesFilter", {})
], EnumTransactionTypeWithAggregatesFilter);
