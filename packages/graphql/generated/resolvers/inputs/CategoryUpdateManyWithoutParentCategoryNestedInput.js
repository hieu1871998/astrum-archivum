"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUpdateManyWithoutParentCategoryNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateManyParentCategoryInputEnvelope_1 = require("../inputs/CategoryCreateManyParentCategoryInputEnvelope");
const CategoryCreateOrConnectWithoutParentCategoryInput_1 = require("../inputs/CategoryCreateOrConnectWithoutParentCategoryInput");
const CategoryCreateWithoutParentCategoryInput_1 = require("../inputs/CategoryCreateWithoutParentCategoryInput");
const CategoryScalarWhereInput_1 = require("../inputs/CategoryScalarWhereInput");
const CategoryUpdateManyWithWhereWithoutParentCategoryInput_1 = require("../inputs/CategoryUpdateManyWithWhereWithoutParentCategoryInput");
const CategoryUpdateWithWhereUniqueWithoutParentCategoryInput_1 = require("../inputs/CategoryUpdateWithWhereUniqueWithoutParentCategoryInput");
const CategoryUpsertWithWhereUniqueWithoutParentCategoryInput_1 = require("../inputs/CategoryUpsertWithWhereUniqueWithoutParentCategoryInput");
const CategoryWhereUniqueInput_1 = require("../inputs/CategoryWhereUniqueInput");
let CategoryUpdateManyWithoutParentCategoryNestedInput = class CategoryUpdateManyWithoutParentCategoryNestedInput {
};
exports.CategoryUpdateManyWithoutParentCategoryNestedInput = CategoryUpdateManyWithoutParentCategoryNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryCreateWithoutParentCategoryInput_1.CategoryCreateWithoutParentCategoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryUpdateManyWithoutParentCategoryNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryCreateOrConnectWithoutParentCategoryInput_1.CategoryCreateOrConnectWithoutParentCategoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryUpdateManyWithoutParentCategoryNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryUpsertWithWhereUniqueWithoutParentCategoryInput_1.CategoryUpsertWithWhereUniqueWithoutParentCategoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryUpdateManyWithoutParentCategoryNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateManyParentCategoryInputEnvelope_1.CategoryCreateManyParentCategoryInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryCreateManyParentCategoryInputEnvelope_1.CategoryCreateManyParentCategoryInputEnvelope)
], CategoryUpdateManyWithoutParentCategoryNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryWhereUniqueInput_1.CategoryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryUpdateManyWithoutParentCategoryNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryWhereUniqueInput_1.CategoryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryUpdateManyWithoutParentCategoryNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryWhereUniqueInput_1.CategoryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryUpdateManyWithoutParentCategoryNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryWhereUniqueInput_1.CategoryWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryUpdateManyWithoutParentCategoryNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryUpdateWithWhereUniqueWithoutParentCategoryInput_1.CategoryUpdateWithWhereUniqueWithoutParentCategoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryUpdateManyWithoutParentCategoryNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryUpdateManyWithWhereWithoutParentCategoryInput_1.CategoryUpdateManyWithWhereWithoutParentCategoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryUpdateManyWithoutParentCategoryNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryScalarWhereInput_1.CategoryScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryUpdateManyWithoutParentCategoryNestedInput.prototype, "deleteMany", void 0);
exports.CategoryUpdateManyWithoutParentCategoryNestedInput = CategoryUpdateManyWithoutParentCategoryNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryUpdateManyWithoutParentCategoryNestedInput", {})
], CategoryUpdateManyWithoutParentCategoryNestedInput);
