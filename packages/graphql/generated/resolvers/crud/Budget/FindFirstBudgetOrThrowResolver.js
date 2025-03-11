"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstBudgetOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstBudgetOrThrowArgs_1 = require("./args/FindFirstBudgetOrThrowArgs");
const Budget_1 = require("../../../models/Budget");
const helpers_1 = require("../../../helpers");
let FindFirstBudgetOrThrowResolver = class FindFirstBudgetOrThrowResolver {
    async findFirstBudgetOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).budget.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstBudgetOrThrowResolver = FindFirstBudgetOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Budget_1.Budget, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstBudgetOrThrowArgs_1.FindFirstBudgetOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstBudgetOrThrowResolver.prototype, "findFirstBudgetOrThrow", null);
exports.FindFirstBudgetOrThrowResolver = FindFirstBudgetOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Budget_1.Budget)
], FindFirstBudgetOrThrowResolver);
