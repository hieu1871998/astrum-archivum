"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TransactionScalarFieldEnum;
(function (TransactionScalarFieldEnum) {
    TransactionScalarFieldEnum["id"] = "id";
    TransactionScalarFieldEnum["accountId"] = "accountId";
    TransactionScalarFieldEnum["userId"] = "userId";
    TransactionScalarFieldEnum["amount"] = "amount";
    TransactionScalarFieldEnum["currency"] = "currency";
    TransactionScalarFieldEnum["type"] = "type";
    TransactionScalarFieldEnum["description"] = "description";
    TransactionScalarFieldEnum["notes"] = "notes";
    TransactionScalarFieldEnum["customIcon"] = "customIcon";
    TransactionScalarFieldEnum["date"] = "date";
    TransactionScalarFieldEnum["recurrence"] = "recurrence";
    TransactionScalarFieldEnum["categoryId"] = "categoryId";
    TransactionScalarFieldEnum["createdAt"] = "createdAt";
    TransactionScalarFieldEnum["updatedAt"] = "updatedAt";
    TransactionScalarFieldEnum["tagIds"] = "tagIds";
})(TransactionScalarFieldEnum || (exports.TransactionScalarFieldEnum = TransactionScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(TransactionScalarFieldEnum, {
    name: "TransactionScalarFieldEnum",
    description: undefined,
});
