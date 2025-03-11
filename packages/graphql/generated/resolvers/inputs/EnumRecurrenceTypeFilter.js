"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumRecurrenceTypeFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumRecurrenceTypeFilter_1 = require("../inputs/NestedEnumRecurrenceTypeFilter");
const RecurrenceType_1 = require("../../enums/RecurrenceType");
let EnumRecurrenceTypeFilter = class EnumRecurrenceTypeFilter {
};
exports.EnumRecurrenceTypeFilter = EnumRecurrenceTypeFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RecurrenceType_1.RecurrenceType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumRecurrenceTypeFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RecurrenceType_1.RecurrenceType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumRecurrenceTypeFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RecurrenceType_1.RecurrenceType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumRecurrenceTypeFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumRecurrenceTypeFilter_1.NestedEnumRecurrenceTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumRecurrenceTypeFilter_1.NestedEnumRecurrenceTypeFilter)
], EnumRecurrenceTypeFilter.prototype, "not", void 0);
exports.EnumRecurrenceTypeFilter = EnumRecurrenceTypeFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumRecurrenceTypeFilter", {})
], EnumRecurrenceTypeFilter);
