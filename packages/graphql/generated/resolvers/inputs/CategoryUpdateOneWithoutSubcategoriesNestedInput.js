"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUpdateOneWithoutSubcategoriesNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateOrConnectWithoutSubcategoriesInput_1 = require("../inputs/CategoryCreateOrConnectWithoutSubcategoriesInput");
const CategoryCreateWithoutSubcategoriesInput_1 = require("../inputs/CategoryCreateWithoutSubcategoriesInput");
const CategoryUpdateToOneWithWhereWithoutSubcategoriesInput_1 = require("../inputs/CategoryUpdateToOneWithWhereWithoutSubcategoriesInput");
const CategoryUpsertWithoutSubcategoriesInput_1 = require("../inputs/CategoryUpsertWithoutSubcategoriesInput");
const CategoryWhereInput_1 = require("../inputs/CategoryWhereInput");
const CategoryWhereUniqueInput_1 = require("../inputs/CategoryWhereUniqueInput");
let CategoryUpdateOneWithoutSubcategoriesNestedInput = class CategoryUpdateOneWithoutSubcategoriesNestedInput {
};
exports.CategoryUpdateOneWithoutSubcategoriesNestedInput = CategoryUpdateOneWithoutSubcategoriesNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateWithoutSubcategoriesInput_1.CategoryCreateWithoutSubcategoriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryCreateWithoutSubcategoriesInput_1.CategoryCreateWithoutSubcategoriesInput)
], CategoryUpdateOneWithoutSubcategoriesNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateOrConnectWithoutSubcategoriesInput_1.CategoryCreateOrConnectWithoutSubcategoriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryCreateOrConnectWithoutSubcategoriesInput_1.CategoryCreateOrConnectWithoutSubcategoriesInput)
], CategoryUpdateOneWithoutSubcategoriesNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpsertWithoutSubcategoriesInput_1.CategoryUpsertWithoutSubcategoriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryUpsertWithoutSubcategoriesInput_1.CategoryUpsertWithoutSubcategoriesInput)
], CategoryUpdateOneWithoutSubcategoriesNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CategoryUpdateOneWithoutSubcategoriesNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereInput_1.CategoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryWhereInput_1.CategoryWhereInput)
], CategoryUpdateOneWithoutSubcategoriesNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereUniqueInput_1.CategoryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryWhereUniqueInput_1.CategoryWhereUniqueInput)
], CategoryUpdateOneWithoutSubcategoriesNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateToOneWithWhereWithoutSubcategoriesInput_1.CategoryUpdateToOneWithWhereWithoutSubcategoriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryUpdateToOneWithWhereWithoutSubcategoriesInput_1.CategoryUpdateToOneWithWhereWithoutSubcategoriesInput)
], CategoryUpdateOneWithoutSubcategoriesNestedInput.prototype, "update", void 0);
exports.CategoryUpdateOneWithoutSubcategoriesNestedInput = CategoryUpdateOneWithoutSubcategoriesNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryUpdateOneWithoutSubcategoriesNestedInput", {})
], CategoryUpdateOneWithoutSubcategoriesNestedInput);
