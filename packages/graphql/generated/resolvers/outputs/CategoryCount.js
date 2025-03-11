"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCountBudgetArgs_1 = require("./args/CategoryCountBudgetArgs");
const CategoryCountSubcategoriesArgs_1 = require("./args/CategoryCountSubcategoriesArgs");
const CategoryCountTransactionsArgs_1 = require("./args/CategoryCountTransactionsArgs");
let CategoryCount = class CategoryCount {
    getSubcategories(root, args) {
        return root.subcategories;
    }
    getTransactions(root, args) {
        return root.transactions;
    }
    getBudget(root, args) {
        return root.Budget;
    }
};
exports.CategoryCount = CategoryCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "subcategories",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CategoryCount, CategoryCountSubcategoriesArgs_1.CategoryCountSubcategoriesArgs]),
    tslib_1.__metadata("design:returntype", Number)
], CategoryCount.prototype, "getSubcategories", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "transactions",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CategoryCount, CategoryCountTransactionsArgs_1.CategoryCountTransactionsArgs]),
    tslib_1.__metadata("design:returntype", Number)
], CategoryCount.prototype, "getTransactions", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "Budget",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CategoryCount, CategoryCountBudgetArgs_1.CategoryCountBudgetArgs]),
    tslib_1.__metadata("design:returntype", Number)
], CategoryCount.prototype, "getBudget", null);
exports.CategoryCount = CategoryCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CategoryCount", {})
], CategoryCount);
