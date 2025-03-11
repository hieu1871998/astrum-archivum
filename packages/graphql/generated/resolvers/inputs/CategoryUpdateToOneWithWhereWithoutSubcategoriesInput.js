"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUpdateToOneWithWhereWithoutSubcategoriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryUpdateWithoutSubcategoriesInput_1 = require("../inputs/CategoryUpdateWithoutSubcategoriesInput");
const CategoryWhereInput_1 = require("../inputs/CategoryWhereInput");
let CategoryUpdateToOneWithWhereWithoutSubcategoriesInput = class CategoryUpdateToOneWithWhereWithoutSubcategoriesInput {
};
exports.CategoryUpdateToOneWithWhereWithoutSubcategoriesInput = CategoryUpdateToOneWithWhereWithoutSubcategoriesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereInput_1.CategoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryWhereInput_1.CategoryWhereInput)
], CategoryUpdateToOneWithWhereWithoutSubcategoriesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateWithoutSubcategoriesInput_1.CategoryUpdateWithoutSubcategoriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryUpdateWithoutSubcategoriesInput_1.CategoryUpdateWithoutSubcategoriesInput)
], CategoryUpdateToOneWithWhereWithoutSubcategoriesInput.prototype, "data", void 0);
exports.CategoryUpdateToOneWithWhereWithoutSubcategoriesInput = CategoryUpdateToOneWithWhereWithoutSubcategoriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryUpdateToOneWithWhereWithoutSubcategoriesInput", {})
], CategoryUpdateToOneWithWhereWithoutSubcategoriesInput);
