"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumCurrencyWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumCurrencyFilter_1 = require("../inputs/NestedEnumCurrencyFilter");
const NestedEnumCurrencyWithAggregatesFilter_1 = require("../inputs/NestedEnumCurrencyWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Currency_1 = require("../../enums/Currency");
let EnumCurrencyWithAggregatesFilter = class EnumCurrencyWithAggregatesFilter {
};
exports.EnumCurrencyWithAggregatesFilter = EnumCurrencyWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_1.Currency, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumCurrencyWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Currency_1.Currency], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumCurrencyWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Currency_1.Currency], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumCurrencyWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumCurrencyWithAggregatesFilter_1.NestedEnumCurrencyWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumCurrencyWithAggregatesFilter_1.NestedEnumCurrencyWithAggregatesFilter)
], EnumCurrencyWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumCurrencyWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumCurrencyFilter_1.NestedEnumCurrencyFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumCurrencyFilter_1.NestedEnumCurrencyFilter)
], EnumCurrencyWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumCurrencyFilter_1.NestedEnumCurrencyFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumCurrencyFilter_1.NestedEnumCurrencyFilter)
], EnumCurrencyWithAggregatesFilter.prototype, "_max", void 0);
exports.EnumCurrencyWithAggregatesFilter = EnumCurrencyWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumCurrencyWithAggregatesFilter", {})
], EnumCurrencyWithAggregatesFilter);
