"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCreateNestedManyWithoutParentCategoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateManyParentCategoryInputEnvelope_1 = require("../inputs/CategoryCreateManyParentCategoryInputEnvelope");
const CategoryCreateOrConnectWithoutParentCategoryInput_1 = require("../inputs/CategoryCreateOrConnectWithoutParentCategoryInput");
const CategoryCreateWithoutParentCategoryInput_1 = require("../inputs/CategoryCreateWithoutParentCategoryInput");
const CategoryWhereUniqueInput_1 = require("../inputs/CategoryWhereUniqueInput");
let CategoryCreateNestedManyWithoutParentCategoryInput = class CategoryCreateNestedManyWithoutParentCategoryInput {
};
exports.CategoryCreateNestedManyWithoutParentCategoryInput = CategoryCreateNestedManyWithoutParentCategoryInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryCreateWithoutParentCategoryInput_1.CategoryCreateWithoutParentCategoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryCreateNestedManyWithoutParentCategoryInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryCreateOrConnectWithoutParentCategoryInput_1.CategoryCreateOrConnectWithoutParentCategoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryCreateNestedManyWithoutParentCategoryInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateManyParentCategoryInputEnvelope_1.CategoryCreateManyParentCategoryInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryCreateManyParentCategoryInputEnvelope_1.CategoryCreateManyParentCategoryInputEnvelope)
], CategoryCreateNestedManyWithoutParentCategoryInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryWhereUniqueInput_1.CategoryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryCreateNestedManyWithoutParentCategoryInput.prototype, "connect", void 0);
exports.CategoryCreateNestedManyWithoutParentCategoryInput = CategoryCreateNestedManyWithoutParentCategoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryCreateNestedManyWithoutParentCategoryInput", {})
], CategoryCreateNestedManyWithoutParentCategoryInput);
