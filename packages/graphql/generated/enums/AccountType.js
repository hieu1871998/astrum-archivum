"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountType = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var AccountType;
(function (AccountType) {
    AccountType["BANK"] = "BANK";
    AccountType["CREDIT"] = "CREDIT";
    AccountType["WALLET"] = "WALLET";
})(AccountType || (exports.AccountType = AccountType = {}));
TypeGraphQL.registerEnumType(AccountType, {
    name: "AccountType",
    description: undefined,
});
