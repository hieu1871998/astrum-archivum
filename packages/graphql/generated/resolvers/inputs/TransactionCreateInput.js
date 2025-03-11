"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountCreateNestedOneWithoutTransactionsInput_1 = require("../inputs/AccountCreateNestedOneWithoutTransactionsInput");
const CategoryCreateNestedOneWithoutTransactionsInput_1 = require("../inputs/CategoryCreateNestedOneWithoutTransactionsInput");
const TagCreateNestedManyWithoutTransactionsInput_1 = require("../inputs/TagCreateNestedManyWithoutTransactionsInput");
const UserCreateNestedOneWithoutTransactionsInput_1 = require("../inputs/UserCreateNestedOneWithoutTransactionsInput");
const Currency_1 = require("../../enums/Currency");
const RecurrenceType_1 = require("../../enums/RecurrenceType");
const TransactionType_1 = require("../../enums/TransactionType");
let TransactionCreateInput = class TransactionCreateInput {
};
exports.TransactionCreateInput = TransactionCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionCreateInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_1.Currency, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionType_1.TransactionType, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateInput.prototype, "notes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateInput.prototype, "customIcon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TransactionCreateInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RecurrenceType_1.RecurrenceType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateInput.prototype, "recurrence", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TransactionCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TransactionCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountCreateNestedOneWithoutTransactionsInput_1.AccountCreateNestedOneWithoutTransactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AccountCreateNestedOneWithoutTransactionsInput_1.AccountCreateNestedOneWithoutTransactionsInput)
], TransactionCreateInput.prototype, "account", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutTransactionsInput_1.UserCreateNestedOneWithoutTransactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutTransactionsInput_1.UserCreateNestedOneWithoutTransactionsInput)
], TransactionCreateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateNestedOneWithoutTransactionsInput_1.CategoryCreateNestedOneWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryCreateNestedOneWithoutTransactionsInput_1.CategoryCreateNestedOneWithoutTransactionsInput)
], TransactionCreateInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagCreateNestedManyWithoutTransactionsInput_1.TagCreateNestedManyWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagCreateNestedManyWithoutTransactionsInput_1.TagCreateNestedManyWithoutTransactionsInput)
], TransactionCreateInput.prototype, "tags", void 0);
exports.TransactionCreateInput = TransactionCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionCreateInput", {})
], TransactionCreateInput);
