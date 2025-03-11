"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCreateManyAccountInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreatetagIdsInput_1 = require("../inputs/TransactionCreatetagIdsInput");
const Currency_1 = require("../../enums/Currency");
const RecurrenceType_1 = require("../../enums/RecurrenceType");
const TransactionType_1 = require("../../enums/TransactionType");
let TransactionCreateManyAccountInput = class TransactionCreateManyAccountInput {
};
exports.TransactionCreateManyAccountInput = TransactionCreateManyAccountInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateManyAccountInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateManyAccountInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionCreateManyAccountInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_1.Currency, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateManyAccountInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionType_1.TransactionType, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateManyAccountInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateManyAccountInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateManyAccountInput.prototype, "notes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateManyAccountInput.prototype, "customIcon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TransactionCreateManyAccountInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RecurrenceType_1.RecurrenceType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateManyAccountInput.prototype, "recurrence", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateManyAccountInput.prototype, "categoryId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TransactionCreateManyAccountInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TransactionCreateManyAccountInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreatetagIdsInput_1.TransactionCreatetagIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionCreatetagIdsInput_1.TransactionCreatetagIdsInput)
], TransactionCreateManyAccountInput.prototype, "tagIds", void 0);
exports.TransactionCreateManyAccountInput = TransactionCreateManyAccountInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionCreateManyAccountInput", {})
], TransactionCreateManyAccountInput);
