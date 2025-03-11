"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUpdateOneWithoutTransactionsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateOrConnectWithoutTransactionsInput_1 = require("../inputs/CategoryCreateOrConnectWithoutTransactionsInput");
const CategoryCreateWithoutTransactionsInput_1 = require("../inputs/CategoryCreateWithoutTransactionsInput");
const CategoryUpdateToOneWithWhereWithoutTransactionsInput_1 = require("../inputs/CategoryUpdateToOneWithWhereWithoutTransactionsInput");
const CategoryUpsertWithoutTransactionsInput_1 = require("../inputs/CategoryUpsertWithoutTransactionsInput");
const CategoryWhereInput_1 = require("../inputs/CategoryWhereInput");
const CategoryWhereUniqueInput_1 = require("../inputs/CategoryWhereUniqueInput");
let CategoryUpdateOneWithoutTransactionsNestedInput = class CategoryUpdateOneWithoutTransactionsNestedInput {
};
exports.CategoryUpdateOneWithoutTransactionsNestedInput = CategoryUpdateOneWithoutTransactionsNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateWithoutTransactionsInput_1.CategoryCreateWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryCreateWithoutTransactionsInput_1.CategoryCreateWithoutTransactionsInput)
], CategoryUpdateOneWithoutTransactionsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateOrConnectWithoutTransactionsInput_1.CategoryCreateOrConnectWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryCreateOrConnectWithoutTransactionsInput_1.CategoryCreateOrConnectWithoutTransactionsInput)
], CategoryUpdateOneWithoutTransactionsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpsertWithoutTransactionsInput_1.CategoryUpsertWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryUpsertWithoutTransactionsInput_1.CategoryUpsertWithoutTransactionsInput)
], CategoryUpdateOneWithoutTransactionsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CategoryUpdateOneWithoutTransactionsNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereInput_1.CategoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryWhereInput_1.CategoryWhereInput)
], CategoryUpdateOneWithoutTransactionsNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereUniqueInput_1.CategoryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryWhereUniqueInput_1.CategoryWhereUniqueInput)
], CategoryUpdateOneWithoutTransactionsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateToOneWithWhereWithoutTransactionsInput_1.CategoryUpdateToOneWithWhereWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryUpdateToOneWithWhereWithoutTransactionsInput_1.CategoryUpdateToOneWithWhereWithoutTransactionsInput)
], CategoryUpdateOneWithoutTransactionsNestedInput.prototype, "update", void 0);
exports.CategoryUpdateOneWithoutTransactionsNestedInput = CategoryUpdateOneWithoutTransactionsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryUpdateOneWithoutTransactionsNestedInput", {})
], CategoryUpdateOneWithoutTransactionsNestedInput);
