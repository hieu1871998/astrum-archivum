"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionType = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TransactionType;
(function (TransactionType) {
    TransactionType["INCOME"] = "INCOME";
    TransactionType["EXPENSE"] = "EXPENSE";
    TransactionType["TRANSFER"] = "TRANSFER";
})(TransactionType || (exports.TransactionType = TransactionType = {}));
TypeGraphQL.registerEnumType(TransactionType, {
    name: "TransactionType",
    description: undefined,
});
