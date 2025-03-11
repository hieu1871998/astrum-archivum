"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumAccountTypeFilter_1 = require("../inputs/EnumAccountTypeFilter");
const EnumCurrencyFilter_1 = require("../inputs/EnumCurrencyFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const TransactionListRelationFilter_1 = require("../inputs/TransactionListRelationFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let AccountWhereInput = class AccountWhereInput {
};
exports.AccountWhereInput = AccountWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AccountWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AccountWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AccountWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AccountWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AccountWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AccountWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumAccountTypeFilter_1.EnumAccountTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumAccountTypeFilter_1.EnumAccountTypeFilter)
], AccountWhereInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumCurrencyFilter_1.EnumCurrencyFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumCurrencyFilter_1.EnumCurrencyFilter)
], AccountWhereInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], AccountWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], AccountWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], AccountWhereInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionListRelationFilter_1.TransactionListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionListRelationFilter_1.TransactionListRelationFilter)
], AccountWhereInput.prototype, "transactions", void 0);
exports.AccountWhereInput = AccountWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AccountWhereInput", {})
], AccountWhereInput);
