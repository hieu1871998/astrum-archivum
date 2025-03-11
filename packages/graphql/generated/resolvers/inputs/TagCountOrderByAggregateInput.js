"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TagCountOrderByAggregateInput = class TagCountOrderByAggregateInput {
};
exports.TagCountOrderByAggregateInput = TagCountOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagCountOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagCountOrderByAggregateInput.prototype, "transactionIds", void 0);
exports.TagCountOrderByAggregateInput = TagCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagCountOrderByAggregateInput", {})
], TagCountOrderByAggregateInput);
