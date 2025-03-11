"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionWhereUniqueInput = void 0;
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
const TransactionWhereInput_1 = require("../inputs/TransactionWhereInput");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let TransactionWhereUniqueInput = class TransactionWhereUniqueInput {
};
exports.TransactionWhereUniqueInput = TransactionWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereInput_1.TransactionWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereInput_1.TransactionWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereInput_1.TransactionWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TransactionWhereUniqueInput.prototype, "accountId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TransactionWhereUniqueInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFilter_1.FloatFilter)
], TransactionWhereUniqueInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumCurrencyFilter_1.EnumCurrencyFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumCurrencyFilter_1.EnumCurrencyFilter)
], TransactionWhereUniqueInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumTransactionTypeFilter_1.EnumTransactionTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumTransactionTypeFilter_1.EnumTransactionTypeFilter)
], TransactionWhereUniqueInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], TransactionWhereUniqueInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], TransactionWhereUniqueInput.prototype, "notes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], TransactionWhereUniqueInput.prototype, "customIcon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TransactionWhereUniqueInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumRecurrenceTypeFilter_1.EnumRecurrenceTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumRecurrenceTypeFilter_1.EnumRecurrenceTypeFilter)
], TransactionWhereUniqueInput.prototype, "recurrence", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], TransactionWhereUniqueInput.prototype, "categoryId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TransactionWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TransactionWhereUniqueInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], TransactionWhereUniqueInput.prototype, "tagIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountRelationFilter_1.AccountRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountRelationFilter_1.AccountRelationFilter)
], TransactionWhereUniqueInput.prototype, "account", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], TransactionWhereUniqueInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryNullableRelationFilter_1.CategoryNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryNullableRelationFilter_1.CategoryNullableRelationFilter)
], TransactionWhereUniqueInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagListRelationFilter_1.TagListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagListRelationFilter_1.TagListRelationFilter)
], TransactionWhereUniqueInput.prototype, "tags", void 0);
exports.TransactionWhereUniqueInput = TransactionWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionWhereUniqueInput", {})
], TransactionWhereUniqueInput);
