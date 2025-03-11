"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TagMinAggregate = class TagMinAggregate {
};
exports.TagMinAggregate = TagMinAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagMinAggregate.prototype, "name", void 0);
exports.TagMinAggregate = TagMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TagMinAggregate", {})
], TagMinAggregate);
