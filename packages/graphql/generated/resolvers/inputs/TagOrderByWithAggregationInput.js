"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagCountOrderByAggregateInput_1 = require("../inputs/TagCountOrderByAggregateInput");
const TagMaxOrderByAggregateInput_1 = require("../inputs/TagMaxOrderByAggregateInput");
const TagMinOrderByAggregateInput_1 = require("../inputs/TagMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TagOrderByWithAggregationInput = class TagOrderByWithAggregationInput {
};
exports.TagOrderByWithAggregationInput = TagOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagOrderByWithAggregationInput.prototype, "transactionIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagCountOrderByAggregateInput_1.TagCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagCountOrderByAggregateInput_1.TagCountOrderByAggregateInput)
], TagOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagMaxOrderByAggregateInput_1.TagMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagMaxOrderByAggregateInput_1.TagMaxOrderByAggregateInput)
], TagOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagMinOrderByAggregateInput_1.TagMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagMinOrderByAggregateInput_1.TagMinOrderByAggregateInput)
], TagOrderByWithAggregationInput.prototype, "_min", void 0);
exports.TagOrderByWithAggregationInput = TagOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagOrderByWithAggregationInput", {})
], TagOrderByWithAggregationInput);
