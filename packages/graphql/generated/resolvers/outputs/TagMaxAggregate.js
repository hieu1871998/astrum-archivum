"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TagMaxAggregate = class TagMaxAggregate {
};
exports.TagMaxAggregate = TagMaxAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagMaxAggregate.prototype, "name", void 0);
exports.TagMaxAggregate = TagMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TagMaxAggregate", {})
], TagMaxAggregate);
