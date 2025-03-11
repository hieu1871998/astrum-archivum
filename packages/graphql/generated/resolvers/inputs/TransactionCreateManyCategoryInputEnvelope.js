"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCreateManyCategoryInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateManyCategoryInput_1 = require("../inputs/TransactionCreateManyCategoryInput");
let TransactionCreateManyCategoryInputEnvelope = class TransactionCreateManyCategoryInputEnvelope {
};
exports.TransactionCreateManyCategoryInputEnvelope = TransactionCreateManyCategoryInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionCreateManyCategoryInput_1.TransactionCreateManyCategoryInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionCreateManyCategoryInputEnvelope.prototype, "data", void 0);
exports.TransactionCreateManyCategoryInputEnvelope = TransactionCreateManyCategoryInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionCreateManyCategoryInputEnvelope", {})
], TransactionCreateManyCategoryInputEnvelope);
