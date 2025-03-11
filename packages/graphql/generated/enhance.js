"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
const tslib_1 = require("tslib");
const tslib = tslib_1.__importStar(require("tslib"));
const crudResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = tslib_1.__importStar(require("./resolvers/crud/args.index"));
const actionResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = tslib_1.__importStar(require("./resolvers/relations/resolvers.index"));
const models = tslib_1.__importStar(require("./models"));
const outputTypes = tslib_1.__importStar(require("./resolvers/outputs"));
const inputTypes = tslib_1.__importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    Account: crudResolvers.AccountCrudResolver,
    Budget: crudResolvers.BudgetCrudResolver,
    Category: crudResolvers.CategoryCrudResolver,
    Tag: crudResolvers.TagCrudResolver,
    Transaction: crudResolvers.TransactionCrudResolver,
    User: crudResolvers.UserCrudResolver
};
const actionResolversMap = {
    Account: {
        aggregateAccount: actionResolvers.AggregateAccountResolver,
        createManyAccount: actionResolvers.CreateManyAccountResolver,
        createOneAccount: actionResolvers.CreateOneAccountResolver,
        deleteManyAccount: actionResolvers.DeleteManyAccountResolver,
        deleteOneAccount: actionResolvers.DeleteOneAccountResolver,
        findFirstAccount: actionResolvers.FindFirstAccountResolver,
        findFirstAccountOrThrow: actionResolvers.FindFirstAccountOrThrowResolver,
        accounts: actionResolvers.FindManyAccountResolver,
        account: actionResolvers.FindUniqueAccountResolver,
        getAccount: actionResolvers.FindUniqueAccountOrThrowResolver,
        groupByAccount: actionResolvers.GroupByAccountResolver,
        updateManyAccount: actionResolvers.UpdateManyAccountResolver,
        updateOneAccount: actionResolvers.UpdateOneAccountResolver,
        upsertOneAccount: actionResolvers.UpsertOneAccountResolver
    },
    Budget: {
        aggregateBudget: actionResolvers.AggregateBudgetResolver,
        createManyBudget: actionResolvers.CreateManyBudgetResolver,
        createOneBudget: actionResolvers.CreateOneBudgetResolver,
        deleteManyBudget: actionResolvers.DeleteManyBudgetResolver,
        deleteOneBudget: actionResolvers.DeleteOneBudgetResolver,
        findFirstBudget: actionResolvers.FindFirstBudgetResolver,
        findFirstBudgetOrThrow: actionResolvers.FindFirstBudgetOrThrowResolver,
        budgets: actionResolvers.FindManyBudgetResolver,
        budget: actionResolvers.FindUniqueBudgetResolver,
        getBudget: actionResolvers.FindUniqueBudgetOrThrowResolver,
        groupByBudget: actionResolvers.GroupByBudgetResolver,
        updateManyBudget: actionResolvers.UpdateManyBudgetResolver,
        updateOneBudget: actionResolvers.UpdateOneBudgetResolver,
        upsertOneBudget: actionResolvers.UpsertOneBudgetResolver
    },
    Category: {
        aggregateCategory: actionResolvers.AggregateCategoryResolver,
        createManyCategory: actionResolvers.CreateManyCategoryResolver,
        createOneCategory: actionResolvers.CreateOneCategoryResolver,
        deleteManyCategory: actionResolvers.DeleteManyCategoryResolver,
        deleteOneCategory: actionResolvers.DeleteOneCategoryResolver,
        findFirstCategory: actionResolvers.FindFirstCategoryResolver,
        findFirstCategoryOrThrow: actionResolvers.FindFirstCategoryOrThrowResolver,
        categories: actionResolvers.FindManyCategoryResolver,
        category: actionResolvers.FindUniqueCategoryResolver,
        getCategory: actionResolvers.FindUniqueCategoryOrThrowResolver,
        groupByCategory: actionResolvers.GroupByCategoryResolver,
        updateManyCategory: actionResolvers.UpdateManyCategoryResolver,
        updateOneCategory: actionResolvers.UpdateOneCategoryResolver,
        upsertOneCategory: actionResolvers.UpsertOneCategoryResolver
    },
    Tag: {
        aggregateTag: actionResolvers.AggregateTagResolver,
        createManyTag: actionResolvers.CreateManyTagResolver,
        createOneTag: actionResolvers.CreateOneTagResolver,
        deleteManyTag: actionResolvers.DeleteManyTagResolver,
        deleteOneTag: actionResolvers.DeleteOneTagResolver,
        findFirstTag: actionResolvers.FindFirstTagResolver,
        findFirstTagOrThrow: actionResolvers.FindFirstTagOrThrowResolver,
        tags: actionResolvers.FindManyTagResolver,
        tag: actionResolvers.FindUniqueTagResolver,
        getTag: actionResolvers.FindUniqueTagOrThrowResolver,
        groupByTag: actionResolvers.GroupByTagResolver,
        updateManyTag: actionResolvers.UpdateManyTagResolver,
        updateOneTag: actionResolvers.UpdateOneTagResolver,
        upsertOneTag: actionResolvers.UpsertOneTagResolver
    },
    Transaction: {
        aggregateTransaction: actionResolvers.AggregateTransactionResolver,
        createManyTransaction: actionResolvers.CreateManyTransactionResolver,
        createOneTransaction: actionResolvers.CreateOneTransactionResolver,
        deleteManyTransaction: actionResolvers.DeleteManyTransactionResolver,
        deleteOneTransaction: actionResolvers.DeleteOneTransactionResolver,
        findFirstTransaction: actionResolvers.FindFirstTransactionResolver,
        findFirstTransactionOrThrow: actionResolvers.FindFirstTransactionOrThrowResolver,
        transactions: actionResolvers.FindManyTransactionResolver,
        transaction: actionResolvers.FindUniqueTransactionResolver,
        getTransaction: actionResolvers.FindUniqueTransactionOrThrowResolver,
        groupByTransaction: actionResolvers.GroupByTransactionResolver,
        updateManyTransaction: actionResolvers.UpdateManyTransactionResolver,
        updateOneTransaction: actionResolvers.UpdateOneTransactionResolver,
        upsertOneTransaction: actionResolvers.UpsertOneTransactionResolver
    },
    User: {
        aggregateUser: actionResolvers.AggregateUserResolver,
        createManyUser: actionResolvers.CreateManyUserResolver,
        createOneUser: actionResolvers.CreateOneUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        deleteOneUser: actionResolvers.DeleteOneUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
        users: actionResolvers.FindManyUserResolver,
        user: actionResolvers.FindUniqueUserResolver,
        getUser: actionResolvers.FindUniqueUserOrThrowResolver,
        groupByUser: actionResolvers.GroupByUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        updateOneUser: actionResolvers.UpdateOneUserResolver,
        upsertOneUser: actionResolvers.UpsertOneUserResolver
    }
};
const crudResolversInfo = {
    Account: ["aggregateAccount", "createManyAccount", "createOneAccount", "deleteManyAccount", "deleteOneAccount", "findFirstAccount", "findFirstAccountOrThrow", "accounts", "account", "getAccount", "groupByAccount", "updateManyAccount", "updateOneAccount", "upsertOneAccount"],
    Budget: ["aggregateBudget", "createManyBudget", "createOneBudget", "deleteManyBudget", "deleteOneBudget", "findFirstBudget", "findFirstBudgetOrThrow", "budgets", "budget", "getBudget", "groupByBudget", "updateManyBudget", "updateOneBudget", "upsertOneBudget"],
    Category: ["aggregateCategory", "createManyCategory", "createOneCategory", "deleteManyCategory", "deleteOneCategory", "findFirstCategory", "findFirstCategoryOrThrow", "categories", "category", "getCategory", "groupByCategory", "updateManyCategory", "updateOneCategory", "upsertOneCategory"],
    Tag: ["aggregateTag", "createManyTag", "createOneTag", "deleteManyTag", "deleteOneTag", "findFirstTag", "findFirstTagOrThrow", "tags", "tag", "getTag", "groupByTag", "updateManyTag", "updateOneTag", "upsertOneTag"],
    Transaction: ["aggregateTransaction", "createManyTransaction", "createOneTransaction", "deleteManyTransaction", "deleteOneTransaction", "findFirstTransaction", "findFirstTransactionOrThrow", "transactions", "transaction", "getTransaction", "groupByTransaction", "updateManyTransaction", "updateOneTransaction", "upsertOneTransaction"],
    User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"]
};
const argsInfo = {
    AggregateAccountArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyAccountArgs: ["data"],
    CreateOneAccountArgs: ["data"],
    DeleteManyAccountArgs: ["where"],
    DeleteOneAccountArgs: ["where"],
    FindFirstAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstAccountOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueAccountArgs: ["where"],
    FindUniqueAccountOrThrowArgs: ["where"],
    GroupByAccountArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyAccountArgs: ["data", "where"],
    UpdateOneAccountArgs: ["data", "where"],
    UpsertOneAccountArgs: ["where", "create", "update"],
    AggregateBudgetArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyBudgetArgs: ["data"],
    CreateOneBudgetArgs: ["data"],
    DeleteManyBudgetArgs: ["where"],
    DeleteOneBudgetArgs: ["where"],
    FindFirstBudgetArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstBudgetOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyBudgetArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueBudgetArgs: ["where"],
    FindUniqueBudgetOrThrowArgs: ["where"],
    GroupByBudgetArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyBudgetArgs: ["data", "where"],
    UpdateOneBudgetArgs: ["data", "where"],
    UpsertOneBudgetArgs: ["where", "create", "update"],
    AggregateCategoryArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyCategoryArgs: ["data"],
    CreateOneCategoryArgs: ["data"],
    DeleteManyCategoryArgs: ["where"],
    DeleteOneCategoryArgs: ["where"],
    FindFirstCategoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstCategoryOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyCategoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueCategoryArgs: ["where"],
    FindUniqueCategoryOrThrowArgs: ["where"],
    GroupByCategoryArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyCategoryArgs: ["data", "where"],
    UpdateOneCategoryArgs: ["data", "where"],
    UpsertOneCategoryArgs: ["where", "create", "update"],
    AggregateTagArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyTagArgs: ["data"],
    CreateOneTagArgs: ["data"],
    DeleteManyTagArgs: ["where"],
    DeleteOneTagArgs: ["where"],
    FindFirstTagArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstTagOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyTagArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueTagArgs: ["where"],
    FindUniqueTagOrThrowArgs: ["where"],
    GroupByTagArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyTagArgs: ["data", "where"],
    UpdateOneTagArgs: ["data", "where"],
    UpsertOneTagArgs: ["where", "create", "update"],
    AggregateTransactionArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyTransactionArgs: ["data"],
    CreateOneTransactionArgs: ["data"],
    DeleteManyTransactionArgs: ["where"],
    DeleteOneTransactionArgs: ["where"],
    FindFirstTransactionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstTransactionOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyTransactionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueTransactionArgs: ["where"],
    FindUniqueTransactionOrThrowArgs: ["where"],
    GroupByTransactionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyTransactionArgs: ["data", "where"],
    UpdateOneTransactionArgs: ["data", "where"],
    UpsertOneTransactionArgs: ["where", "create", "update"],
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyUserArgs: ["data"],
    CreateOneUserArgs: ["data"],
    DeleteManyUserArgs: ["where"],
    DeleteOneUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueUserArgs: ["where"],
    FindUniqueUserOrThrowArgs: ["where"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyUserArgs: ["data", "where"],
    UpdateOneUserArgs: ["data", "where"],
    UpsertOneUserArgs: ["where", "create", "update"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    const mutationOperationPrefixes = [
        "createOne", "createMany", "createManyAndReturn", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
    ];
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        const allActionsDecorators = resolverActionsConfig._all;
        const resolverActionNames = crudResolversInfo[modelName];
        for (const resolverActionName of resolverActionNames) {
            const maybeDecoratorsOrFn = resolverActionsConfig[resolverActionName];
            const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
            const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
            const mainDecorators = [
                ...allActionsDecorators ?? [],
                ...operationKindDecorators ?? [],
            ];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(mainDecorators);
            }
            else {
                decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
            }
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
const relationResolversMap = {
    Account: relationResolvers.AccountRelationsResolver,
    Budget: relationResolvers.BudgetRelationsResolver,
    Category: relationResolvers.CategoryRelationsResolver,
    Tag: relationResolvers.TagRelationsResolver,
    Transaction: relationResolvers.TransactionRelationsResolver,
    User: relationResolvers.UserRelationsResolver
};
const relationResolversInfo = {
    Account: ["user", "transactions"],
    Budget: ["user", "category"],
    Category: ["parentCategory", "subcategories", "transactions", "Budget"],
    Tag: ["transactions"],
    Transaction: ["account", "user", "category", "tags"],
    User: ["accounts", "transactions", "budgets"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        const allActionsDecorators = relationResolverActionsConfig._all ?? [];
        const relationResolverActionNames = relationResolversInfo[modelName];
        for (const relationResolverActionName of relationResolverActionNames) {
            const maybeDecoratorsOrFn = relationResolverActionsConfig[relationResolverActionName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allActionsDecorators);
            }
            else {
                decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
            }
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        const allFieldsDecorators = enhanceConfig.fields._all ?? [];
        for (const typeFieldName of typeFieldNames) {
            const maybeDecoratorsOrFn = enhanceConfig.fields[typeFieldName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allFieldsDecorators);
            }
            else {
                decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
            }
            tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    Account: ["id", "userId", "name", "type", "currency", "createdAt", "updatedAt"],
    Budget: ["id", "userId", "categoryId", "periodStart", "periodEnd", "limit", "createdAt", "updatedAt"],
    Category: ["id", "name", "icon", "color", "parentCategoryId"],
    Tag: ["id", "name", "transactionIds"],
    Transaction: ["id", "accountId", "userId", "amount", "currency", "type", "description", "notes", "customIcon", "date", "recurrence", "categoryId", "createdAt", "updatedAt", "tagIds"],
    User: ["id", "email", "name", "password", "createdAt", "updatedAt"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
const outputsInfo = {
    AggregateAccount: ["_count", "_min", "_max"],
    AccountGroupBy: ["id", "userId", "name", "type", "currency", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AggregateBudget: ["_count", "_avg", "_sum", "_min", "_max"],
    BudgetGroupBy: ["id", "userId", "categoryId", "periodStart", "periodEnd", "limit", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateCategory: ["_count", "_min", "_max"],
    CategoryGroupBy: ["id", "name", "icon", "color", "parentCategoryId", "_count", "_min", "_max"],
    AggregateTag: ["_count", "_min", "_max"],
    TagGroupBy: ["id", "name", "transactionIds", "_count", "_min", "_max"],
    AggregateTransaction: ["_count", "_avg", "_sum", "_min", "_max"],
    TransactionGroupBy: ["id", "accountId", "userId", "amount", "currency", "type", "description", "notes", "customIcon", "date", "recurrence", "categoryId", "createdAt", "updatedAt", "tagIds", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateUser: ["_count", "_min", "_max"],
    UserGroupBy: ["id", "email", "name", "password", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    AccountCount: ["transactions"],
    AccountCountAggregate: ["id", "userId", "name", "type", "currency", "createdAt", "updatedAt", "_all"],
    AccountMinAggregate: ["id", "userId", "name", "type", "currency", "createdAt", "updatedAt"],
    AccountMaxAggregate: ["id", "userId", "name", "type", "currency", "createdAt", "updatedAt"],
    BudgetCountAggregate: ["id", "userId", "categoryId", "periodStart", "periodEnd", "limit", "createdAt", "updatedAt", "_all"],
    BudgetAvgAggregate: ["limit"],
    BudgetSumAggregate: ["limit"],
    BudgetMinAggregate: ["id", "userId", "categoryId", "periodStart", "periodEnd", "limit", "createdAt", "updatedAt"],
    BudgetMaxAggregate: ["id", "userId", "categoryId", "periodStart", "periodEnd", "limit", "createdAt", "updatedAt"],
    CategoryCount: ["subcategories", "transactions", "Budget"],
    CategoryCountAggregate: ["id", "name", "icon", "color", "parentCategoryId", "_all"],
    CategoryMinAggregate: ["id", "name", "icon", "color", "parentCategoryId"],
    CategoryMaxAggregate: ["id", "name", "icon", "color", "parentCategoryId"],
    TagCount: ["transactions"],
    TagCountAggregate: ["id", "name", "transactionIds", "_all"],
    TagMinAggregate: ["id", "name"],
    TagMaxAggregate: ["id", "name"],
    TransactionCount: ["tags"],
    TransactionCountAggregate: ["id", "accountId", "userId", "amount", "currency", "type", "description", "notes", "customIcon", "date", "recurrence", "categoryId", "createdAt", "updatedAt", "tagIds", "_all"],
    TransactionAvgAggregate: ["amount"],
    TransactionSumAggregate: ["amount"],
    TransactionMinAggregate: ["id", "accountId", "userId", "amount", "currency", "type", "description", "notes", "customIcon", "date", "recurrence", "categoryId", "createdAt", "updatedAt"],
    TransactionMaxAggregate: ["id", "accountId", "userId", "amount", "currency", "type", "description", "notes", "customIcon", "date", "recurrence", "categoryId", "createdAt", "updatedAt"],
    UserCount: ["accounts", "transactions", "budgets"],
    UserCountAggregate: ["id", "email", "name", "password", "createdAt", "updatedAt", "_all"],
    UserMinAggregate: ["id", "email", "name", "password", "createdAt", "updatedAt"],
    UserMaxAggregate: ["id", "email", "name", "password", "createdAt", "updatedAt"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
const inputsInfo = {
    AccountWhereInput: ["AND", "OR", "NOT", "id", "userId", "name", "type", "currency", "createdAt", "updatedAt", "user", "transactions"],
    AccountOrderByWithRelationInput: ["id", "userId", "name", "type", "currency", "createdAt", "updatedAt", "user", "transactions"],
    AccountWhereUniqueInput: ["id", "AND", "OR", "NOT", "userId", "name", "type", "currency", "createdAt", "updatedAt", "user", "transactions"],
    AccountOrderByWithAggregationInput: ["id", "userId", "name", "type", "currency", "createdAt", "updatedAt", "_count", "_max", "_min"],
    AccountScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "name", "type", "currency", "createdAt", "updatedAt"],
    BudgetWhereInput: ["AND", "OR", "NOT", "id", "userId", "categoryId", "periodStart", "periodEnd", "limit", "createdAt", "updatedAt", "user", "category"],
    BudgetOrderByWithRelationInput: ["id", "userId", "categoryId", "periodStart", "periodEnd", "limit", "createdAt", "updatedAt", "user", "category"],
    BudgetWhereUniqueInput: ["id", "AND", "OR", "NOT", "userId", "categoryId", "periodStart", "periodEnd", "limit", "createdAt", "updatedAt", "user", "category"],
    BudgetOrderByWithAggregationInput: ["id", "userId", "categoryId", "periodStart", "periodEnd", "limit", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
    BudgetScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "categoryId", "periodStart", "periodEnd", "limit", "createdAt", "updatedAt"],
    CategoryWhereInput: ["AND", "OR", "NOT", "id", "name", "icon", "color", "parentCategoryId", "parentCategory", "subcategories", "transactions", "Budget"],
    CategoryOrderByWithRelationInput: ["id", "name", "icon", "color", "parentCategoryId", "parentCategory", "subcategories", "transactions", "Budget"],
    CategoryWhereUniqueInput: ["id", "AND", "OR", "NOT", "name", "icon", "color", "parentCategoryId", "parentCategory", "subcategories", "transactions", "Budget"],
    CategoryOrderByWithAggregationInput: ["id", "name", "icon", "color", "parentCategoryId", "_count", "_max", "_min"],
    CategoryScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "icon", "color", "parentCategoryId"],
    TagWhereInput: ["AND", "OR", "NOT", "id", "name", "transactionIds", "transactions"],
    TagOrderByWithRelationInput: ["id", "name", "transactionIds", "transactions"],
    TagWhereUniqueInput: ["id", "AND", "OR", "NOT", "name", "transactionIds", "transactions"],
    TagOrderByWithAggregationInput: ["id", "name", "transactionIds", "_count", "_max", "_min"],
    TagScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "transactionIds"],
    TransactionWhereInput: ["AND", "OR", "NOT", "id", "accountId", "userId", "amount", "currency", "type", "description", "notes", "customIcon", "date", "recurrence", "categoryId", "createdAt", "updatedAt", "tagIds", "account", "user", "category", "tags"],
    TransactionOrderByWithRelationInput: ["id", "accountId", "userId", "amount", "currency", "type", "description", "notes", "customIcon", "date", "recurrence", "categoryId", "createdAt", "updatedAt", "tagIds", "account", "user", "category", "tags"],
    TransactionWhereUniqueInput: ["id", "AND", "OR", "NOT", "accountId", "userId", "amount", "currency", "type", "description", "notes", "customIcon", "date", "recurrence", "categoryId", "createdAt", "updatedAt", "tagIds", "account", "user", "category", "tags"],
    TransactionOrderByWithAggregationInput: ["id", "accountId", "userId", "amount", "currency", "type", "description", "notes", "customIcon", "date", "recurrence", "categoryId", "createdAt", "updatedAt", "tagIds", "_count", "_avg", "_max", "_min", "_sum"],
    TransactionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "accountId", "userId", "amount", "currency", "type", "description", "notes", "customIcon", "date", "recurrence", "categoryId", "createdAt", "updatedAt", "tagIds"],
    UserWhereInput: ["AND", "OR", "NOT", "id", "email", "name", "password", "createdAt", "updatedAt", "accounts", "transactions", "budgets"],
    UserOrderByWithRelationInput: ["id", "email", "name", "password", "createdAt", "updatedAt", "accounts", "transactions", "budgets"],
    UserWhereUniqueInput: ["id", "email", "AND", "OR", "NOT", "name", "password", "createdAt", "updatedAt", "accounts", "transactions", "budgets"],
    UserOrderByWithAggregationInput: ["id", "email", "name", "password", "createdAt", "updatedAt", "_count", "_max", "_min"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "name", "password", "createdAt", "updatedAt"],
    AccountCreateInput: ["id", "name", "type", "currency", "createdAt", "updatedAt", "user", "transactions"],
    AccountUpdateInput: ["name", "type", "currency", "createdAt", "updatedAt", "user", "transactions"],
    AccountCreateManyInput: ["id", "userId", "name", "type", "currency", "createdAt", "updatedAt"],
    AccountUpdateManyMutationInput: ["name", "type", "currency", "createdAt", "updatedAt"],
    BudgetCreateInput: ["id", "periodStart", "periodEnd", "limit", "createdAt", "updatedAt", "user", "category"],
    BudgetUpdateInput: ["periodStart", "periodEnd", "limit", "createdAt", "updatedAt", "user", "category"],
    BudgetCreateManyInput: ["id", "userId", "categoryId", "periodStart", "periodEnd", "limit", "createdAt", "updatedAt"],
    BudgetUpdateManyMutationInput: ["periodStart", "periodEnd", "limit", "createdAt", "updatedAt"],
    CategoryCreateInput: ["id", "name", "icon", "color", "parentCategory", "subcategories", "transactions", "Budget"],
    CategoryUpdateInput: ["name", "icon", "color", "parentCategory", "subcategories", "transactions", "Budget"],
    CategoryCreateManyInput: ["id", "name", "icon", "color", "parentCategoryId"],
    CategoryUpdateManyMutationInput: ["name", "icon", "color"],
    TagCreateInput: ["id", "name", "transactions"],
    TagUpdateInput: ["name", "transactions"],
    TagCreateManyInput: ["id", "name", "transactionIds"],
    TagUpdateManyMutationInput: ["name"],
    TransactionCreateInput: ["id", "amount", "currency", "type", "description", "notes", "customIcon", "date", "recurrence", "createdAt", "updatedAt", "account", "user", "category", "tags"],
    TransactionUpdateInput: ["amount", "currency", "type", "description", "notes", "customIcon", "date", "recurrence", "createdAt", "updatedAt", "account", "user", "category", "tags"],
    TransactionCreateManyInput: ["id", "accountId", "userId", "amount", "currency", "type", "description", "notes", "customIcon", "date", "recurrence", "categoryId", "createdAt", "updatedAt", "tagIds"],
    TransactionUpdateManyMutationInput: ["amount", "currency", "type", "description", "notes", "customIcon", "date", "recurrence", "createdAt", "updatedAt"],
    UserCreateInput: ["id", "email", "name", "password", "createdAt", "updatedAt", "accounts", "transactions", "budgets"],
    UserUpdateInput: ["email", "name", "password", "createdAt", "updatedAt", "accounts", "transactions", "budgets"],
    UserCreateManyInput: ["id", "email", "name", "password", "createdAt", "updatedAt"],
    UserUpdateManyMutationInput: ["email", "name", "password", "createdAt", "updatedAt"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    EnumAccountTypeFilter: ["equals", "in", "notIn", "not"],
    EnumCurrencyFilter: ["equals", "in", "notIn", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    UserRelationFilter: ["is", "isNot"],
    TransactionListRelationFilter: ["every", "some", "none"],
    TransactionOrderByRelationAggregateInput: ["_count"],
    AccountCountOrderByAggregateInput: ["id", "userId", "name", "type", "currency", "createdAt", "updatedAt"],
    AccountMaxOrderByAggregateInput: ["id", "userId", "name", "type", "currency", "createdAt", "updatedAt"],
    AccountMinOrderByAggregateInput: ["id", "userId", "name", "type", "currency", "createdAt", "updatedAt"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    EnumAccountTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    EnumCurrencyWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    CategoryRelationFilter: ["is", "isNot"],
    BudgetCountOrderByAggregateInput: ["id", "userId", "categoryId", "periodStart", "periodEnd", "limit", "createdAt", "updatedAt"],
    BudgetAvgOrderByAggregateInput: ["limit"],
    BudgetMaxOrderByAggregateInput: ["id", "userId", "categoryId", "periodStart", "periodEnd", "limit", "createdAt", "updatedAt"],
    BudgetMinOrderByAggregateInput: ["id", "userId", "categoryId", "periodStart", "periodEnd", "limit", "createdAt", "updatedAt"],
    BudgetSumOrderByAggregateInput: ["limit"],
    FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "isSet"],
    CategoryNullableRelationFilter: ["is", "isNot"],
    CategoryListRelationFilter: ["every", "some", "none"],
    BudgetListRelationFilter: ["every", "some", "none"],
    CategoryOrderByRelationAggregateInput: ["_count"],
    BudgetOrderByRelationAggregateInput: ["_count"],
    CategoryCountOrderByAggregateInput: ["id", "name", "icon", "color", "parentCategoryId"],
    CategoryMaxOrderByAggregateInput: ["id", "name", "icon", "color", "parentCategoryId"],
    CategoryMinOrderByAggregateInput: ["id", "name", "icon", "color", "parentCategoryId"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max", "isSet"],
    StringNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
    TagCountOrderByAggregateInput: ["id", "name", "transactionIds"],
    TagMaxOrderByAggregateInput: ["id", "name"],
    TagMinOrderByAggregateInput: ["id", "name"],
    EnumTransactionTypeFilter: ["equals", "in", "notIn", "not"],
    EnumRecurrenceTypeFilter: ["equals", "in", "notIn", "not"],
    AccountRelationFilter: ["is", "isNot"],
    TagListRelationFilter: ["every", "some", "none"],
    TagOrderByRelationAggregateInput: ["_count"],
    TransactionCountOrderByAggregateInput: ["id", "accountId", "userId", "amount", "currency", "type", "description", "notes", "customIcon", "date", "recurrence", "categoryId", "createdAt", "updatedAt", "tagIds"],
    TransactionAvgOrderByAggregateInput: ["amount"],
    TransactionMaxOrderByAggregateInput: ["id", "accountId", "userId", "amount", "currency", "type", "description", "notes", "customIcon", "date", "recurrence", "categoryId", "createdAt", "updatedAt"],
    TransactionMinOrderByAggregateInput: ["id", "accountId", "userId", "amount", "currency", "type", "description", "notes", "customIcon", "date", "recurrence", "categoryId", "createdAt", "updatedAt"],
    TransactionSumOrderByAggregateInput: ["amount"],
    EnumTransactionTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    EnumRecurrenceTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    AccountListRelationFilter: ["every", "some", "none"],
    AccountOrderByRelationAggregateInput: ["_count"],
    UserCountOrderByAggregateInput: ["id", "email", "name", "password", "createdAt", "updatedAt"],
    UserMaxOrderByAggregateInput: ["id", "email", "name", "password", "createdAt", "updatedAt"],
    UserMinOrderByAggregateInput: ["id", "email", "name", "password", "createdAt", "updatedAt"],
    UserCreateNestedOneWithoutAccountsInput: ["create", "connectOrCreate", "connect"],
    TransactionCreateNestedManyWithoutAccountInput: ["create", "connectOrCreate", "createMany", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    EnumAccountTypeFieldUpdateOperationsInput: ["set"],
    EnumCurrencyFieldUpdateOperationsInput: ["set"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    UserUpdateOneRequiredWithoutAccountsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    TransactionUpdateManyWithoutAccountNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    UserCreateNestedOneWithoutBudgetsInput: ["create", "connectOrCreate", "connect"],
    CategoryCreateNestedOneWithoutBudgetInput: ["create", "connectOrCreate", "connect"],
    FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    UserUpdateOneRequiredWithoutBudgetsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    CategoryUpdateOneRequiredWithoutBudgetNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    CategoryCreateNestedOneWithoutSubcategoriesInput: ["create", "connectOrCreate", "connect"],
    CategoryCreateNestedManyWithoutParentCategoryInput: ["create", "connectOrCreate", "createMany", "connect"],
    TransactionCreateNestedManyWithoutCategoryInput: ["create", "connectOrCreate", "createMany", "connect"],
    BudgetCreateNestedManyWithoutCategoryInput: ["create", "connectOrCreate", "createMany", "connect"],
    NullableStringFieldUpdateOperationsInput: ["set", "unset"],
    CategoryUpdateOneWithoutSubcategoriesNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    CategoryUpdateManyWithoutParentCategoryNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    TransactionUpdateManyWithoutCategoryNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    BudgetUpdateManyWithoutCategoryNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    TransactionCreateNestedManyWithoutTagsInput: ["create", "connectOrCreate", "connect"],
    TagCreatetransactionIdsInput: ["set"],
    TransactionUpdateManyWithoutTagsNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    TagUpdatetransactionIdsInput: ["set", "push"],
    AccountCreateNestedOneWithoutTransactionsInput: ["create", "connectOrCreate", "connect"],
    UserCreateNestedOneWithoutTransactionsInput: ["create", "connectOrCreate", "connect"],
    CategoryCreateNestedOneWithoutTransactionsInput: ["create", "connectOrCreate", "connect"],
    TagCreateNestedManyWithoutTransactionsInput: ["create", "connectOrCreate", "connect"],
    TransactionCreatetagIdsInput: ["set"],
    EnumTransactionTypeFieldUpdateOperationsInput: ["set"],
    EnumRecurrenceTypeFieldUpdateOperationsInput: ["set"],
    AccountUpdateOneRequiredWithoutTransactionsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserUpdateOneRequiredWithoutTransactionsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    CategoryUpdateOneWithoutTransactionsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    TagUpdateManyWithoutTransactionsNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    TransactionUpdatetagIdsInput: ["set", "push"],
    AccountCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    TransactionCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    BudgetCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    AccountUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    TransactionUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    BudgetUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedEnumAccountTypeFilter: ["equals", "in", "notIn", "not"],
    NestedEnumCurrencyFilter: ["equals", "in", "notIn", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedEnumAccountTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedEnumCurrencyWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "isSet"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max", "isSet"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "isSet"],
    NestedEnumTransactionTypeFilter: ["equals", "in", "notIn", "not"],
    NestedEnumRecurrenceTypeFilter: ["equals", "in", "notIn", "not"],
    NestedEnumTransactionTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedEnumRecurrenceTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    UserCreateWithoutAccountsInput: ["id", "email", "name", "password", "createdAt", "updatedAt", "transactions", "budgets"],
    UserCreateOrConnectWithoutAccountsInput: ["where", "create"],
    TransactionCreateWithoutAccountInput: ["id", "amount", "currency", "type", "description", "notes", "customIcon", "date", "recurrence", "createdAt", "updatedAt", "user", "category", "tags"],
    TransactionCreateOrConnectWithoutAccountInput: ["where", "create"],
    TransactionCreateManyAccountInputEnvelope: ["data"],
    UserUpsertWithoutAccountsInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutAccountsInput: ["where", "data"],
    UserUpdateWithoutAccountsInput: ["email", "name", "password", "createdAt", "updatedAt", "transactions", "budgets"],
    TransactionUpsertWithWhereUniqueWithoutAccountInput: ["where", "update", "create"],
    TransactionUpdateWithWhereUniqueWithoutAccountInput: ["where", "data"],
    TransactionUpdateManyWithWhereWithoutAccountInput: ["where", "data"],
    TransactionScalarWhereInput: ["AND", "OR", "NOT", "id", "accountId", "userId", "amount", "currency", "type", "description", "notes", "customIcon", "date", "recurrence", "categoryId", "createdAt", "updatedAt", "tagIds"],
    UserCreateWithoutBudgetsInput: ["id", "email", "name", "password", "createdAt", "updatedAt", "accounts", "transactions"],
    UserCreateOrConnectWithoutBudgetsInput: ["where", "create"],
    CategoryCreateWithoutBudgetInput: ["id", "name", "icon", "color", "parentCategory", "subcategories", "transactions"],
    CategoryCreateOrConnectWithoutBudgetInput: ["where", "create"],
    UserUpsertWithoutBudgetsInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutBudgetsInput: ["where", "data"],
    UserUpdateWithoutBudgetsInput: ["email", "name", "password", "createdAt", "updatedAt", "accounts", "transactions"],
    CategoryUpsertWithoutBudgetInput: ["update", "create", "where"],
    CategoryUpdateToOneWithWhereWithoutBudgetInput: ["where", "data"],
    CategoryUpdateWithoutBudgetInput: ["name", "icon", "color", "parentCategory", "subcategories", "transactions"],
    CategoryCreateWithoutSubcategoriesInput: ["id", "name", "icon", "color", "parentCategory", "transactions", "Budget"],
    CategoryCreateOrConnectWithoutSubcategoriesInput: ["where", "create"],
    CategoryCreateWithoutParentCategoryInput: ["id", "name", "icon", "color", "subcategories", "transactions", "Budget"],
    CategoryCreateOrConnectWithoutParentCategoryInput: ["where", "create"],
    CategoryCreateManyParentCategoryInputEnvelope: ["data"],
    TransactionCreateWithoutCategoryInput: ["id", "amount", "currency", "type", "description", "notes", "customIcon", "date", "recurrence", "createdAt", "updatedAt", "account", "user", "tags"],
    TransactionCreateOrConnectWithoutCategoryInput: ["where", "create"],
    TransactionCreateManyCategoryInputEnvelope: ["data"],
    BudgetCreateWithoutCategoryInput: ["id", "periodStart", "periodEnd", "limit", "createdAt", "updatedAt", "user"],
    BudgetCreateOrConnectWithoutCategoryInput: ["where", "create"],
    BudgetCreateManyCategoryInputEnvelope: ["data"],
    CategoryUpsertWithoutSubcategoriesInput: ["update", "create", "where"],
    CategoryUpdateToOneWithWhereWithoutSubcategoriesInput: ["where", "data"],
    CategoryUpdateWithoutSubcategoriesInput: ["name", "icon", "color", "parentCategory", "transactions", "Budget"],
    CategoryUpsertWithWhereUniqueWithoutParentCategoryInput: ["where", "update", "create"],
    CategoryUpdateWithWhereUniqueWithoutParentCategoryInput: ["where", "data"],
    CategoryUpdateManyWithWhereWithoutParentCategoryInput: ["where", "data"],
    CategoryScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "icon", "color", "parentCategoryId"],
    TransactionUpsertWithWhereUniqueWithoutCategoryInput: ["where", "update", "create"],
    TransactionUpdateWithWhereUniqueWithoutCategoryInput: ["where", "data"],
    TransactionUpdateManyWithWhereWithoutCategoryInput: ["where", "data"],
    BudgetUpsertWithWhereUniqueWithoutCategoryInput: ["where", "update", "create"],
    BudgetUpdateWithWhereUniqueWithoutCategoryInput: ["where", "data"],
    BudgetUpdateManyWithWhereWithoutCategoryInput: ["where", "data"],
    BudgetScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "categoryId", "periodStart", "periodEnd", "limit", "createdAt", "updatedAt"],
    TransactionCreateWithoutTagsInput: ["id", "amount", "currency", "type", "description", "notes", "customIcon", "date", "recurrence", "createdAt", "updatedAt", "account", "user", "category"],
    TransactionCreateOrConnectWithoutTagsInput: ["where", "create"],
    TransactionUpsertWithWhereUniqueWithoutTagsInput: ["where", "update", "create"],
    TransactionUpdateWithWhereUniqueWithoutTagsInput: ["where", "data"],
    TransactionUpdateManyWithWhereWithoutTagsInput: ["where", "data"],
    AccountCreateWithoutTransactionsInput: ["id", "name", "type", "currency", "createdAt", "updatedAt", "user"],
    AccountCreateOrConnectWithoutTransactionsInput: ["where", "create"],
    UserCreateWithoutTransactionsInput: ["id", "email", "name", "password", "createdAt", "updatedAt", "accounts", "budgets"],
    UserCreateOrConnectWithoutTransactionsInput: ["where", "create"],
    CategoryCreateWithoutTransactionsInput: ["id", "name", "icon", "color", "parentCategory", "subcategories", "Budget"],
    CategoryCreateOrConnectWithoutTransactionsInput: ["where", "create"],
    TagCreateWithoutTransactionsInput: ["id", "name"],
    TagCreateOrConnectWithoutTransactionsInput: ["where", "create"],
    AccountUpsertWithoutTransactionsInput: ["update", "create", "where"],
    AccountUpdateToOneWithWhereWithoutTransactionsInput: ["where", "data"],
    AccountUpdateWithoutTransactionsInput: ["name", "type", "currency", "createdAt", "updatedAt", "user"],
    UserUpsertWithoutTransactionsInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutTransactionsInput: ["where", "data"],
    UserUpdateWithoutTransactionsInput: ["email", "name", "password", "createdAt", "updatedAt", "accounts", "budgets"],
    CategoryUpsertWithoutTransactionsInput: ["update", "create", "where"],
    CategoryUpdateToOneWithWhereWithoutTransactionsInput: ["where", "data"],
    CategoryUpdateWithoutTransactionsInput: ["name", "icon", "color", "parentCategory", "subcategories", "Budget"],
    TagUpsertWithWhereUniqueWithoutTransactionsInput: ["where", "update", "create"],
    TagUpdateWithWhereUniqueWithoutTransactionsInput: ["where", "data"],
    TagUpdateManyWithWhereWithoutTransactionsInput: ["where", "data"],
    TagScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "transactionIds"],
    AccountCreateWithoutUserInput: ["id", "name", "type", "currency", "createdAt", "updatedAt", "transactions"],
    AccountCreateOrConnectWithoutUserInput: ["where", "create"],
    AccountCreateManyUserInputEnvelope: ["data"],
    TransactionCreateWithoutUserInput: ["id", "amount", "currency", "type", "description", "notes", "customIcon", "date", "recurrence", "createdAt", "updatedAt", "account", "category", "tags"],
    TransactionCreateOrConnectWithoutUserInput: ["where", "create"],
    TransactionCreateManyUserInputEnvelope: ["data"],
    BudgetCreateWithoutUserInput: ["id", "periodStart", "periodEnd", "limit", "createdAt", "updatedAt", "category"],
    BudgetCreateOrConnectWithoutUserInput: ["where", "create"],
    BudgetCreateManyUserInputEnvelope: ["data"],
    AccountUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    AccountUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    AccountUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    AccountScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "name", "type", "currency", "createdAt", "updatedAt"],
    TransactionUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    TransactionUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    TransactionUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    BudgetUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    BudgetUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    BudgetUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    TransactionCreateManyAccountInput: ["id", "userId", "amount", "currency", "type", "description", "notes", "customIcon", "date", "recurrence", "categoryId", "createdAt", "updatedAt", "tagIds"],
    TransactionUpdateWithoutAccountInput: ["amount", "currency", "type", "description", "notes", "customIcon", "date", "recurrence", "createdAt", "updatedAt", "user", "category", "tags"],
    CategoryCreateManyParentCategoryInput: ["id", "name", "icon", "color"],
    TransactionCreateManyCategoryInput: ["id", "accountId", "userId", "amount", "currency", "type", "description", "notes", "customIcon", "date", "recurrence", "createdAt", "updatedAt", "tagIds"],
    BudgetCreateManyCategoryInput: ["id", "userId", "periodStart", "periodEnd", "limit", "createdAt", "updatedAt"],
    CategoryUpdateWithoutParentCategoryInput: ["name", "icon", "color", "subcategories", "transactions", "Budget"],
    TransactionUpdateWithoutCategoryInput: ["amount", "currency", "type", "description", "notes", "customIcon", "date", "recurrence", "createdAt", "updatedAt", "account", "user", "tags"],
    BudgetUpdateWithoutCategoryInput: ["periodStart", "periodEnd", "limit", "createdAt", "updatedAt", "user"],
    TransactionUpdateWithoutTagsInput: ["amount", "currency", "type", "description", "notes", "customIcon", "date", "recurrence", "createdAt", "updatedAt", "account", "user", "category"],
    TagUpdateWithoutTransactionsInput: ["name"],
    AccountCreateManyUserInput: ["id", "name", "type", "currency", "createdAt", "updatedAt"],
    TransactionCreateManyUserInput: ["id", "accountId", "amount", "currency", "type", "description", "notes", "customIcon", "date", "recurrence", "categoryId", "createdAt", "updatedAt", "tagIds"],
    BudgetCreateManyUserInput: ["id", "categoryId", "periodStart", "periodEnd", "limit", "createdAt", "updatedAt"],
    AccountUpdateWithoutUserInput: ["name", "type", "currency", "createdAt", "updatedAt", "transactions"],
    TransactionUpdateWithoutUserInput: ["amount", "currency", "type", "description", "notes", "customIcon", "date", "recurrence", "createdAt", "updatedAt", "account", "category", "tags"],
    BudgetUpdateWithoutUserInput: ["periodStart", "periodEnd", "limit", "createdAt", "updatedAt", "category"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
