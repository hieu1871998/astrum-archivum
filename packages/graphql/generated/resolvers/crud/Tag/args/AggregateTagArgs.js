"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTagArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagOrderByWithRelationInput_1 = require("../../../inputs/TagOrderByWithRelationInput");
const TagWhereInput_1 = require("../../../inputs/TagWhereInput");
const TagWhereUniqueInput_1 = require("../../../inputs/TagWhereUniqueInput");
let AggregateTagArgs = class AggregateTagArgs {
};
exports.AggregateTagArgs = AggregateTagArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagWhereInput_1.TagWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagWhereInput_1.TagWhereInput)
], AggregateTagArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagOrderByWithRelationInput_1.TagOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateTagArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagWhereUniqueInput_1.TagWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagWhereUniqueInput_1.TagWhereUniqueInput)
], AggregateTagArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTagArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTagArgs.prototype, "skip", void 0);
exports.AggregateTagArgs = AggregateTagArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateTagArgs);
