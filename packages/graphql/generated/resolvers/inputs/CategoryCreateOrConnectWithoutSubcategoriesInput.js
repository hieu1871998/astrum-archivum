"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCreateOrConnectWithoutSubcategoriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateWithoutSubcategoriesInput_1 = require("../inputs/CategoryCreateWithoutSubcategoriesInput");
const CategoryWhereUniqueInput_1 = require("../inputs/CategoryWhereUniqueInput");
let CategoryCreateOrConnectWithoutSubcategoriesInput = class CategoryCreateOrConnectWithoutSubcategoriesInput {
};
exports.CategoryCreateOrConnectWithoutSubcategoriesInput = CategoryCreateOrConnectWithoutSubcategoriesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereUniqueInput_1.CategoryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryWhereUniqueInput_1.CategoryWhereUniqueInput)
], CategoryCreateOrConnectWithoutSubcategoriesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateWithoutSubcategoriesInput_1.CategoryCreateWithoutSubcategoriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryCreateWithoutSubcategoriesInput_1.CategoryCreateWithoutSubcategoriesInput)
], CategoryCreateOrConnectWithoutSubcategoriesInput.prototype, "create", void 0);
exports.CategoryCreateOrConnectWithoutSubcategoriesInput = CategoryCreateOrConnectWithoutSubcategoriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryCreateOrConnectWithoutSubcategoriesInput", {})
], CategoryCreateOrConnectWithoutSubcategoriesInput);
