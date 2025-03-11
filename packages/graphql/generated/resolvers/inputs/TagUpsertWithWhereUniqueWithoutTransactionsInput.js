"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagUpsertWithWhereUniqueWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagCreateWithoutTransactionsInput_1 = require("../inputs/TagCreateWithoutTransactionsInput");
const TagUpdateWithoutTransactionsInput_1 = require("../inputs/TagUpdateWithoutTransactionsInput");
const TagWhereUniqueInput_1 = require("../inputs/TagWhereUniqueInput");
let TagUpsertWithWhereUniqueWithoutTransactionsInput = class TagUpsertWithWhereUniqueWithoutTransactionsInput {
};
exports.TagUpsertWithWhereUniqueWithoutTransactionsInput = TagUpsertWithWhereUniqueWithoutTransactionsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagWhereUniqueInput_1.TagWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagWhereUniqueInput_1.TagWhereUniqueInput)
], TagUpsertWithWhereUniqueWithoutTransactionsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagUpdateWithoutTransactionsInput_1.TagUpdateWithoutTransactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagUpdateWithoutTransactionsInput_1.TagUpdateWithoutTransactionsInput)
], TagUpsertWithWhereUniqueWithoutTransactionsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagCreateWithoutTransactionsInput_1.TagCreateWithoutTransactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagCreateWithoutTransactionsInput_1.TagCreateWithoutTransactionsInput)
], TagUpsertWithWhereUniqueWithoutTransactionsInput.prototype, "create", void 0);
exports.TagUpsertWithWhereUniqueWithoutTransactionsInput = TagUpsertWithWhereUniqueWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagUpsertWithWhereUniqueWithoutTransactionsInput", {})
], TagUpsertWithWhereUniqueWithoutTransactionsInput);
