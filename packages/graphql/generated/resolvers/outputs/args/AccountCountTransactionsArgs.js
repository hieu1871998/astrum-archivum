"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountCountTransactionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionWhereInput_1 = require("../../inputs/TransactionWhereInput");
let AccountCountTransactionsArgs = class AccountCountTransactionsArgs {
};
exports.AccountCountTransactionsArgs = AccountCountTransactionsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionWhereInput_1.TransactionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionWhereInput_1.TransactionWhereInput)
], AccountCountTransactionsArgs.prototype, "where", void 0);
exports.AccountCountTransactionsArgs = AccountCountTransactionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AccountCountTransactionsArgs);
