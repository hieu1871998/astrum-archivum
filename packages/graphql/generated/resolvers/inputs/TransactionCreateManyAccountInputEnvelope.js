"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCreateManyAccountInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateManyAccountInput_1 = require("../inputs/TransactionCreateManyAccountInput");
let TransactionCreateManyAccountInputEnvelope = class TransactionCreateManyAccountInputEnvelope {
};
exports.TransactionCreateManyAccountInputEnvelope = TransactionCreateManyAccountInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionCreateManyAccountInput_1.TransactionCreateManyAccountInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionCreateManyAccountInputEnvelope.prototype, "data", void 0);
exports.TransactionCreateManyAccountInputEnvelope = TransactionCreateManyAccountInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionCreateManyAccountInputEnvelope", {})
], TransactionCreateManyAccountInputEnvelope);
