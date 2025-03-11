"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumRecurrenceTypeWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumRecurrenceTypeFilter_1 = require("../inputs/NestedEnumRecurrenceTypeFilter");
const NestedEnumRecurrenceTypeWithAggregatesFilter_1 = require("../inputs/NestedEnumRecurrenceTypeWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const RecurrenceType_1 = require("../../enums/RecurrenceType");
let EnumRecurrenceTypeWithAggregatesFilter = class EnumRecurrenceTypeWithAggregatesFilter {
};
exports.EnumRecurrenceTypeWithAggregatesFilter = EnumRecurrenceTypeWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RecurrenceType_1.RecurrenceType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumRecurrenceTypeWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RecurrenceType_1.RecurrenceType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumRecurrenceTypeWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RecurrenceType_1.RecurrenceType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumRecurrenceTypeWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumRecurrenceTypeWithAggregatesFilter_1.NestedEnumRecurrenceTypeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumRecurrenceTypeWithAggregatesFilter_1.NestedEnumRecurrenceTypeWithAggregatesFilter)
], EnumRecurrenceTypeWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumRecurrenceTypeWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumRecurrenceTypeFilter_1.NestedEnumRecurrenceTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumRecurrenceTypeFilter_1.NestedEnumRecurrenceTypeFilter)
], EnumRecurrenceTypeWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumRecurrenceTypeFilter_1.NestedEnumRecurrenceTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumRecurrenceTypeFilter_1.NestedEnumRecurrenceTypeFilter)
], EnumRecurrenceTypeWithAggregatesFilter.prototype, "_max", void 0);
exports.EnumRecurrenceTypeWithAggregatesFilter = EnumRecurrenceTypeWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumRecurrenceTypeWithAggregatesFilter", {})
], EnumRecurrenceTypeWithAggregatesFilter);
