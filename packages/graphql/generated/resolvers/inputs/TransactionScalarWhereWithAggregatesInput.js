"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeWithAggregatesFilter_1 = require("../inputs/DateTimeWithAggregatesFilter");
const EnumCurrencyWithAggregatesFilter_1 = require("../inputs/EnumCurrencyWithAggregatesFilter");
const EnumRecurrenceTypeWithAggregatesFilter_1 = require("../inputs/EnumRecurrenceTypeWithAggregatesFilter");
const EnumTransactionTypeWithAggregatesFilter_1 = require("../inputs/EnumTransactionTypeWithAggregatesFilter");
const FloatWithAggregatesFilter_1 = require("../inputs/FloatWithAggregatesFilter");
const StringNullableListFilter_1 = require("../inputs/StringNullableListFilter");
const StringNullableWithAggregatesFilter_1 = require("../inputs/StringNullableWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let TransactionScalarWhereWithAggregatesInput = class TransactionScalarWhereWithAggregatesInput {
};
exports.TransactionScalarWhereWithAggregatesInput = TransactionScalarWhereWithAggregatesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionScalarWhereWithAggregatesInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionScalarWhereWithAggregatesInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], TransactionScalarWhereWithAggregatesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], TransactionScalarWhereWithAggregatesInput.prototype, "accountId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], TransactionScalarWhereWithAggregatesInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatWithAggregatesFilter_1.FloatWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatWithAggregatesFilter_1.FloatWithAggregatesFilter)
], TransactionScalarWhereWithAggregatesInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumCurrencyWithAggregatesFilter_1.EnumCurrencyWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumCurrencyWithAggregatesFilter_1.EnumCurrencyWithAggregatesFilter)
], TransactionScalarWhereWithAggregatesInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumTransactionTypeWithAggregatesFilter_1.EnumTransactionTypeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumTransactionTypeWithAggregatesFilter_1.EnumTransactionTypeWithAggregatesFilter)
], TransactionScalarWhereWithAggregatesInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], TransactionScalarWhereWithAggregatesInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], TransactionScalarWhereWithAggregatesInput.prototype, "notes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], TransactionScalarWhereWithAggregatesInput.prototype, "customIcon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], TransactionScalarWhereWithAggregatesInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumRecurrenceTypeWithAggregatesFilter_1.EnumRecurrenceTypeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumRecurrenceTypeWithAggregatesFilter_1.EnumRecurrenceTypeWithAggregatesFilter)
], TransactionScalarWhereWithAggregatesInput.prototype, "recurrence", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], TransactionScalarWhereWithAggregatesInput.prototype, "categoryId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], TransactionScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], TransactionScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], TransactionScalarWhereWithAggregatesInput.prototype, "tagIds", void 0);
exports.TransactionScalarWhereWithAggregatesInput = TransactionScalarWhereWithAggregatesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionScalarWhereWithAggregatesInput", {})
], TransactionScalarWhereWithAggregatesInput);
