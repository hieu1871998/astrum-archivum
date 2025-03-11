"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCreateManyParentCategoryInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateManyParentCategoryInput_1 = require("../inputs/CategoryCreateManyParentCategoryInput");
let CategoryCreateManyParentCategoryInputEnvelope = class CategoryCreateManyParentCategoryInputEnvelope {
};
exports.CategoryCreateManyParentCategoryInputEnvelope = CategoryCreateManyParentCategoryInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryCreateManyParentCategoryInput_1.CategoryCreateManyParentCategoryInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryCreateManyParentCategoryInputEnvelope.prototype, "data", void 0);
exports.CategoryCreateManyParentCategoryInputEnvelope = CategoryCreateManyParentCategoryInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryCreateManyParentCategoryInputEnvelope", {})
], CategoryCreateManyParentCategoryInputEnvelope);
