"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUpdateToOneWithWhereWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryUpdateWithoutTransactionsInput_1 = require("../inputs/CategoryUpdateWithoutTransactionsInput");
const CategoryWhereInput_1 = require("../inputs/CategoryWhereInput");
let CategoryUpdateToOneWithWhereWithoutTransactionsInput = class CategoryUpdateToOneWithWhereWithoutTransactionsInput {
};
exports.CategoryUpdateToOneWithWhereWithoutTransactionsInput = CategoryUpdateToOneWithWhereWithoutTransactionsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereInput_1.CategoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryWhereInput_1.CategoryWhereInput)
], CategoryUpdateToOneWithWhereWithoutTransactionsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateWithoutTransactionsInput_1.CategoryUpdateWithoutTransactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryUpdateWithoutTransactionsInput_1.CategoryUpdateWithoutTransactionsInput)
], CategoryUpdateToOneWithWhereWithoutTransactionsInput.prototype, "data", void 0);
exports.CategoryUpdateToOneWithWhereWithoutTransactionsInput = CategoryUpdateToOneWithWhereWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryUpdateToOneWithWhereWithoutTransactionsInput", {})
], CategoryUpdateToOneWithWhereWithoutTransactionsInput);
