"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCreateNestedManyWithoutAccountInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateManyAccountInputEnvelope_1 = require("../inputs/TransactionCreateManyAccountInputEnvelope");
const TransactionCreateOrConnectWithoutAccountInput_1 = require("../inputs/TransactionCreateOrConnectWithoutAccountInput");
const TransactionCreateWithoutAccountInput_1 = require("../inputs/TransactionCreateWithoutAccountInput");
const TransactionWhereUniqueInput_1 = require("../inputs/TransactionWhereUniqueInput");
let TransactionCreateNestedManyWithoutAccountInput = class TransactionCreateNestedManyWithoutAccountInput {
};
exports.TransactionCreateNestedManyWithoutAccountInput = TransactionCreateNestedManyWithoutAccountInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionCreateWithoutAccountInput_1.TransactionCreateWithoutAccountInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionCreateNestedManyWithoutAccountInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionCreateOrConnectWithoutAccountInput_1.TransactionCreateOrConnectWithoutAccountInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionCreateNestedManyWithoutAccountInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateManyAccountInputEnvelope_1.TransactionCreateManyAccountInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionCreateManyAccountInputEnvelope_1.TransactionCreateManyAccountInputEnvelope)
], TransactionCreateNestedManyWithoutAccountInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereUniqueInput_1.TransactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionCreateNestedManyWithoutAccountInput.prototype, "connect", void 0);
exports.TransactionCreateNestedManyWithoutAccountInput = TransactionCreateNestedManyWithoutAccountInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionCreateNestedManyWithoutAccountInput", {})
], TransactionCreateNestedManyWithoutAccountInput);
