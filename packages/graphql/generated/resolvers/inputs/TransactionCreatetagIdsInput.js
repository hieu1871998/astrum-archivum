"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCreatetagIdsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TransactionCreatetagIdsInput = class TransactionCreatetagIdsInput {
};
exports.TransactionCreatetagIdsInput = TransactionCreatetagIdsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionCreatetagIdsInput.prototype, "set", void 0);
exports.TransactionCreatetagIdsInput = TransactionCreatetagIdsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionCreatetagIdsInput", {})
], TransactionCreatetagIdsInput);
