"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCreateNestedManyWithoutTagsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateOrConnectWithoutTagsInput_1 = require("../inputs/TransactionCreateOrConnectWithoutTagsInput");
const TransactionCreateWithoutTagsInput_1 = require("../inputs/TransactionCreateWithoutTagsInput");
const TransactionWhereUniqueInput_1 = require("../inputs/TransactionWhereUniqueInput");
let TransactionCreateNestedManyWithoutTagsInput = class TransactionCreateNestedManyWithoutTagsInput {
};
exports.TransactionCreateNestedManyWithoutTagsInput = TransactionCreateNestedManyWithoutTagsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionCreateWithoutTagsInput_1.TransactionCreateWithoutTagsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionCreateNestedManyWithoutTagsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionCreateOrConnectWithoutTagsInput_1.TransactionCreateOrConnectWithoutTagsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionCreateNestedManyWithoutTagsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereUniqueInput_1.TransactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionCreateNestedManyWithoutTagsInput.prototype, "connect", void 0);
exports.TransactionCreateNestedManyWithoutTagsInput = TransactionCreateNestedManyWithoutTagsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionCreateNestedManyWithoutTagsInput", {})
], TransactionCreateNestedManyWithoutTagsInput);
