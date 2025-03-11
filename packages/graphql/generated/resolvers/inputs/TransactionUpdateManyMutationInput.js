"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumCurrencyFieldUpdateOperationsInput_1 = require("../inputs/EnumCurrencyFieldUpdateOperationsInput");
const EnumRecurrenceTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumRecurrenceTypeFieldUpdateOperationsInput");
const EnumTransactionTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumTransactionTypeFieldUpdateOperationsInput");
const FloatFieldUpdateOperationsInput_1 = require("../inputs/FloatFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
let TransactionUpdateManyMutationInput = class TransactionUpdateManyMutationInput {
};
exports.TransactionUpdateManyMutationInput = TransactionUpdateManyMutationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], TransactionUpdateManyMutationInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumCurrencyFieldUpdateOperationsInput_1.EnumCurrencyFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumCurrencyFieldUpdateOperationsInput_1.EnumCurrencyFieldUpdateOperationsInput)
], TransactionUpdateManyMutationInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumTransactionTypeFieldUpdateOperationsInput_1.EnumTransactionTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumTransactionTypeFieldUpdateOperationsInput_1.EnumTransactionTypeFieldUpdateOperationsInput)
], TransactionUpdateManyMutationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TransactionUpdateManyMutationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TransactionUpdateManyMutationInput.prototype, "notes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TransactionUpdateManyMutationInput.prototype, "customIcon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TransactionUpdateManyMutationInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumRecurrenceTypeFieldUpdateOperationsInput_1.EnumRecurrenceTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumRecurrenceTypeFieldUpdateOperationsInput_1.EnumRecurrenceTypeFieldUpdateOperationsInput)
], TransactionUpdateManyMutationInput.prototype, "recurrence", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TransactionUpdateManyMutationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TransactionUpdateManyMutationInput.prototype, "updatedAt", void 0);
exports.TransactionUpdateManyMutationInput = TransactionUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionUpdateManyMutationInput", {})
], TransactionUpdateManyMutationInput);
