"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUpdateWithWhereUniqueWithoutParentCategoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryUpdateWithoutParentCategoryInput_1 = require("../inputs/CategoryUpdateWithoutParentCategoryInput");
const CategoryWhereUniqueInput_1 = require("../inputs/CategoryWhereUniqueInput");
let CategoryUpdateWithWhereUniqueWithoutParentCategoryInput = class CategoryUpdateWithWhereUniqueWithoutParentCategoryInput {
};
exports.CategoryUpdateWithWhereUniqueWithoutParentCategoryInput = CategoryUpdateWithWhereUniqueWithoutParentCategoryInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereUniqueInput_1.CategoryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryWhereUniqueInput_1.CategoryWhereUniqueInput)
], CategoryUpdateWithWhereUniqueWithoutParentCategoryInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateWithoutParentCategoryInput_1.CategoryUpdateWithoutParentCategoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryUpdateWithoutParentCategoryInput_1.CategoryUpdateWithoutParentCategoryInput)
], CategoryUpdateWithWhereUniqueWithoutParentCategoryInput.prototype, "data", void 0);
exports.CategoryUpdateWithWhereUniqueWithoutParentCategoryInput = CategoryUpdateWithWhereUniqueWithoutParentCategoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryUpdateWithWhereUniqueWithoutParentCategoryInput", {})
], CategoryUpdateWithWhereUniqueWithoutParentCategoryInput);
