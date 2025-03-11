"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagWhereInput_1 = require("../inputs/TagWhereInput");
let TagListRelationFilter = class TagListRelationFilter {
};
exports.TagListRelationFilter = TagListRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagWhereInput_1.TagWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagWhereInput_1.TagWhereInput)
], TagListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagWhereInput_1.TagWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagWhereInput_1.TagWhereInput)
], TagListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagWhereInput_1.TagWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagWhereInput_1.TagWhereInput)
], TagListRelationFilter.prototype, "none", void 0);
exports.TagListRelationFilter = TagListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("TagListRelationFilter", {})
], TagListRelationFilter);
