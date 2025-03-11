"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCreateNestedOneWithoutSubcategoriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateOrConnectWithoutSubcategoriesInput_1 = require("../inputs/CategoryCreateOrConnectWithoutSubcategoriesInput");
const CategoryCreateWithoutSubcategoriesInput_1 = require("../inputs/CategoryCreateWithoutSubcategoriesInput");
const CategoryWhereUniqueInput_1 = require("../inputs/CategoryWhereUniqueInput");
let CategoryCreateNestedOneWithoutSubcategoriesInput = class CategoryCreateNestedOneWithoutSubcategoriesInput {
};
exports.CategoryCreateNestedOneWithoutSubcategoriesInput = CategoryCreateNestedOneWithoutSubcategoriesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateWithoutSubcategoriesInput_1.CategoryCreateWithoutSubcategoriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryCreateWithoutSubcategoriesInput_1.CategoryCreateWithoutSubcategoriesInput)
], CategoryCreateNestedOneWithoutSubcategoriesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateOrConnectWithoutSubcategoriesInput_1.CategoryCreateOrConnectWithoutSubcategoriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryCreateOrConnectWithoutSubcategoriesInput_1.CategoryCreateOrConnectWithoutSubcategoriesInput)
], CategoryCreateNestedOneWithoutSubcategoriesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereUniqueInput_1.CategoryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryWhereUniqueInput_1.CategoryWhereUniqueInput)
], CategoryCreateNestedOneWithoutSubcategoriesInput.prototype, "connect", void 0);
exports.CategoryCreateNestedOneWithoutSubcategoriesInput = CategoryCreateNestedOneWithoutSubcategoriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryCreateNestedOneWithoutSubcategoriesInput", {})
], CategoryCreateNestedOneWithoutSubcategoriesInput);
