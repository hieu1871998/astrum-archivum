"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumRecurrenceTypeFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RecurrenceType_1 = require("../../enums/RecurrenceType");
let NestedEnumRecurrenceTypeFilter = class NestedEnumRecurrenceTypeFilter {
};
exports.NestedEnumRecurrenceTypeFilter = NestedEnumRecurrenceTypeFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RecurrenceType_1.RecurrenceType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumRecurrenceTypeFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RecurrenceType_1.RecurrenceType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumRecurrenceTypeFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RecurrenceType_1.RecurrenceType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumRecurrenceTypeFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumRecurrenceTypeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumRecurrenceTypeFilter)
], NestedEnumRecurrenceTypeFilter.prototype, "not", void 0);
exports.NestedEnumRecurrenceTypeFilter = NestedEnumRecurrenceTypeFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumRecurrenceTypeFilter", {})
], NestedEnumRecurrenceTypeFilter);
