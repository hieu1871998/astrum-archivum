"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTag = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagCountAggregate_1 = require("../outputs/TagCountAggregate");
const TagMaxAggregate_1 = require("../outputs/TagMaxAggregate");
const TagMinAggregate_1 = require("../outputs/TagMinAggregate");
let AggregateTag = class AggregateTag {
};
exports.AggregateTag = AggregateTag;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagCountAggregate_1.TagCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagCountAggregate_1.TagCountAggregate)
], AggregateTag.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagMinAggregate_1.TagMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagMinAggregate_1.TagMinAggregate)
], AggregateTag.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagMaxAggregate_1.TagMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagMaxAggregate_1.TagMaxAggregate)
], AggregateTag.prototype, "_max", void 0);
exports.AggregateTag = AggregateTag = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateTag", {})
], AggregateTag);
