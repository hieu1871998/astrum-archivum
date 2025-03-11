"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneBudgetResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneBudgetArgs_1 = require("./args/UpsertOneBudgetArgs");
const Budget_1 = require("../../../models/Budget");
const helpers_1 = require("../../../helpers");
let UpsertOneBudgetResolver = class UpsertOneBudgetResolver {
    async upsertOneBudget(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).budget.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpsertOneBudgetResolver = UpsertOneBudgetResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Budget_1.Budget, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneBudgetArgs_1.UpsertOneBudgetArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneBudgetResolver.prototype, "upsertOneBudget", null);
exports.UpsertOneBudgetResolver = UpsertOneBudgetResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Budget_1.Budget)
], UpsertOneBudgetResolver);
