"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionUpdateWithoutTagsInput = void 0;
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
const UserUpdateOneRequiredWithoutTransactionsNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutTransactionsNestedInput");
let TransactionUpdateWithoutTagsInput = class TransactionUpdateWithoutTagsInput {
};
exports.TransactionUpdateWithoutTagsInput = TransactionUpdateWithoutTagsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], TransactionUpdateWithoutTagsInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumCurrencyFieldUpdateOperationsInput_1.EnumCurrencyFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumCurrencyFieldUpdateOperationsInput_1.EnumCurrencyFieldUpdateOperationsInput)
], TransactionUpdateWithoutTagsInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumTransactionTypeFieldUpdateOperationsInput_1.EnumTransactionTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumTransactionTypeFieldUpdateOperationsInput_1.EnumTransactionTypeFieldUpdateOperationsInput)
], TransactionUpdateWithoutTagsInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TransactionUpdateWithoutTagsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TransactionUpdateWithoutTagsInput.prototype, "notes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TransactionUpdateWithoutTagsInput.prototype, "customIcon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TransactionUpdateWithoutTagsInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumRecurrenceTypeFieldUpdateOperationsInput_1.EnumRecurrenceTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumRecurrenceTypeFieldUpdateOperationsInput_1.EnumRecurrenceTypeFieldUpdateOperationsInput)
], TransactionUpdateWithoutTagsInput.prototype, "recurrence", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TransactionUpdateWithoutTagsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TransactionUpdateWithoutTagsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountUpdateOneRequiredWithoutTransactionsNestedInput_1.AccountUpdateOneRequiredWithoutTransactionsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountUpdateOneRequiredWithoutTransactionsNestedInput_1.AccountUpdateOneRequiredWithoutTransactionsNestedInput)
], TransactionUpdateWithoutTagsInput.prototype, "account", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutTransactionsNestedInput_1.UserUpdateOneRequiredWithoutTransactionsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutTransactionsNestedInput_1.UserUpdateOneRequiredWithoutTransactionsNestedInput)
], TransactionUpdateWithoutTagsInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateOneWithoutTransactionsNestedInput_1.CategoryUpdateOneWithoutTransactionsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryUpdateOneWithoutTransactionsNestedInput_1.CategoryUpdateOneWithoutTransactionsNestedInput)
], TransactionUpdateWithoutTagsInput.prototype, "category", void 0);
exports.TransactionUpdateWithoutTagsInput = TransactionUpdateWithoutTagsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionUpdateWithoutTagsInput", {})
], TransactionUpdateWithoutTagsInput);
