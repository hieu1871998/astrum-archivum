"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCreateWithoutCategoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountCreateNestedOneWithoutTransactionsInput_1 = require("../inputs/AccountCreateNestedOneWithoutTransactionsInput");
const TagCreateNestedManyWithoutTransactionsInput_1 = require("../inputs/TagCreateNestedManyWithoutTransactionsInput");
const UserCreateNestedOneWithoutTransactionsInput_1 = require("../inputs/UserCreateNestedOneWithoutTransactionsInput");
const Currency_1 = require("../../enums/Currency");
const RecurrenceType_1 = require("../../enums/RecurrenceType");
const TransactionType_1 = require("../../enums/TransactionType");
let TransactionCreateWithoutCategoryInput = class TransactionCreateWithoutCategoryInput {
};
exports.TransactionCreateWithoutCategoryInput = TransactionCreateWithoutCategoryInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateWithoutCategoryInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionCreateWithoutCategoryInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_1.Currency, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateWithoutCategoryInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionType_1.TransactionType, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateWithoutCategoryInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateWithoutCategoryInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateWithoutCategoryInput.prototype, "notes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateWithoutCategoryInput.prototype, "customIcon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TransactionCreateWithoutCategoryInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RecurrenceType_1.RecurrenceType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateWithoutCategoryInput.prototype, "recurrence", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TransactionCreateWithoutCategoryInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TransactionCreateWithoutCategoryInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountCreateNestedOneWithoutTransactionsInput_1.AccountCreateNestedOneWithoutTransactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AccountCreateNestedOneWithoutTransactionsInput_1.AccountCreateNestedOneWithoutTransactionsInput)
], TransactionCreateWithoutCategoryInput.prototype, "account", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutTransactionsInput_1.UserCreateNestedOneWithoutTransactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutTransactionsInput_1.UserCreateNestedOneWithoutTransactionsInput)
], TransactionCreateWithoutCategoryInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagCreateNestedManyWithoutTransactionsInput_1.TagCreateNestedManyWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagCreateNestedManyWithoutTransactionsInput_1.TagCreateNestedManyWithoutTransactionsInput)
], TransactionCreateWithoutCategoryInput.prototype, "tags", void 0);
exports.TransactionCreateWithoutCategoryInput = TransactionCreateWithoutCategoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionCreateWithoutCategoryInput", {})
], TransactionCreateWithoutCategoryInput);
