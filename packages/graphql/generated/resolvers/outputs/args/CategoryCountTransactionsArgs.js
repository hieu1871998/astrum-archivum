"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCountTransactionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionWhereInput_1 = require("../../inputs/TransactionWhereInput");
let CategoryCountTransactionsArgs = class CategoryCountTransactionsArgs {
};
exports.CategoryCountTransactionsArgs = CategoryCountTransactionsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionWhereInput_1.TransactionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionWhereInput_1.TransactionWhereInput)
], CategoryCountTransactionsArgs.prototype, "where", void 0);
exports.CategoryCountTransactionsArgs = CategoryCountTransactionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CategoryCountTransactionsArgs);
