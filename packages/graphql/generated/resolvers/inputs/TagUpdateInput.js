"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TransactionUpdateManyWithoutTagsNestedInput_1 = require("../inputs/TransactionUpdateManyWithoutTagsNestedInput");
let TagUpdateInput = class TagUpdateInput {
};
exports.TagUpdateInput = TagUpdateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TagUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionUpdateManyWithoutTagsNestedInput_1.TransactionUpdateManyWithoutTagsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionUpdateManyWithoutTagsNestedInput_1.TransactionUpdateManyWithoutTagsNestedInput)
], TagUpdateInput.prototype, "transactions", void 0);
exports.TagUpdateInput = TagUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagUpdateInput", {})
], TagUpdateInput);
