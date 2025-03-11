"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCreateOrConnectWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateWithoutTransactionsInput_1 = require("../inputs/CategoryCreateWithoutTransactionsInput");
const CategoryWhereUniqueInput_1 = require("../inputs/CategoryWhereUniqueInput");
let CategoryCreateOrConnectWithoutTransactionsInput = class CategoryCreateOrConnectWithoutTransactionsInput {
};
exports.CategoryCreateOrConnectWithoutTransactionsInput = CategoryCreateOrConnectWithoutTransactionsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereUniqueInput_1.CategoryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryWhereUniqueInput_1.CategoryWhereUniqueInput)
], CategoryCreateOrConnectWithoutTransactionsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateWithoutTransactionsInput_1.CategoryCreateWithoutTransactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryCreateWithoutTransactionsInput_1.CategoryCreateWithoutTransactionsInput)
], CategoryCreateOrConnectWithoutTransactionsInput.prototype, "create", void 0);
exports.CategoryCreateOrConnectWithoutTransactionsInput = CategoryCreateOrConnectWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryCreateOrConnectWithoutTransactionsInput", {})
], CategoryCreateOrConnectWithoutTransactionsInput);
