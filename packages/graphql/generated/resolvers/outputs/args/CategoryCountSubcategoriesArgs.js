"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCountSubcategoriesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryWhereInput_1 = require("../../inputs/CategoryWhereInput");
let CategoryCountSubcategoriesArgs = class CategoryCountSubcategoriesArgs {
};
exports.CategoryCountSubcategoriesArgs = CategoryCountSubcategoriesArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereInput_1.CategoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryWhereInput_1.CategoryWhereInput)
], CategoryCountSubcategoriesArgs.prototype, "where", void 0);
exports.CategoryCountSubcategoriesArgs = CategoryCountSubcategoriesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CategoryCountSubcategoriesArgs);
