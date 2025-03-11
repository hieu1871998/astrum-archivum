"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneTagArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagCreateInput_1 = require("../../../inputs/TagCreateInput");
const TagUpdateInput_1 = require("../../../inputs/TagUpdateInput");
const TagWhereUniqueInput_1 = require("../../../inputs/TagWhereUniqueInput");
let UpsertOneTagArgs = class UpsertOneTagArgs {
};
exports.UpsertOneTagArgs = UpsertOneTagArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagWhereUniqueInput_1.TagWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagWhereUniqueInput_1.TagWhereUniqueInput)
], UpsertOneTagArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagCreateInput_1.TagCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagCreateInput_1.TagCreateInput)
], UpsertOneTagArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagUpdateInput_1.TagUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagUpdateInput_1.TagUpdateInput)
], UpsertOneTagArgs.prototype, "update", void 0);
exports.UpsertOneTagArgs = UpsertOneTagArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneTagArgs);
