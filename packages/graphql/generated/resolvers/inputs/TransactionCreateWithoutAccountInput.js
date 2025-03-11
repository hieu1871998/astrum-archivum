"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCreateWithoutAccountInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateNestedOneWithoutTransactionsInput_1 = require("../inputs/CategoryCreateNestedOneWithoutTransactionsInput");
const TagCreateNestedManyWithoutTransactionsInput_1 = require("../inputs/TagCreateNestedManyWithoutTransactionsInput");
const UserCreateNestedOneWithoutTransactionsInput_1 = require("../inputs/UserCreateNestedOneWithoutTransactionsInput");
const Currency_1 = require("../../enums/Currency");
const RecurrenceType_1 = require("../../enums/RecurrenceType");
const TransactionType_1 = require("../../enums/TransactionType");
let TransactionCreateWithoutAccountInput = class TransactionCreateWithoutAccountInput {
};
exports.TransactionCreateWithoutAccountInput = TransactionCreateWithoutAccountInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateWithoutAccountInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionCreateWithoutAccountInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_1.Currency, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateWithoutAccountInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionType_1.TransactionType, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateWithoutAccountInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateWithoutAccountInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateWithoutAccountInput.prototype, "notes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateWithoutAccountInput.prototype, "customIcon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TransactionCreateWithoutAccountInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RecurrenceType_1.RecurrenceType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateWithoutAccountInput.prototype, "recurrence", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TransactionCreateWithoutAccountInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TransactionCreateWithoutAccountInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutTransactionsInput_1.UserCreateNestedOneWithoutTransactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutTransactionsInput_1.UserCreateNestedOneWithoutTransactionsInput)
], TransactionCreateWithoutAccountInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateNestedOneWithoutTransactionsInput_1.CategoryCreateNestedOneWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryCreateNestedOneWithoutTransactionsInput_1.CategoryCreateNestedOneWithoutTransactionsInput)
], TransactionCreateWithoutAccountInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagCreateNestedManyWithoutTransactionsInput_1.TagCreateNestedManyWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagCreateNestedManyWithoutTransactionsInput_1.TagCreateNestedManyWithoutTransactionsInput)
], TransactionCreateWithoutAccountInput.prototype, "tags", void 0);
exports.TransactionCreateWithoutAccountInput = TransactionCreateWithoutAccountInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionCreateWithoutAccountInput", {})
], TransactionCreateWithoutAccountInput);
