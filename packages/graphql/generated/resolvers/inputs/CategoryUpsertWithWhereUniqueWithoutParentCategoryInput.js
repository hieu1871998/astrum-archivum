"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUpsertWithWhereUniqueWithoutParentCategoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateWithoutParentCategoryInput_1 = require("../inputs/CategoryCreateWithoutParentCategoryInput");
const CategoryUpdateWithoutParentCategoryInput_1 = require("../inputs/CategoryUpdateWithoutParentCategoryInput");
const CategoryWhereUniqueInput_1 = require("../inputs/CategoryWhereUniqueInput");
let CategoryUpsertWithWhereUniqueWithoutParentCategoryInput = class CategoryUpsertWithWhereUniqueWithoutParentCategoryInput {
};
exports.CategoryUpsertWithWhereUniqueWithoutParentCategoryInput = CategoryUpsertWithWhereUniqueWithoutParentCategoryInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereUniqueInput_1.CategoryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryWhereUniqueInput_1.CategoryWhereUniqueInput)
], CategoryUpsertWithWhereUniqueWithoutParentCategoryInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateWithoutParentCategoryInput_1.CategoryUpdateWithoutParentCategoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryUpdateWithoutParentCategoryInput_1.CategoryUpdateWithoutParentCategoryInput)
], CategoryUpsertWithWhereUniqueWithoutParentCategoryInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateWithoutParentCategoryInput_1.CategoryCreateWithoutParentCategoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryCreateWithoutParentCategoryInput_1.CategoryCreateWithoutParentCategoryInput)
], CategoryUpsertWithWhereUniqueWithoutParentCategoryInput.prototype, "create", void 0);
exports.CategoryUpsertWithWhereUniqueWithoutParentCategoryInput = CategoryUpsertWithWhereUniqueWithoutParentCategoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryUpsertWithWhereUniqueWithoutParentCategoryInput", {})
], CategoryUpsertWithWhereUniqueWithoutParentCategoryInput);
