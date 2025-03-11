"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountUpdateToOneWithWhereWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountUpdateWithoutTransactionsInput_1 = require("../inputs/AccountUpdateWithoutTransactionsInput");
const AccountWhereInput_1 = require("../inputs/AccountWhereInput");
let AccountUpdateToOneWithWhereWithoutTransactionsInput = class AccountUpdateToOneWithWhereWithoutTransactionsInput {
};
exports.AccountUpdateToOneWithWhereWithoutTransactionsInput = AccountUpdateToOneWithWhereWithoutTransactionsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountWhereInput_1.AccountWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountWhereInput_1.AccountWhereInput)
], AccountUpdateToOneWithWhereWithoutTransactionsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountUpdateWithoutTransactionsInput_1.AccountUpdateWithoutTransactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AccountUpdateWithoutTransactionsInput_1.AccountUpdateWithoutTransactionsInput)
], AccountUpdateToOneWithWhereWithoutTransactionsInput.prototype, "data", void 0);
exports.AccountUpdateToOneWithWhereWithoutTransactionsInput = AccountUpdateToOneWithWhereWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AccountUpdateToOneWithWhereWithoutTransactionsInput", {})
], AccountUpdateToOneWithWhereWithoutTransactionsInput);
