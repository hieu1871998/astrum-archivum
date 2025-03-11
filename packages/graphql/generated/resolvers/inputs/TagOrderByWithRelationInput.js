"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionOrderByRelationAggregateInput_1 = require("../inputs/TransactionOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TagOrderByWithRelationInput = class TagOrderByWithRelationInput {
};
exports.TagOrderByWithRelationInput = TagOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagOrderByWithRelationInput.prototype, "transactionIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionOrderByRelationAggregateInput_1.TransactionOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionOrderByRelationAggregateInput_1.TransactionOrderByRelationAggregateInput)
], TagOrderByWithRelationInput.prototype, "transactions", void 0);
exports.TagOrderByWithRelationInput = TagOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagOrderByWithRelationInput", {})
], TagOrderByWithRelationInput);
