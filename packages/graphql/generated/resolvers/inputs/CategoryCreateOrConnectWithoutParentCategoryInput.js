"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCreateOrConnectWithoutParentCategoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateWithoutParentCategoryInput_1 = require("../inputs/CategoryCreateWithoutParentCategoryInput");
const CategoryWhereUniqueInput_1 = require("../inputs/CategoryWhereUniqueInput");
let CategoryCreateOrConnectWithoutParentCategoryInput = class CategoryCreateOrConnectWithoutParentCategoryInput {
};
exports.CategoryCreateOrConnectWithoutParentCategoryInput = CategoryCreateOrConnectWithoutParentCategoryInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereUniqueInput_1.CategoryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryWhereUniqueInput_1.CategoryWhereUniqueInput)
], CategoryCreateOrConnectWithoutParentCategoryInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateWithoutParentCategoryInput_1.CategoryCreateWithoutParentCategoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryCreateWithoutParentCategoryInput_1.CategoryCreateWithoutParentCategoryInput)
], CategoryCreateOrConnectWithoutParentCategoryInput.prototype, "create", void 0);
exports.CategoryCreateOrConnectWithoutParentCategoryInput = CategoryCreateOrConnectWithoutParentCategoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryCreateOrConnectWithoutParentCategoryInput", {})
], CategoryCreateOrConnectWithoutParentCategoryInput);
