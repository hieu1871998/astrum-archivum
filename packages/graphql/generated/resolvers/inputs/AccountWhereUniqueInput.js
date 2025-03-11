"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountWhereInput_1 = require("../inputs/AccountWhereInput");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumAccountTypeFilter_1 = require("../inputs/EnumAccountTypeFilter");
const EnumCurrencyFilter_1 = require("../inputs/EnumCurrencyFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const TransactionListRelationFilter_1 = require("../inputs/TransactionListRelationFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let AccountWhereUniqueInput = class AccountWhereUniqueInput {
};
exports.AccountWhereUniqueInput = AccountWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountWhereInput_1.AccountWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AccountWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountWhereInput_1.AccountWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AccountWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountWhereInput_1.AccountWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AccountWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AccountWhereUniqueInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AccountWhereUniqueInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumAccountTypeFilter_1.EnumAccountTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumAccountTypeFilter_1.EnumAccountTypeFilter)
], AccountWhereUniqueInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumCurrencyFilter_1.EnumCurrencyFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumCurrencyFilter_1.EnumCurrencyFilter)
], AccountWhereUniqueInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], AccountWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], AccountWhereUniqueInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], AccountWhereUniqueInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionListRelationFilter_1.TransactionListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionListRelationFilter_1.TransactionListRelationFilter)
], AccountWhereUniqueInput.prototype, "transactions", void 0);
exports.AccountWhereUniqueInput = AccountWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AccountWhereUniqueInput", {})
], AccountWhereUniqueInput);
