"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountRelationFilter_1 = require("../inputs/AccountRelationFilter");
const CategoryNullableRelationFilter_1 = require("../inputs/CategoryNullableRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumCurrencyFilter_1 = require("../inputs/EnumCurrencyFilter");
const EnumRecurrenceTypeFilter_1 = require("../inputs/EnumRecurrenceTypeFilter");
const EnumTransactionTypeFilter_1 = require("../inputs/EnumTransactionTypeFilter");
const FloatFilter_1 = require("../inputs/FloatFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const StringNullableListFilter_1 = require("../inputs/StringNullableListFilter");
const TagListRelationFilter_1 = require("../inputs/TagListRelationFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let TransactionWhereInput = class TransactionWhereInput {
};
exports.TransactionWhereInput = TransactionWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TransactionWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TransactionWhereInput.prototype, "accountId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TransactionWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFilter_1.FloatFilter)
], TransactionWhereInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumCurrencyFilter_1.EnumCurrencyFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumCurrencyFilter_1.EnumCurrencyFilter)
], TransactionWhereInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumTransactionTypeFilter_1.EnumTransactionTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumTransactionTypeFilter_1.EnumTransactionTypeFilter)
], TransactionWhereInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], TransactionWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], TransactionWhereInput.prototype, "notes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], TransactionWhereInput.prototype, "customIcon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TransactionWhereInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumRecurrenceTypeFilter_1.EnumRecurrenceTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumRecurrenceTypeFilter_1.EnumRecurrenceTypeFilter)
], TransactionWhereInput.prototype, "recurrence", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], TransactionWhereInput.prototype, "categoryId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TransactionWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TransactionWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], TransactionWhereInput.prototype, "tagIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountRelationFilter_1.AccountRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountRelationFilter_1.AccountRelationFilter)
], TransactionWhereInput.prototype, "account", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], TransactionWhereInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryNullableRelationFilter_1.CategoryNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryNullableRelationFilter_1.CategoryNullableRelationFilter)
], TransactionWhereInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagListRelationFilter_1.TagListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagListRelationFilter_1.TagListRelationFilter)
], TransactionWhereInput.prototype, "tags", void 0);
exports.TransactionWhereInput = TransactionWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionWhereInput", {})
], TransactionWhereInput);
