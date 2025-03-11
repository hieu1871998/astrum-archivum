"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCreateOrConnectWithoutTagsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateWithoutTagsInput_1 = require("../inputs/TransactionCreateWithoutTagsInput");
const TransactionWhereUniqueInput_1 = require("../inputs/TransactionWhereUniqueInput");
let TransactionCreateOrConnectWithoutTagsInput = class TransactionCreateOrConnectWithoutTagsInput {
};
exports.TransactionCreateOrConnectWithoutTagsInput = TransactionCreateOrConnectWithoutTagsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionWhereUniqueInput_1.TransactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionWhereUniqueInput_1.TransactionWhereUniqueInput)
], TransactionCreateOrConnectWithoutTagsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateWithoutTagsInput_1.TransactionCreateWithoutTagsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionCreateWithoutTagsInput_1.TransactionCreateWithoutTagsInput)
], TransactionCreateOrConnectWithoutTagsInput.prototype, "create", void 0);
exports.TransactionCreateOrConnectWithoutTagsInput = TransactionCreateOrConnectWithoutTagsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionCreateOrConnectWithoutTagsInput", {})
], TransactionCreateOrConnectWithoutTagsInput);
