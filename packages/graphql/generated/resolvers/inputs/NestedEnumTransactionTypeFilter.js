"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumTransactionTypeFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionType_1 = require("../../enums/TransactionType");
let NestedEnumTransactionTypeFilter = class NestedEnumTransactionTypeFilter {
};
exports.NestedEnumTransactionTypeFilter = NestedEnumTransactionTypeFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionType_1.TransactionType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumTransactionTypeFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionType_1.TransactionType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumTransactionTypeFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionType_1.TransactionType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumTransactionTypeFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumTransactionTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumTransactionTypeFilter)
], NestedEnumTransactionTypeFilter.prototype, "not", void 0);
exports.NestedEnumTransactionTypeFilter = NestedEnumTransactionTypeFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumTransactionTypeFilter", {})
], NestedEnumTransactionTypeFilter);
