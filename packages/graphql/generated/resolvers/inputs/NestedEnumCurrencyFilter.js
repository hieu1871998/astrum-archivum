"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumCurrencyFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_1 = require("../../enums/Currency");
let NestedEnumCurrencyFilter = class NestedEnumCurrencyFilter {
};
exports.NestedEnumCurrencyFilter = NestedEnumCurrencyFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_1.Currency, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumCurrencyFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Currency_1.Currency], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumCurrencyFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Currency_1.Currency], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumCurrencyFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumCurrencyFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumCurrencyFilter)
], NestedEnumCurrencyFilter.prototype, "not", void 0);
exports.NestedEnumCurrencyFilter = NestedEnumCurrencyFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumCurrencyFilter", {})
], NestedEnumCurrencyFilter);
