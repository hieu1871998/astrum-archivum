"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Account_1 = require("../../../models/Account");
const Transaction_1 = require("../../../models/Transaction");
const User_1 = require("../../../models/User");
const AccountTransactionsArgs_1 = require("./args/AccountTransactionsArgs");
const helpers_1 = require("../../../helpers");
let AccountRelationsResolver = class AccountRelationsResolver {
    async user(account, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).account.findUniqueOrThrow({
            where: {
                id: account.id,
            },
        }).user({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async transactions(account, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).account.findUniqueOrThrow({
            where: {
                id: account.id,
            },
        }).transactions({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.AccountRelationsResolver = AccountRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Account_1.Account, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AccountRelationsResolver.prototype, "user", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Transaction_1.Transaction], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Account_1.Account, Object, Object, AccountTransactionsArgs_1.AccountTransactionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AccountRelationsResolver.prototype, "transactions", null);
exports.AccountRelationsResolver = AccountRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Account_1.Account)
], AccountRelationsResolver);
