"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountCreateOrConnectWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountCreateWithoutTransactionsInput_1 = require("../inputs/AccountCreateWithoutTransactionsInput");
const AccountWhereUniqueInput_1 = require("../inputs/AccountWhereUniqueInput");
let AccountCreateOrConnectWithoutTransactionsInput = class AccountCreateOrConnectWithoutTransactionsInput {
};
exports.AccountCreateOrConnectWithoutTransactionsInput = AccountCreateOrConnectWithoutTransactionsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountWhereUniqueInput_1.AccountWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AccountWhereUniqueInput_1.AccountWhereUniqueInput)
], AccountCreateOrConnectWithoutTransactionsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountCreateWithoutTransactionsInput_1.AccountCreateWithoutTransactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AccountCreateWithoutTransactionsInput_1.AccountCreateWithoutTransactionsInput)
], AccountCreateOrConnectWithoutTransactionsInput.prototype, "create", void 0);
exports.AccountCreateOrConnectWithoutTransactionsInput = AccountCreateOrConnectWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AccountCreateOrConnectWithoutTransactionsInput", {})
], AccountCreateOrConnectWithoutTransactionsInput);
