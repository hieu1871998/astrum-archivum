"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountUpdateOneRequiredWithoutTransactionsNestedInput_1 = require("../inputs/AccountUpdateOneRequiredWithoutTransactionsNestedInput");
const CategoryUpdateOneWithoutTransactionsNestedInput_1 = require("../inputs/CategoryUpdateOneWithoutTransactionsNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumCurrencyFieldUpdateOperationsInput_1 = require("../inputs/EnumCurrencyFieldUpdateOperationsInput");
const EnumRecurrenceTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumRecurrenceTypeFieldUpdateOperationsInput");
const EnumTransactionTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumTransactionTypeFieldUpdateOperationsInput");
const FloatFieldUpdateOperationsInput_1 = require("../inputs/FloatFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const TagUpdateManyWithoutTransactionsNestedInput_1 = require("../inputs/TagUpdateManyWithoutTransactionsNestedInput");
let TransactionUpdateWithoutUserInput = class TransactionUpdateWithoutUserInput {
};
exports.TransactionUpdateWithoutUserInput = TransactionUpdateWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], TransactionUpdateWithoutUserInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumCurrencyFieldUpdateOperationsInput_1.EnumCurrencyFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumCurrencyFieldUpdateOperationsInput_1.EnumCurrencyFieldUpdateOperationsInput)
], TransactionUpdateWithoutUserInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumTransactionTypeFieldUpdateOperationsInput_1.EnumTransactionTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumTransactionTypeFieldUpdateOperationsInput_1.EnumTransactionTypeFieldUpdateOperationsInput)
], TransactionUpdateWithoutUserInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TransactionUpdateWithoutUserInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TransactionUpdateWithoutUserInput.prototype, "notes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TransactionUpdateWithoutUserInput.prototype, "customIcon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TransactionUpdateWithoutUserInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumRecurrenceTypeFieldUpdateOperationsInput_1.EnumRecurrenceTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumRecurrenceTypeFieldUpdateOperationsInput_1.EnumRecurrenceTypeFieldUpdateOperationsInput)
], TransactionUpdateWithoutUserInput.prototype, "recurrence", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TransactionUpdateWithoutUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TransactionUpdateWithoutUserInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountUpdateOneRequiredWithoutTransactionsNestedInput_1.AccountUpdateOneRequiredWithoutTransactionsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountUpdateOneRequiredWithoutTransactionsNestedInput_1.AccountUpdateOneRequiredWithoutTransactionsNestedInput)
], TransactionUpdateWithoutUserInput.prototype, "account", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateOneWithoutTransactionsNestedInput_1.CategoryUpdateOneWithoutTransactionsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryUpdateOneWithoutTransactionsNestedInput_1.CategoryUpdateOneWithoutTransactionsNestedInput)
], TransactionUpdateWithoutUserInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagUpdateManyWithoutTransactionsNestedInput_1.TagUpdateManyWithoutTransactionsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagUpdateManyWithoutTransactionsNestedInput_1.TagUpdateManyWithoutTransactionsNestedInput)
], TransactionUpdateWithoutUserInput.prototype, "tags", void 0);
exports.TransactionUpdateWithoutUserInput = TransactionUpdateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionUpdateWithoutUserInput", {})
], TransactionUpdateWithoutUserInput);
