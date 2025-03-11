"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagUpdateWithWhereUniqueWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagUpdateWithoutTransactionsInput_1 = require("../inputs/TagUpdateWithoutTransactionsInput");
const TagWhereUniqueInput_1 = require("../inputs/TagWhereUniqueInput");
let TagUpdateWithWhereUniqueWithoutTransactionsInput = class TagUpdateWithWhereUniqueWithoutTransactionsInput {
};
exports.TagUpdateWithWhereUniqueWithoutTransactionsInput = TagUpdateWithWhereUniqueWithoutTransactionsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagWhereUniqueInput_1.TagWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagWhereUniqueInput_1.TagWhereUniqueInput)
], TagUpdateWithWhereUniqueWithoutTransactionsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagUpdateWithoutTransactionsInput_1.TagUpdateWithoutTransactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagUpdateWithoutTransactionsInput_1.TagUpdateWithoutTransactionsInput)
], TagUpdateWithWhereUniqueWithoutTransactionsInput.prototype, "data", void 0);
exports.TagUpdateWithWhereUniqueWithoutTransactionsInput = TagUpdateWithWhereUniqueWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagUpdateWithWhereUniqueWithoutTransactionsInput", {})
], TagUpdateWithWhereUniqueWithoutTransactionsInput);
