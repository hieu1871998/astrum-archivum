"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TagCountAggregate = class TagCountAggregate {
};
exports.TagCountAggregate = TagCountAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TagCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TagCountAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TagCountAggregate.prototype, "transactionIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TagCountAggregate.prototype, "_all", void 0);
exports.TagCountAggregate = TagCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TagCountAggregate", {})
], TagCountAggregate);
