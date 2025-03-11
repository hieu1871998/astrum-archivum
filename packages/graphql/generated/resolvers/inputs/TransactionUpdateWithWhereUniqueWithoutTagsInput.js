"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionUpdateWithWhereUniqueWithoutTagsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionUpdateWithoutTagsInput_1 = require("../inputs/TransactionUpdateWithoutTagsInput");
const TransactionWhereUniqueInput_1 = require("../inputs/TransactionWhereUniqueInput");
let TransactionUpdateWithWhereUniqueWithoutTagsInput = class TransactionUpdateWithWhereUniqueWithoutTagsInput {
};
exports.TransactionUpdateWithWhereUniqueWithoutTagsInput = TransactionUpdateWithWhereUniqueWithoutTagsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionWhereUniqueInput_1.TransactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionWhereUniqueInput_1.TransactionWhereUniqueInput)
], TransactionUpdateWithWhereUniqueWithoutTagsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionUpdateWithoutTagsInput_1.TransactionUpdateWithoutTagsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionUpdateWithoutTagsInput_1.TransactionUpdateWithoutTagsInput)
], TransactionUpdateWithWhereUniqueWithoutTagsInput.prototype, "data", void 0);
exports.TransactionUpdateWithWhereUniqueWithoutTagsInput = TransactionUpdateWithWhereUniqueWithoutTagsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionUpdateWithWhereUniqueWithoutTagsInput", {})
], TransactionUpdateWithWhereUniqueWithoutTagsInput);
