"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyBudgetResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyBudgetArgs_1 = require("./args/CreateManyBudgetArgs");
const Budget_1 = require("../../../models/Budget");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyBudgetResolver = class CreateManyBudgetResolver {
    async createManyBudget(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).budget.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyBudgetResolver = CreateManyBudgetResolver;
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
], CreateManyBudgetResolver.prototype, "createManyBudget", null);
exports.CreateManyBudgetResolver = CreateManyBudgetResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Budget_1.Budget)
], CreateManyBudgetResolver);
