"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionUpsertWithWhereUniqueWithoutTagsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateWithoutTagsInput_1 = require("../inputs/TransactionCreateWithoutTagsInput");
const TransactionUpdateWithoutTagsInput_1 = require("../inputs/TransactionUpdateWithoutTagsInput");
const TransactionWhereUniqueInput_1 = require("../inputs/TransactionWhereUniqueInput");
let TransactionUpsertWithWhereUniqueWithoutTagsInput = class TransactionUpsertWithWhereUniqueWithoutTagsInput {
};
exports.TransactionUpsertWithWhereUniqueWithoutTagsInput = TransactionUpsertWithWhereUniqueWithoutTagsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionWhereUniqueInput_1.TransactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionWhereUniqueInput_1.TransactionWhereUniqueInput)
], TransactionUpsertWithWhereUniqueWithoutTagsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionUpdateWithoutTagsInput_1.TransactionUpdateWithoutTagsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionUpdateWithoutTagsInput_1.TransactionUpdateWithoutTagsInput)
], TransactionUpsertWithWhereUniqueWithoutTagsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateWithoutTagsInput_1.TransactionCreateWithoutTagsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionCreateWithoutTagsInput_1.TransactionCreateWithoutTagsInput)
], TransactionUpsertWithWhereUniqueWithoutTagsInput.prototype, "create", void 0);
exports.TransactionUpsertWithWhereUniqueWithoutTagsInput = TransactionUpsertWithWhereUniqueWithoutTagsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionUpsertWithWhereUniqueWithoutTagsInput", {})
], TransactionUpsertWithWhereUniqueWithoutTagsInput);
