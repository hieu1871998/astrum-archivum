"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumAccountTypeWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumAccountTypeFilter_1 = require("../inputs/NestedEnumAccountTypeFilter");
const NestedEnumAccountTypeWithAggregatesFilter_1 = require("../inputs/NestedEnumAccountTypeWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const AccountType_1 = require("../../enums/AccountType");
let EnumAccountTypeWithAggregatesFilter = class EnumAccountTypeWithAggregatesFilter {
};
exports.EnumAccountTypeWithAggregatesFilter = EnumAccountTypeWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountType_1.AccountType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumAccountTypeWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountType_1.AccountType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumAccountTypeWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountType_1.AccountType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumAccountTypeWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumAccountTypeWithAggregatesFilter_1.NestedEnumAccountTypeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumAccountTypeWithAggregatesFilter_1.NestedEnumAccountTypeWithAggregatesFilter)
], EnumAccountTypeWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumAccountTypeWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumAccountTypeFilter_1.NestedEnumAccountTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumAccountTypeFilter_1.NestedEnumAccountTypeFilter)
], EnumAccountTypeWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumAccountTypeFilter_1.NestedEnumAccountTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumAccountTypeFilter_1.NestedEnumAccountTypeFilter)
], EnumAccountTypeWithAggregatesFilter.prototype, "_max", void 0);
exports.EnumAccountTypeWithAggregatesFilter = EnumAccountTypeWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumAccountTypeWithAggregatesFilter", {})
], EnumAccountTypeWithAggregatesFilter);
