"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumTransactionTypeFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumTransactionTypeFilter_1 = require("../inputs/NestedEnumTransactionTypeFilter");
const TransactionType_1 = require("../../enums/TransactionType");
let EnumTransactionTypeFilter = class EnumTransactionTypeFilter {
};
exports.EnumTransactionTypeFilter = EnumTransactionTypeFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionType_1.TransactionType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumTransactionTypeFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionType_1.TransactionType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumTransactionTypeFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionType_1.TransactionType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumTransactionTypeFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumTransactionTypeFilter_1.NestedEnumTransactionTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumTransactionTypeFilter_1.NestedEnumTransactionTypeFilter)
], EnumTransactionTypeFilter.prototype, "not", void 0);
exports.EnumTransactionTypeFilter = EnumTransactionTypeFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumTransactionTypeFilter", {})
], EnumTransactionTypeFilter);
