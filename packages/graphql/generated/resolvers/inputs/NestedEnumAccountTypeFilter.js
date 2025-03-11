"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumAccountTypeFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountType_1 = require("../../enums/AccountType");
let NestedEnumAccountTypeFilter = class NestedEnumAccountTypeFilter {
};
exports.NestedEnumAccountTypeFilter = NestedEnumAccountTypeFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountType_1.AccountType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumAccountTypeFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountType_1.AccountType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumAccountTypeFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountType_1.AccountType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumAccountTypeFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumAccountTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumAccountTypeFilter)
], NestedEnumAccountTypeFilter.prototype, "not", void 0);
exports.NestedEnumAccountTypeFilter = NestedEnumAccountTypeFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumAccountTypeFilter", {})
], NestedEnumAccountTypeFilter);
