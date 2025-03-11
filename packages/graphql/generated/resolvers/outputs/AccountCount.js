"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountCountTransactionsArgs_1 = require("./args/AccountCountTransactionsArgs");
let AccountCount = class AccountCount {
    getTransactions(root, args) {
        return root.transactions;
    }
};
exports.AccountCount = AccountCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "transactions",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [AccountCount, AccountCountTransactionsArgs_1.AccountCountTransactionsArgs]),
    tslib_1.__metadata("design:returntype", Number)
], AccountCount.prototype, "getTransactions", null);
exports.AccountCount = AccountCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AccountCount", {})
], AccountCount);
