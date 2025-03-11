"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountUpsertWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountCreateWithoutTransactionsInput_1 = require("../inputs/AccountCreateWithoutTransactionsInput");
const AccountUpdateWithoutTransactionsInput_1 = require("../inputs/AccountUpdateWithoutTransactionsInput");
const AccountWhereInput_1 = require("../inputs/AccountWhereInput");
let AccountUpsertWithoutTransactionsInput = class AccountUpsertWithoutTransactionsInput {
};
exports.AccountUpsertWithoutTransactionsInput = AccountUpsertWithoutTransactionsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountUpdateWithoutTransactionsInput_1.AccountUpdateWithoutTransactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AccountUpdateWithoutTransactionsInput_1.AccountUpdateWithoutTransactionsInput)
], AccountUpsertWithoutTransactionsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountCreateWithoutTransactionsInput_1.AccountCreateWithoutTransactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AccountCreateWithoutTransactionsInput_1.AccountCreateWithoutTransactionsInput)
], AccountUpsertWithoutTransactionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountWhereInput_1.AccountWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountWhereInput_1.AccountWhereInput)
], AccountUpsertWithoutTransactionsInput.prototype, "where", void 0);
exports.AccountUpsertWithoutTransactionsInput = AccountUpsertWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AccountUpsertWithoutTransactionsInput", {})
], AccountUpsertWithoutTransactionsInput);
