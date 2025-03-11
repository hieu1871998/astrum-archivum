"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumCurrencyWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumCurrencyFilter_1 = require("../inputs/NestedEnumCurrencyFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Currency_1 = require("../../enums/Currency");
let NestedEnumCurrencyWithAggregatesFilter = class NestedEnumCurrencyWithAggregatesFilter {
};
exports.NestedEnumCurrencyWithAggregatesFilter = NestedEnumCurrencyWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_1.Currency, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumCurrencyWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Currency_1.Currency], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumCurrencyWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Currency_1.Currency], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumCurrencyWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumCurrencyWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumCurrencyWithAggregatesFilter)
], NestedEnumCurrencyWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumCurrencyWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumCurrencyFilter_1.NestedEnumCurrencyFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumCurrencyFilter_1.NestedEnumCurrencyFilter)
], NestedEnumCurrencyWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumCurrencyFilter_1.NestedEnumCurrencyFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumCurrencyFilter_1.NestedEnumCurrencyFilter)
], NestedEnumCurrencyWithAggregatesFilter.prototype, "_max", void 0);
exports.NestedEnumCurrencyWithAggregatesFilter = NestedEnumCurrencyWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumCurrencyWithAggregatesFilter", {})
], NestedEnumCurrencyWithAggregatesFilter);
