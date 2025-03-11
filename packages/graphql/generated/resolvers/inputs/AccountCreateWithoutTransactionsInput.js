"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountCreateWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutAccountsInput_1 = require("../inputs/UserCreateNestedOneWithoutAccountsInput");
const AccountType_1 = require("../../enums/AccountType");
const Currency_1 = require("../../enums/Currency");
let AccountCreateWithoutTransactionsInput = class AccountCreateWithoutTransactionsInput {
};
exports.AccountCreateWithoutTransactionsInput = AccountCreateWithoutTransactionsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountCreateWithoutTransactionsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AccountCreateWithoutTransactionsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountType_1.AccountType, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AccountCreateWithoutTransactionsInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_1.Currency, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AccountCreateWithoutTransactionsInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AccountCreateWithoutTransactionsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AccountCreateWithoutTransactionsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutAccountsInput_1.UserCreateNestedOneWithoutAccountsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutAccountsInput_1.UserCreateNestedOneWithoutAccountsInput)
], AccountCreateWithoutTransactionsInput.prototype, "user", void 0);
exports.AccountCreateWithoutTransactionsInput = AccountCreateWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AccountCreateWithoutTransactionsInput", {})
], AccountCreateWithoutTransactionsInput);
