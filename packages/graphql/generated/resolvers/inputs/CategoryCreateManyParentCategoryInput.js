"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCreateManyParentCategoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CategoryCreateManyParentCategoryInput = class CategoryCreateManyParentCategoryInput {
};
exports.CategoryCreateManyParentCategoryInput = CategoryCreateManyParentCategoryInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryCreateManyParentCategoryInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CategoryCreateManyParentCategoryInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryCreateManyParentCategoryInput.prototype, "icon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryCreateManyParentCategoryInput.prototype, "color", void 0);
exports.CategoryCreateManyParentCategoryInput = CategoryCreateManyParentCategoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryCreateManyParentCategoryInput", {})
], CategoryCreateManyParentCategoryInput);
