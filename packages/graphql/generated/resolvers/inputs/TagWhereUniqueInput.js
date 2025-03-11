"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableListFilter_1 = require("../inputs/StringNullableListFilter");
const TagWhereInput_1 = require("../inputs/TagWhereInput");
const TransactionListRelationFilter_1 = require("../inputs/TransactionListRelationFilter");
let TagWhereUniqueInput = class TagWhereUniqueInput {
};
exports.TagWhereUniqueInput = TagWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagWhereInput_1.TagWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagWhereInput_1.TagWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagWhereInput_1.TagWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TagWhereUniqueInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], TagWhereUniqueInput.prototype, "transactionIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionListRelationFilter_1.TransactionListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionListRelationFilter_1.TransactionListRelationFilter)
], TagWhereUniqueInput.prototype, "transactions", void 0);
exports.TagWhereUniqueInput = TagWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagWhereUniqueInput", {})
], TagWhereUniqueInput);
