"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumAccountTypeFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumAccountTypeFilter_1 = require("../inputs/NestedEnumAccountTypeFilter");
const AccountType_1 = require("../../enums/AccountType");
let EnumAccountTypeFilter = class EnumAccountTypeFilter {
};
exports.EnumAccountTypeFilter = EnumAccountTypeFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountType_1.AccountType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumAccountTypeFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountType_1.AccountType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumAccountTypeFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountType_1.AccountType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumAccountTypeFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumAccountTypeFilter_1.NestedEnumAccountTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumAccountTypeFilter_1.NestedEnumAccountTypeFilter)
], EnumAccountTypeFilter.prototype, "not", void 0);
exports.EnumAccountTypeFilter = EnumAccountTypeFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumAccountTypeFilter", {})
], EnumAccountTypeFilter);
