"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Account_1 = require("../../../models/Account");
const Category_1 = require("../../../models/Category");
const Tag_1 = require("../../../models/Tag");
const Transaction_1 = require("../../../models/Transaction");
const User_1 = require("../../../models/User");
const TransactionCategoryArgs_1 = require("./args/TransactionCategoryArgs");
const TransactionTagsArgs_1 = require("./args/TransactionTagsArgs");
const helpers_1 = require("../../../helpers");
let TransactionRelationsResolver = class TransactionRelationsResolver {
    async account(transaction, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).transaction.findUniqueOrThrow({
            where: {
                id: transaction.id,
            },
        }).account({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async user(transaction, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).transaction.findUniqueOrThrow({
            where: {
                id: transaction.id,
            },
        }).user({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async category(transaction, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).transaction.findUniqueOrThrow({
            where: {
                id: transaction.id,
            },
        }).category({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async tags(transaction, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).transaction.findUniqueOrThrow({
            where: {
                id: transaction.id,
            },
        }).tags({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.TransactionRelationsResolver = TransactionRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Account_1.Account, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Transaction_1.Transaction, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionRelationsResolver.prototype, "account", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Transaction_1.Transaction, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionRelationsResolver.prototype, "user", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Category_1.Category, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Transaction_1.Transaction, Object, Object, TransactionCategoryArgs_1.TransactionCategoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionRelationsResolver.prototype, "category", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Tag_1.Tag], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Transaction_1.Transaction, Object, Object, TransactionTagsArgs_1.TransactionTagsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionRelationsResolver.prototype, "tags", null);
exports.TransactionRelationsResolver = TransactionRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Transaction_1.Transaction)
], TransactionRelationsResolver);
