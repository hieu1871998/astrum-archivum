"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagUpdateWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let TagUpdateWithoutTransactionsInput = class TagUpdateWithoutTransactionsInput {
};
exports.TagUpdateWithoutTransactionsInput = TagUpdateWithoutTransactionsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TagUpdateWithoutTransactionsInput.prototype, "name", void 0);
exports.TagUpdateWithoutTransactionsInput = TagUpdateWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagUpdateWithoutTransactionsInput", {})
], TagUpdateWithoutTransactionsInput);
