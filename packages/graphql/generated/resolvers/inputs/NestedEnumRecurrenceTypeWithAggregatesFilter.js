"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumRecurrenceTypeWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumRecurrenceTypeFilter_1 = require("../inputs/NestedEnumRecurrenceTypeFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const RecurrenceType_1 = require("../../enums/RecurrenceType");
let NestedEnumRecurrenceTypeWithAggregatesFilter = class NestedEnumRecurrenceTypeWithAggregatesFilter {
};
exports.NestedEnumRecurrenceTypeWithAggregatesFilter = NestedEnumRecurrenceTypeWithAggregatesFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RecurrenceType_1.RecurrenceType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumRecurrenceTypeWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RecurrenceType_1.RecurrenceType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumRecurrenceTypeWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RecurrenceType_1.RecurrenceType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumRecurrenceTypeWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumRecurrenceTypeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumRecurrenceTypeWithAggregatesFilter)
], NestedEnumRecurrenceTypeWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumRecurrenceTypeWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumRecurrenceTypeFilter_1.NestedEnumRecurrenceTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumRecurrenceTypeFilter_1.NestedEnumRecurrenceTypeFilter)
], NestedEnumRecurrenceTypeWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumRecurrenceTypeFilter_1.NestedEnumRecurrenceTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumRecurrenceTypeFilter_1.NestedEnumRecurrenceTypeFilter)
], NestedEnumRecurrenceTypeWithAggregatesFilter.prototype, "_max", void 0);
exports.NestedEnumRecurrenceTypeWithAggregatesFilter = NestedEnumRecurrenceTypeWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumRecurrenceTypeWithAggregatesFilter", {})
], NestedEnumRecurrenceTypeWithAggregatesFilter);
