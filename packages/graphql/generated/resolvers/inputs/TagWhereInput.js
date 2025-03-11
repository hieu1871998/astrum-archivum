"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableListFilter_1 = require("../inputs/StringNullableListFilter");
const TransactionListRelationFilter_1 = require("../inputs/TransactionListRelationFilter");
let TagWhereInput = class TagWhereInput {
};
exports.TagWhereInput = TagWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TagWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TagWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], TagWhereInput.prototype, "transactionIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionListRelationFilter_1.TransactionListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionListRelationFilter_1.TransactionListRelationFilter)
], TagWhereInput.prototype, "transactions", void 0);
exports.TagWhereInput = TagWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagWhereInput", {})
], TagWhereInput);
