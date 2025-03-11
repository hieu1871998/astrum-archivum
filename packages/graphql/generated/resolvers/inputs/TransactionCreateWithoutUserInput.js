"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountCreateNestedOneWithoutTransactionsInput_1 = require("../inputs/AccountCreateNestedOneWithoutTransactionsInput");
const CategoryCreateNestedOneWithoutTransactionsInput_1 = require("../inputs/CategoryCreateNestedOneWithoutTransactionsInput");
const TagCreateNestedManyWithoutTransactionsInput_1 = require("../inputs/TagCreateNestedManyWithoutTransactionsInput");
const Currency_1 = require("../../enums/Currency");
const RecurrenceType_1 = require("../../enums/RecurrenceType");
const TransactionType_1 = require("../../enums/TransactionType");
let TransactionCreateWithoutUserInput = class TransactionCreateWithoutUserInput {
};
exports.TransactionCreateWithoutUserInput = TransactionCreateWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateWithoutUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionCreateWithoutUserInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_1.Currency, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateWithoutUserInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionType_1.TransactionType, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateWithoutUserInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateWithoutUserInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateWithoutUserInput.prototype, "notes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateWithoutUserInput.prototype, "customIcon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TransactionCreateWithoutUserInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RecurrenceType_1.RecurrenceType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateWithoutUserInput.prototype, "recurrence", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TransactionCreateWithoutUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TransactionCreateWithoutUserInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountCreateNestedOneWithoutTransactionsInput_1.AccountCreateNestedOneWithoutTransactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AccountCreateNestedOneWithoutTransactionsInput_1.AccountCreateNestedOneWithoutTransactionsInput)
], TransactionCreateWithoutUserInput.prototype, "account", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateNestedOneWithoutTransactionsInput_1.CategoryCreateNestedOneWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryCreateNestedOneWithoutTransactionsInput_1.CategoryCreateNestedOneWithoutTransactionsInput)
], TransactionCreateWithoutUserInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagCreateNestedManyWithoutTransactionsInput_1.TagCreateNestedManyWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagCreateNestedManyWithoutTransactionsInput_1.TagCreateNestedManyWithoutTransactionsInput)
], TransactionCreateWithoutUserInput.prototype, "tags", void 0);
exports.TransactionCreateWithoutUserInput = TransactionCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionCreateWithoutUserInput", {})
], TransactionCreateWithoutUserInput);
