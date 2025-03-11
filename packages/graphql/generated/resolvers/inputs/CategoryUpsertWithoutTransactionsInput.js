"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUpsertWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateWithoutTransactionsInput_1 = require("../inputs/CategoryCreateWithoutTransactionsInput");
const CategoryUpdateWithoutTransactionsInput_1 = require("../inputs/CategoryUpdateWithoutTransactionsInput");
const CategoryWhereInput_1 = require("../inputs/CategoryWhereInput");
let CategoryUpsertWithoutTransactionsInput = class CategoryUpsertWithoutTransactionsInput {
};
exports.CategoryUpsertWithoutTransactionsInput = CategoryUpsertWithoutTransactionsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateWithoutTransactionsInput_1.CategoryUpdateWithoutTransactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryUpdateWithoutTransactionsInput_1.CategoryUpdateWithoutTransactionsInput)
], CategoryUpsertWithoutTransactionsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateWithoutTransactionsInput_1.CategoryCreateWithoutTransactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryCreateWithoutTransactionsInput_1.CategoryCreateWithoutTransactionsInput)
], CategoryUpsertWithoutTransactionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereInput_1.CategoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryWhereInput_1.CategoryWhereInput)
], CategoryUpsertWithoutTransactionsInput.prototype, "where", void 0);
exports.CategoryUpsertWithoutTransactionsInput = CategoryUpsertWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryUpsertWithoutTransactionsInput", {})
], CategoryUpsertWithoutTransactionsInput);
