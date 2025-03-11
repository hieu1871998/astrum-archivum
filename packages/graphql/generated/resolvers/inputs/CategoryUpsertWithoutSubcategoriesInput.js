"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUpsertWithoutSubcategoriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateWithoutSubcategoriesInput_1 = require("../inputs/CategoryCreateWithoutSubcategoriesInput");
const CategoryUpdateWithoutSubcategoriesInput_1 = require("../inputs/CategoryUpdateWithoutSubcategoriesInput");
const CategoryWhereInput_1 = require("../inputs/CategoryWhereInput");
let CategoryUpsertWithoutSubcategoriesInput = class CategoryUpsertWithoutSubcategoriesInput {
};
exports.CategoryUpsertWithoutSubcategoriesInput = CategoryUpsertWithoutSubcategoriesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateWithoutSubcategoriesInput_1.CategoryUpdateWithoutSubcategoriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryUpdateWithoutSubcategoriesInput_1.CategoryUpdateWithoutSubcategoriesInput)
], CategoryUpsertWithoutSubcategoriesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateWithoutSubcategoriesInput_1.CategoryCreateWithoutSubcategoriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryCreateWithoutSubcategoriesInput_1.CategoryCreateWithoutSubcategoriesInput)
], CategoryUpsertWithoutSubcategoriesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereInput_1.CategoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryWhereInput_1.CategoryWhereInput)
], CategoryUpsertWithoutSubcategoriesInput.prototype, "where", void 0);
exports.CategoryUpsertWithoutSubcategoriesInput = CategoryUpsertWithoutSubcategoriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryUpsertWithoutSubcategoriesInput", {})
], CategoryUpsertWithoutSubcategoriesInput);
