"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Budget_1 = require("../../../models/Budget");
const Category_1 = require("../../../models/Category");
const Transaction_1 = require("../../../models/Transaction");
const CategoryBudgetArgs_1 = require("./args/CategoryBudgetArgs");
const CategoryParentCategoryArgs_1 = require("./args/CategoryParentCategoryArgs");
const CategorySubcategoriesArgs_1 = require("./args/CategorySubcategoriesArgs");
const CategoryTransactionsArgs_1 = require("./args/CategoryTransactionsArgs");
const helpers_1 = require("../../../helpers");
let CategoryRelationsResolver = class CategoryRelationsResolver {
    async parentCategory(category, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).category.findUniqueOrThrow({
            where: {
                id: category.id,
            },
        }).parentCategory({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async subcategories(category, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).category.findUniqueOrThrow({
            where: {
                id: category.id,
            },
        }).subcategories({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async transactions(category, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).category.findUniqueOrThrow({
            where: {
                id: category.id,
            },
        }).transactions({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async Budget(category, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).category.findUniqueOrThrow({
            where: {
                id: category.id,
            },
        }).Budget({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CategoryRelationsResolver = CategoryRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Category_1.Category, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Category_1.Category, Object, Object, CategoryParentCategoryArgs_1.CategoryParentCategoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoryRelationsResolver.prototype, "parentCategory", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Category_1.Category], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Category_1.Category, Object, Object, CategorySubcategoriesArgs_1.CategorySubcategoriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoryRelationsResolver.prototype, "subcategories", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Transaction_1.Transaction], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Category_1.Category, Object, Object, CategoryTransactionsArgs_1.CategoryTransactionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoryRelationsResolver.prototype, "transactions", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Budget_1.Budget], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Category_1.Category, Object, Object, CategoryBudgetArgs_1.CategoryBudgetArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoryRelationsResolver.prototype, "Budget", null);
exports.CategoryRelationsResolver = CategoryRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Category_1.Category)
], CategoryRelationsResolver);
