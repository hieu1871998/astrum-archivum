"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumTransactionTypeFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionType_1 = require("../../enums/TransactionType");
let EnumTransactionTypeFieldUpdateOperationsInput = class EnumTransactionTypeFieldUpdateOperationsInput {
};
exports.EnumTransactionTypeFieldUpdateOperationsInput = EnumTransactionTypeFieldUpdateOperationsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionType_1.TransactionType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumTransactionTypeFieldUpdateOperationsInput.prototype, "set", void 0);
exports.EnumTransactionTypeFieldUpdateOperationsInput = EnumTransactionTypeFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumTransactionTypeFieldUpdateOperationsInput", {})
], EnumTransactionTypeFieldUpdateOperationsInput);
