"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryWhereInput_1 = require("../inputs/CategoryWhereInput");
let CategoryListRelationFilter = class CategoryListRelationFilter {
};
exports.CategoryListRelationFilter = CategoryListRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereInput_1.CategoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryWhereInput_1.CategoryWhereInput)
], CategoryListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereInput_1.CategoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryWhereInput_1.CategoryWhereInput)
], CategoryListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereInput_1.CategoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryWhereInput_1.CategoryWhereInput)
], CategoryListRelationFilter.prototype, "none", void 0);
exports.CategoryListRelationFilter = CategoryListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryListRelationFilter", {})
], CategoryListRelationFilter);
