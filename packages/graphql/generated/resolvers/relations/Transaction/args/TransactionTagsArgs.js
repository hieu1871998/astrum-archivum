"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionTagsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagOrderByWithRelationInput_1 = require("../../../inputs/TagOrderByWithRelationInput");
const TagWhereInput_1 = require("../../../inputs/TagWhereInput");
const TagWhereUniqueInput_1 = require("../../../inputs/TagWhereUniqueInput");
const TagScalarFieldEnum_1 = require("../../../../enums/TagScalarFieldEnum");
let TransactionTagsArgs = class TransactionTagsArgs {
};
exports.TransactionTagsArgs = TransactionTagsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagWhereInput_1.TagWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagWhereInput_1.TagWhereInput)
], TransactionTagsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagOrderByWithRelationInput_1.TagOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionTagsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagWhereUniqueInput_1.TagWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagWhereUniqueInput_1.TagWhereUniqueInput)
], TransactionTagsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionTagsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionTagsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagScalarFieldEnum_1.TagScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionTagsArgs.prototype, "distinct", void 0);
exports.TransactionTagsArgs = TransactionTagsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], TransactionTagsArgs);
