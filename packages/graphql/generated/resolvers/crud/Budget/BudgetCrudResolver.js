"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateBudgetArgs_1 = require("./args/AggregateBudgetArgs");
const CreateManyBudgetArgs_1 = require("./args/CreateManyBudgetArgs");
const CreateOneBudgetArgs_1 = require("./args/CreateOneBudgetArgs");
const DeleteManyBudgetArgs_1 = require("./args/DeleteManyBudgetArgs");
const DeleteOneBudgetArgs_1 = require("./args/DeleteOneBudgetArgs");
const FindFirstBudgetArgs_1 = require("./args/FindFirstBudgetArgs");
const FindFirstBudgetOrThrowArgs_1 = require("./args/FindFirstBudgetOrThrowArgs");
const FindManyBudgetArgs_1 = require("./args/FindManyBudgetArgs");
const FindUniqueBudgetArgs_1 = require("./args/FindUniqueBudgetArgs");
const FindUniqueBudgetOrThrowArgs_1 = require("./args/FindUniqueBudgetOrThrowArgs");
const GroupByBudgetArgs_1 = require("./args/GroupByBudgetArgs");
const UpdateManyBudgetArgs_1 = require("./args/UpdateManyBudgetArgs");
const UpdateOneBudgetArgs_1 = require("./args/UpdateOneBudgetArgs");
const UpsertOneBudgetArgs_1 = require("./args/UpsertOneBudgetArgs");
const helpers_1 = require("../../../helpers");
const Budget_1 = require("../../../models/Budget");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateBudget_1 = require("../../outputs/AggregateBudget");
const BudgetGroupBy_1 = require("../../outputs/BudgetGroupBy");
let BudgetCrudResolver = class BudgetCrudResolver {
    async aggregateBudget(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).budget.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyBudget(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).budget.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneBudget(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).budget.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyBudget(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).budget.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneBudget(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).budget.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstBudget(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).budget.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstBudgetOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).budget.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async budgets(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).budget.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async budget(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).budget.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getBudget(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).budget.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByBudget(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).budget.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyBudget(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).budget.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneBudget(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).budget.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneBudget(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).budget.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.BudgetCrudResolver = BudgetCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateBudget_1.AggregateBudget, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateBudgetArgs_1.AggregateBudgetArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BudgetCrudResolver.prototype, "aggregateBudget", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyBudgetArgs_1.CreateManyBudgetArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BudgetCrudResolver.prototype, "createManyBudget", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Budget_1.Budget, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneBudgetArgs_1.CreateOneBudgetArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BudgetCrudResolver.prototype, "createOneBudget", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyBudgetArgs_1.DeleteManyBudgetArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BudgetCrudResolver.prototype, "deleteManyBudget", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Budget_1.Budget, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneBudgetArgs_1.DeleteOneBudgetArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BudgetCrudResolver.prototype, "deleteOneBudget", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Budget_1.Budget, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstBudgetArgs_1.FindFirstBudgetArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BudgetCrudResolver.prototype, "findFirstBudget", null);
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
], BudgetCrudResolver.prototype, "findFirstBudgetOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Budget_1.Budget], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyBudgetArgs_1.FindManyBudgetArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BudgetCrudResolver.prototype, "budgets", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Budget_1.Budget, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueBudgetArgs_1.FindUniqueBudgetArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BudgetCrudResolver.prototype, "budget", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Budget_1.Budget, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueBudgetOrThrowArgs_1.FindUniqueBudgetOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BudgetCrudResolver.prototype, "getBudget", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [BudgetGroupBy_1.BudgetGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByBudgetArgs_1.GroupByBudgetArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BudgetCrudResolver.prototype, "groupByBudget", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyBudgetArgs_1.UpdateManyBudgetArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BudgetCrudResolver.prototype, "updateManyBudget", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Budget_1.Budget, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneBudgetArgs_1.UpdateOneBudgetArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BudgetCrudResolver.prototype, "updateOneBudget", null);
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
], BudgetCrudResolver.prototype, "upsertOneBudget", null);
exports.BudgetCrudResolver = BudgetCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Budget_1.Budget)
], BudgetCrudResolver);
