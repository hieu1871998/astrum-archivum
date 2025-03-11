"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCreateOrConnectWithoutAccountInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateWithoutAccountInput_1 = require("../inputs/TransactionCreateWithoutAccountInput");
const TransactionWhereUniqueInput_1 = require("../inputs/TransactionWhereUniqueInput");
let TransactionCreateOrConnectWithoutAccountInput = class TransactionCreateOrConnectWithoutAccountInput {
};
exports.TransactionCreateOrConnectWithoutAccountInput = TransactionCreateOrConnectWithoutAccountInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionWhereUniqueInput_1.TransactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionWhereUniqueInput_1.TransactionWhereUniqueInput)
], TransactionCreateOrConnectWithoutAccountInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateWithoutAccountInput_1.TransactionCreateWithoutAccountInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionCreateWithoutAccountInput_1.TransactionCreateWithoutAccountInput)
], TransactionCreateOrConnectWithoutAccountInput.prototype, "create", void 0);
exports.TransactionCreateOrConnectWithoutAccountInput = TransactionCreateOrConnectWithoutAccountInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionCreateOrConnectWithoutAccountInput", {})
], TransactionCreateOrConnectWithoutAccountInput);
