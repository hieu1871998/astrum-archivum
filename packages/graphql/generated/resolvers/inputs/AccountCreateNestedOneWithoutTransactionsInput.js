"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountCreateNestedOneWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountCreateOrConnectWithoutTransactionsInput_1 = require("../inputs/AccountCreateOrConnectWithoutTransactionsInput");
const AccountCreateWithoutTransactionsInput_1 = require("../inputs/AccountCreateWithoutTransactionsInput");
const AccountWhereUniqueInput_1 = require("../inputs/AccountWhereUniqueInput");
let AccountCreateNestedOneWithoutTransactionsInput = class AccountCreateNestedOneWithoutTransactionsInput {
};
exports.AccountCreateNestedOneWithoutTransactionsInput = AccountCreateNestedOneWithoutTransactionsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountCreateWithoutTransactionsInput_1.AccountCreateWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountCreateWithoutTransactionsInput_1.AccountCreateWithoutTransactionsInput)
], AccountCreateNestedOneWithoutTransactionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountCreateOrConnectWithoutTransactionsInput_1.AccountCreateOrConnectWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountCreateOrConnectWithoutTransactionsInput_1.AccountCreateOrConnectWithoutTransactionsInput)
], AccountCreateNestedOneWithoutTransactionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountWhereUniqueInput_1.AccountWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountWhereUniqueInput_1.AccountWhereUniqueInput)
], AccountCreateNestedOneWithoutTransactionsInput.prototype, "connect", void 0);
exports.AccountCreateNestedOneWithoutTransactionsInput = AccountCreateNestedOneWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AccountCreateNestedOneWithoutTransactionsInput", {})
], AccountCreateNestedOneWithoutTransactionsInput);
