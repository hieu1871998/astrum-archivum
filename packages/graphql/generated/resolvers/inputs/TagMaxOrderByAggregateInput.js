"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TagMaxOrderByAggregateInput = class TagMaxOrderByAggregateInput {
};
exports.TagMaxOrderByAggregateInput = TagMaxOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagMaxOrderByAggregateInput.prototype, "name", void 0);
exports.TagMaxOrderByAggregateInput = TagMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagMaxOrderByAggregateInput", {})
], TagMaxOrderByAggregateInput);
