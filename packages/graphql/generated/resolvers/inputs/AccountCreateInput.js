"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateNestedManyWithoutAccountInput_1 = require("../inputs/TransactionCreateNestedManyWithoutAccountInput");
const UserCreateNestedOneWithoutAccountsInput_1 = require("../inputs/UserCreateNestedOneWithoutAccountsInput");
const AccountType_1 = require("../../enums/AccountType");
const Currency_1 = require("../../enums/Currency");
let AccountCreateInput = class AccountCreateInput {
};
exports.AccountCreateInput = AccountCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AccountCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountType_1.AccountType, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AccountCreateInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_1.Currency, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AccountCreateInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AccountCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AccountCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutAccountsInput_1.UserCreateNestedOneWithoutAccountsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutAccountsInput_1.UserCreateNestedOneWithoutAccountsInput)
], AccountCreateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateNestedManyWithoutAccountInput_1.TransactionCreateNestedManyWithoutAccountInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionCreateNestedManyWithoutAccountInput_1.TransactionCreateNestedManyWithoutAccountInput)
], AccountCreateInput.prototype, "transactions", void 0);
exports.AccountCreateInput = AccountCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AccountCreateInput", {})
], AccountCreateInput);
