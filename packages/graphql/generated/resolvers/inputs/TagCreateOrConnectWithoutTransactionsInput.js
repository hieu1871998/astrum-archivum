"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagCreateOrConnectWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagCreateWithoutTransactionsInput_1 = require("../inputs/TagCreateWithoutTransactionsInput");
const TagWhereUniqueInput_1 = require("../inputs/TagWhereUniqueInput");
let TagCreateOrConnectWithoutTransactionsInput = class TagCreateOrConnectWithoutTransactionsInput {
};
exports.TagCreateOrConnectWithoutTransactionsInput = TagCreateOrConnectWithoutTransactionsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagWhereUniqueInput_1.TagWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagWhereUniqueInput_1.TagWhereUniqueInput)
], TagCreateOrConnectWithoutTransactionsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagCreateWithoutTransactionsInput_1.TagCreateWithoutTransactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagCreateWithoutTransactionsInput_1.TagCreateWithoutTransactionsInput)
], TagCreateOrConnectWithoutTransactionsInput.prototype, "create", void 0);
exports.TagCreateOrConnectWithoutTransactionsInput = TagCreateOrConnectWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagCreateOrConnectWithoutTransactionsInput", {})
], TagCreateOrConnectWithoutTransactionsInput);
