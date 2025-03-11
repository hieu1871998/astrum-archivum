"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCreateNestedOneWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateOrConnectWithoutTransactionsInput_1 = require("../inputs/CategoryCreateOrConnectWithoutTransactionsInput");
const CategoryCreateWithoutTransactionsInput_1 = require("../inputs/CategoryCreateWithoutTransactionsInput");
const CategoryWhereUniqueInput_1 = require("../inputs/CategoryWhereUniqueInput");
let CategoryCreateNestedOneWithoutTransactionsInput = class CategoryCreateNestedOneWithoutTransactionsInput {
};
exports.CategoryCreateNestedOneWithoutTransactionsInput = CategoryCreateNestedOneWithoutTransactionsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateWithoutTransactionsInput_1.CategoryCreateWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryCreateWithoutTransactionsInput_1.CategoryCreateWithoutTransactionsInput)
], CategoryCreateNestedOneWithoutTransactionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateOrConnectWithoutTransactionsInput_1.CategoryCreateOrConnectWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryCreateOrConnectWithoutTransactionsInput_1.CategoryCreateOrConnectWithoutTransactionsInput)
], CategoryCreateNestedOneWithoutTransactionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereUniqueInput_1.CategoryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryWhereUniqueInput_1.CategoryWhereUniqueInput)
], CategoryCreateNestedOneWithoutTransactionsInput.prototype, "connect", void 0);
exports.CategoryCreateNestedOneWithoutTransactionsInput = CategoryCreateNestedOneWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryCreateNestedOneWithoutTransactionsInput", {})
], CategoryCreateNestedOneWithoutTransactionsInput);
