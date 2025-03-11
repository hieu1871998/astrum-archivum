"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateNestedManyWithoutAccountInput_1 = require("../inputs/TransactionCreateNestedManyWithoutAccountInput");
const AccountType_1 = require("../../enums/AccountType");
const Currency_1 = require("../../enums/Currency");
let AccountCreateWithoutUserInput = class AccountCreateWithoutUserInput {
};
exports.AccountCreateWithoutUserInput = AccountCreateWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountCreateWithoutUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AccountCreateWithoutUserInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountType_1.AccountType, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AccountCreateWithoutUserInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_1.Currency, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AccountCreateWithoutUserInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AccountCreateWithoutUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AccountCreateWithoutUserInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateNestedManyWithoutAccountInput_1.TransactionCreateNestedManyWithoutAccountInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionCreateNestedManyWithoutAccountInput_1.TransactionCreateNestedManyWithoutAccountInput)
], AccountCreateWithoutUserInput.prototype, "transactions", void 0);
exports.AccountCreateWithoutUserInput = AccountCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AccountCreateWithoutUserInput", {})
], AccountCreateWithoutUserInput);
