"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumAccountTypeFilter_1 = require("../inputs/EnumAccountTypeFilter");
const EnumCurrencyFilter_1 = require("../inputs/EnumCurrencyFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let AccountScalarWhereInput = class AccountScalarWhereInput {
};
exports.AccountScalarWhereInput = AccountScalarWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AccountScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AccountScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AccountScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AccountScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AccountScalarWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AccountScalarWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumAccountTypeFilter_1.EnumAccountTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumAccountTypeFilter_1.EnumAccountTypeFilter)
], AccountScalarWhereInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumCurrencyFilter_1.EnumCurrencyFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumCurrencyFilter_1.EnumCurrencyFilter)
], AccountScalarWhereInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], AccountScalarWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], AccountScalarWhereInput.prototype, "updatedAt", void 0);
exports.AccountScalarWhereInput = AccountScalarWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AccountScalarWhereInput", {})
], AccountScalarWhereInput);
