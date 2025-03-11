"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableListFilter_1 = require("../inputs/StringNullableListFilter");
let TagScalarWhereInput = class TagScalarWhereInput {
};
exports.TagScalarWhereInput = TagScalarWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TagScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TagScalarWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], TagScalarWhereInput.prototype, "transactionIds", void 0);
exports.TagScalarWhereInput = TagScalarWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagScalarWhereInput", {})
], TagScalarWhereInput);
