"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryParentCategoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryWhereInput_1 = require("../../../inputs/CategoryWhereInput");
let CategoryParentCategoryArgs = class CategoryParentCategoryArgs {
};
exports.CategoryParentCategoryArgs = CategoryParentCategoryArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereInput_1.CategoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryWhereInput_1.CategoryWhereInput)
], CategoryParentCategoryArgs.prototype, "where", void 0);
exports.CategoryParentCategoryArgs = CategoryParentCategoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CategoryParentCategoryArgs);
