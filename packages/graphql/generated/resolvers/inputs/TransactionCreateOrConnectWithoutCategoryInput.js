"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCreateOrConnectWithoutCategoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateWithoutCategoryInput_1 = require("../inputs/TransactionCreateWithoutCategoryInput");
const TransactionWhereUniqueInput_1 = require("../inputs/TransactionWhereUniqueInput");
let TransactionCreateOrConnectWithoutCategoryInput = class TransactionCreateOrConnectWithoutCategoryInput {
};
exports.TransactionCreateOrConnectWithoutCategoryInput = TransactionCreateOrConnectWithoutCategoryInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionWhereUniqueInput_1.TransactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionWhereUniqueInput_1.TransactionWhereUniqueInput)
], TransactionCreateOrConnectWithoutCategoryInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateWithoutCategoryInput_1.TransactionCreateWithoutCategoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionCreateWithoutCategoryInput_1.TransactionCreateWithoutCategoryInput)
], TransactionCreateOrConnectWithoutCategoryInput.prototype, "create", void 0);
exports.TransactionCreateOrConnectWithoutCategoryInput = TransactionCreateOrConnectWithoutCategoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionCreateOrConnectWithoutCategoryInput", {})
], TransactionCreateOrConnectWithoutCategoryInput);
