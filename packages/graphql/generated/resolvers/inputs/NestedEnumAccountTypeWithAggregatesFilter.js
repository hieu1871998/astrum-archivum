"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumAccountTypeWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumAccountTypeFilter_1 = require("../inputs/NestedEnumAccountTypeFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const AccountType_1 = require("../../enums/AccountType");
let NestedEnumAccountTypeWithAggregatesFilter = class NestedEnumAccountTypeWithAggregatesFilter {
};
exports.NestedEnumAccountTypeWithAggregatesFilter = NestedEnumAccountTypeWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountType_1.AccountType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumAccountTypeWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountType_1.AccountType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumAccountTypeWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountType_1.AccountType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumAccountTypeWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumAccountTypeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumAccountTypeWithAggregatesFilter)
], NestedEnumAccountTypeWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumAccountTypeWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumAccountTypeFilter_1.NestedEnumAccountTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumAccountTypeFilter_1.NestedEnumAccountTypeFilter)
], NestedEnumAccountTypeWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumAccountTypeFilter_1.NestedEnumAccountTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumAccountTypeFilter_1.NestedEnumAccountTypeFilter)
], NestedEnumAccountTypeWithAggregatesFilter.prototype, "_max", void 0);
exports.NestedEnumAccountTypeWithAggregatesFilter = NestedEnumAccountTypeWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumAccountTypeWithAggregatesFilter", {})
], NestedEnumAccountTypeWithAggregatesFilter);
