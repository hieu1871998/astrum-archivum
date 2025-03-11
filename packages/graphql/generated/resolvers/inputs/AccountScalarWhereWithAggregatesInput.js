"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeWithAggregatesFilter_1 = require("../inputs/DateTimeWithAggregatesFilter");
const EnumAccountTypeWithAggregatesFilter_1 = require("../inputs/EnumAccountTypeWithAggregatesFilter");
const EnumCurrencyWithAggregatesFilter_1 = require("../inputs/EnumCurrencyWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let AccountScalarWhereWithAggregatesInput = class AccountScalarWhereWithAggregatesInput {
};
exports.AccountScalarWhereWithAggregatesInput = AccountScalarWhereWithAggregatesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AccountScalarWhereWithAggregatesInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AccountScalarWhereWithAggregatesInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AccountScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AccountScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], AccountScalarWhereWithAggregatesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], AccountScalarWhereWithAggregatesInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], AccountScalarWhereWithAggregatesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumAccountTypeWithAggregatesFilter_1.EnumAccountTypeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumAccountTypeWithAggregatesFilter_1.EnumAccountTypeWithAggregatesFilter)
], AccountScalarWhereWithAggregatesInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumCurrencyWithAggregatesFilter_1.EnumCurrencyWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumCurrencyWithAggregatesFilter_1.EnumCurrencyWithAggregatesFilter)
], AccountScalarWhereWithAggregatesInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], AccountScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], AccountScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
exports.AccountScalarWhereWithAggregatesInput = AccountScalarWhereWithAggregatesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AccountScalarWhereWithAggregatesInput", {})
], AccountScalarWhereWithAggregatesInput);
