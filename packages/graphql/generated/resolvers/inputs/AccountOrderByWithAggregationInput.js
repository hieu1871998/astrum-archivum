"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountCountOrderByAggregateInput_1 = require("../inputs/AccountCountOrderByAggregateInput");
const AccountMaxOrderByAggregateInput_1 = require("../inputs/AccountMaxOrderByAggregateInput");
const AccountMinOrderByAggregateInput_1 = require("../inputs/AccountMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AccountOrderByWithAggregationInput = class AccountOrderByWithAggregationInput {
};
exports.AccountOrderByWithAggregationInput = AccountOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountOrderByWithAggregationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountOrderByWithAggregationInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountCountOrderByAggregateInput_1.AccountCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountCountOrderByAggregateInput_1.AccountCountOrderByAggregateInput)
], AccountOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountMaxOrderByAggregateInput_1.AccountMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountMaxOrderByAggregateInput_1.AccountMaxOrderByAggregateInput)
], AccountOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountMinOrderByAggregateInput_1.AccountMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountMinOrderByAggregateInput_1.AccountMinOrderByAggregateInput)
], AccountOrderByWithAggregationInput.prototype, "_min", void 0);
exports.AccountOrderByWithAggregationInput = AccountOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AccountOrderByWithAggregationInput", {})
], AccountOrderByWithAggregationInput);
