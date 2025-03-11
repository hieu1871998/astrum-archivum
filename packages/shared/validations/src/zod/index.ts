import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const AccountScalarFieldEnumSchema = z.enum(['id','userId','name','type','currency','createdAt','updatedAt']);

export const BudgetScalarFieldEnumSchema = z.enum(['id','userId','categoryId','periodStart','periodEnd','limit','createdAt','updatedAt']);

export const CategoryScalarFieldEnumSchema = z.enum(['id','name','icon','color','parentCategoryId']);

export const TagScalarFieldEnumSchema = z.enum(['id','name','transactionIds']);

export const TransactionScalarFieldEnumSchema = z.enum(['id','accountId','userId','amount','currency','type','description','notes','customIcon','date','recurrence','categoryId','createdAt','updatedAt','tagIds']);

export const UserScalarFieldEnumSchema = z.enum(['id','email','name','password','createdAt','updatedAt']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const AccountTypeSchema = z.enum(['BANK','CREDIT','WALLET']);

export type AccountTypeType = `${z.infer<typeof AccountTypeSchema>}`

export const CurrencySchema = z.enum(['VND','USD']);

export type CurrencyType = `${z.infer<typeof CurrencySchema>}`

export const TransactionTypeSchema = z.enum(['INCOME','EXPENSE','TRANSFER']);

export type TransactionTypeType = `${z.infer<typeof TransactionTypeSchema>}`

export const RecurrenceTypeSchema = z.enum(['OFF','REPEAT','INSTALLMENT']);

export type RecurrenceTypeType = `${z.infer<typeof RecurrenceTypeSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// ACCOUNT SCHEMA
/////////////////////////////////////////

export const AccountSchema = z.object({
  type: AccountTypeSchema,
  currency: CurrencySchema,
  id: z.string(),
  userId: z.string(),
  name: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Account = z.infer<typeof AccountSchema>

/////////////////////////////////////////
// BUDGET SCHEMA
/////////////////////////////////////////

export const BudgetSchema = z.object({
  id: z.string(),
  userId: z.string(),
  categoryId: z.string(),
  periodStart: z.coerce.date(),
  periodEnd: z.coerce.date(),
  limit: z.number(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Budget = z.infer<typeof BudgetSchema>

/////////////////////////////////////////
// CATEGORY SCHEMA
/////////////////////////////////////////

export const CategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string().nullable(),
  color: z.string().nullable(),
  parentCategoryId: z.string().nullable(),
})

export type Category = z.infer<typeof CategorySchema>

/////////////////////////////////////////
// TAG SCHEMA
/////////////////////////////////////////

export const TagSchema = z.object({
  id: z.string(),
  name: z.string(),
  transactionIds: z.string().array(),
})

export type Tag = z.infer<typeof TagSchema>

/////////////////////////////////////////
// TRANSACTION SCHEMA
/////////////////////////////////////////

export const TransactionSchema = z.object({
  currency: CurrencySchema,
  type: TransactionTypeSchema,
  recurrence: RecurrenceTypeSchema,
  id: z.string(),
  accountId: z.string(),
  userId: z.string(),
  amount: z.number(),
  description: z.string().nullable(),
  notes: z.string().nullable(),
  customIcon: z.string().nullable(),
  date: z.coerce.date(),
  categoryId: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  tagIds: z.string().array(),
})

export type Transaction = z.infer<typeof TransactionSchema>

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string().nullable(),
  password: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// ACCOUNT
//------------------------------------------------------

export const AccountIncludeSchema: z.ZodType<Prisma.AccountInclude> = z.object({
}).strict()

export const AccountArgsSchema: z.ZodType<Prisma.AccountDefaultArgs> = z.object({
  select: z.lazy(() => AccountSelectSchema).optional(),
  include: z.lazy(() => AccountIncludeSchema).optional(),
}).strict();

export const AccountCountOutputTypeArgsSchema: z.ZodType<Prisma.AccountCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => AccountCountOutputTypeSelectSchema).nullish(),
}).strict();

export const AccountCountOutputTypeSelectSchema: z.ZodType<Prisma.AccountCountOutputTypeSelect> = z.object({
  transactions: z.boolean().optional(),
}).strict();

export const AccountSelectSchema: z.ZodType<Prisma.AccountSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  name: z.boolean().optional(),
  type: z.boolean().optional(),
  currency: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  transactions: z.union([z.boolean(),z.lazy(() => TransactionArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AccountCountOutputTypeArgsSchema)]).optional(),
}).strict()

// BUDGET
//------------------------------------------------------

export const BudgetIncludeSchema: z.ZodType<Prisma.BudgetInclude> = z.object({
}).strict()

export const BudgetArgsSchema: z.ZodType<Prisma.BudgetDefaultArgs> = z.object({
  select: z.lazy(() => BudgetSelectSchema).optional(),
  include: z.lazy(() => BudgetIncludeSchema).optional(),
}).strict();

export const BudgetSelectSchema: z.ZodType<Prisma.BudgetSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  categoryId: z.boolean().optional(),
  periodStart: z.boolean().optional(),
  periodEnd: z.boolean().optional(),
  limit: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  category: z.union([z.boolean(),z.lazy(() => CategoryArgsSchema)]).optional(),
}).strict()

// CATEGORY
//------------------------------------------------------

export const CategoryIncludeSchema: z.ZodType<Prisma.CategoryInclude> = z.object({
}).strict()

export const CategoryArgsSchema: z.ZodType<Prisma.CategoryDefaultArgs> = z.object({
  select: z.lazy(() => CategorySelectSchema).optional(),
  include: z.lazy(() => CategoryIncludeSchema).optional(),
}).strict();

export const CategoryCountOutputTypeArgsSchema: z.ZodType<Prisma.CategoryCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => CategoryCountOutputTypeSelectSchema).nullish(),
}).strict();

export const CategoryCountOutputTypeSelectSchema: z.ZodType<Prisma.CategoryCountOutputTypeSelect> = z.object({
  subcategories: z.boolean().optional(),
  transactions: z.boolean().optional(),
  Budget: z.boolean().optional(),
}).strict();

export const CategorySelectSchema: z.ZodType<Prisma.CategorySelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  icon: z.boolean().optional(),
  color: z.boolean().optional(),
  parentCategoryId: z.boolean().optional(),
  parentCategory: z.union([z.boolean(),z.lazy(() => CategoryArgsSchema)]).optional(),
  subcategories: z.union([z.boolean(),z.lazy(() => CategoryArgsSchema)]).optional(),
  transactions: z.union([z.boolean(),z.lazy(() => TransactionArgsSchema)]).optional(),
  Budget: z.union([z.boolean(),z.lazy(() => BudgetArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

// TAG
//------------------------------------------------------

export const TagIncludeSchema: z.ZodType<Prisma.TagInclude> = z.object({
}).strict()

export const TagArgsSchema: z.ZodType<Prisma.TagDefaultArgs> = z.object({
  select: z.lazy(() => TagSelectSchema).optional(),
  include: z.lazy(() => TagIncludeSchema).optional(),
}).strict();

export const TagCountOutputTypeArgsSchema: z.ZodType<Prisma.TagCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => TagCountOutputTypeSelectSchema).nullish(),
}).strict();

export const TagCountOutputTypeSelectSchema: z.ZodType<Prisma.TagCountOutputTypeSelect> = z.object({
  transactions: z.boolean().optional(),
}).strict();

export const TagSelectSchema: z.ZodType<Prisma.TagSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  transactionIds: z.boolean().optional(),
  transactions: z.union([z.boolean(),z.lazy(() => TransactionArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TagCountOutputTypeArgsSchema)]).optional(),
}).strict()

// TRANSACTION
//------------------------------------------------------

export const TransactionIncludeSchema: z.ZodType<Prisma.TransactionInclude> = z.object({
}).strict()

export const TransactionArgsSchema: z.ZodType<Prisma.TransactionDefaultArgs> = z.object({
  select: z.lazy(() => TransactionSelectSchema).optional(),
  include: z.lazy(() => TransactionIncludeSchema).optional(),
}).strict();

export const TransactionCountOutputTypeArgsSchema: z.ZodType<Prisma.TransactionCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => TransactionCountOutputTypeSelectSchema).nullish(),
}).strict();

export const TransactionCountOutputTypeSelectSchema: z.ZodType<Prisma.TransactionCountOutputTypeSelect> = z.object({
  tags: z.boolean().optional(),
}).strict();

export const TransactionSelectSchema: z.ZodType<Prisma.TransactionSelect> = z.object({
  id: z.boolean().optional(),
  accountId: z.boolean().optional(),
  userId: z.boolean().optional(),
  amount: z.boolean().optional(),
  currency: z.boolean().optional(),
  type: z.boolean().optional(),
  description: z.boolean().optional(),
  notes: z.boolean().optional(),
  customIcon: z.boolean().optional(),
  date: z.boolean().optional(),
  recurrence: z.boolean().optional(),
  categoryId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  tagIds: z.boolean().optional(),
  account: z.union([z.boolean(),z.lazy(() => AccountArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  category: z.union([z.boolean(),z.lazy(() => CategoryArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => TagArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TransactionCountOutputTypeArgsSchema)]).optional(),
}).strict()

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
}).strict()

export const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  accounts: z.boolean().optional(),
  transactions: z.boolean().optional(),
  budgets: z.boolean().optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  name: z.boolean().optional(),
  password: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  accounts: z.union([z.boolean(),z.lazy(() => AccountArgsSchema)]).optional(),
  transactions: z.union([z.boolean(),z.lazy(() => TransactionArgsSchema)]).optional(),
  budgets: z.union([z.boolean(),z.lazy(() => BudgetArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const AccountWhereInputSchema: z.ZodType<Prisma.AccountWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumAccountTypeFilterSchema),z.lazy(() => AccountTypeSchema) ]).optional(),
  currency: z.union([ z.lazy(() => EnumCurrencyFilterSchema),z.lazy(() => CurrencySchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  transactions: z.lazy(() => TransactionListRelationFilterSchema).optional()
}).strict();

export const AccountOrderByWithRelationInputSchema: z.ZodType<Prisma.AccountOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  transactions: z.lazy(() => TransactionOrderByRelationAggregateInputSchema).optional()
}).strict();

export const AccountWhereUniqueInputSchema: z.ZodType<Prisma.AccountWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumAccountTypeFilterSchema),z.lazy(() => AccountTypeSchema) ]).optional(),
  currency: z.union([ z.lazy(() => EnumCurrencyFilterSchema),z.lazy(() => CurrencySchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  transactions: z.lazy(() => TransactionListRelationFilterSchema).optional()
}).strict());

export const AccountOrderByWithAggregationInputSchema: z.ZodType<Prisma.AccountOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AccountCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AccountMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AccountMinOrderByAggregateInputSchema).optional()
}).strict();

export const AccountScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AccountScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AccountScalarWhereWithAggregatesInputSchema),z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountScalarWhereWithAggregatesInputSchema),z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumAccountTypeWithAggregatesFilterSchema),z.lazy(() => AccountTypeSchema) ]).optional(),
  currency: z.union([ z.lazy(() => EnumCurrencyWithAggregatesFilterSchema),z.lazy(() => CurrencySchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const BudgetWhereInputSchema: z.ZodType<Prisma.BudgetWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BudgetWhereInputSchema),z.lazy(() => BudgetWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BudgetWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BudgetWhereInputSchema),z.lazy(() => BudgetWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  categoryId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  periodStart: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  periodEnd: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  limit: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  category: z.union([ z.lazy(() => CategoryRelationFilterSchema),z.lazy(() => CategoryWhereInputSchema) ]).optional(),
}).strict();

export const BudgetOrderByWithRelationInputSchema: z.ZodType<Prisma.BudgetOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  periodStart: z.lazy(() => SortOrderSchema).optional(),
  periodEnd: z.lazy(() => SortOrderSchema).optional(),
  limit: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  category: z.lazy(() => CategoryOrderByWithRelationInputSchema).optional()
}).strict();

export const BudgetWhereUniqueInputSchema: z.ZodType<Prisma.BudgetWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => BudgetWhereInputSchema),z.lazy(() => BudgetWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BudgetWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BudgetWhereInputSchema),z.lazy(() => BudgetWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  categoryId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  periodStart: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  periodEnd: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  limit: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  category: z.union([ z.lazy(() => CategoryRelationFilterSchema),z.lazy(() => CategoryWhereInputSchema) ]).optional(),
}).strict());

export const BudgetOrderByWithAggregationInputSchema: z.ZodType<Prisma.BudgetOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  periodStart: z.lazy(() => SortOrderSchema).optional(),
  periodEnd: z.lazy(() => SortOrderSchema).optional(),
  limit: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BudgetCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => BudgetAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BudgetMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BudgetMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => BudgetSumOrderByAggregateInputSchema).optional()
}).strict();

export const BudgetScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BudgetScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => BudgetScalarWhereWithAggregatesInputSchema),z.lazy(() => BudgetScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BudgetScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BudgetScalarWhereWithAggregatesInputSchema),z.lazy(() => BudgetScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  categoryId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  periodStart: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  periodEnd: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  limit: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const CategoryWhereInputSchema: z.ZodType<Prisma.CategoryWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CategoryWhereInputSchema),z.lazy(() => CategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CategoryWhereInputSchema),z.lazy(() => CategoryWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  icon: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  color: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  parentCategoryId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  parentCategory: z.union([ z.lazy(() => CategoryNullableRelationFilterSchema),z.lazy(() => CategoryWhereInputSchema) ]).optional().nullable(),
  subcategories: z.lazy(() => CategoryListRelationFilterSchema).optional(),
  transactions: z.lazy(() => TransactionListRelationFilterSchema).optional(),
  Budget: z.lazy(() => BudgetListRelationFilterSchema).optional()
}).strict();

export const CategoryOrderByWithRelationInputSchema: z.ZodType<Prisma.CategoryOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  icon: z.lazy(() => SortOrderSchema).optional(),
  color: z.lazy(() => SortOrderSchema).optional(),
  parentCategoryId: z.lazy(() => SortOrderSchema).optional(),
  parentCategory: z.lazy(() => CategoryOrderByWithRelationInputSchema).optional(),
  subcategories: z.lazy(() => CategoryOrderByRelationAggregateInputSchema).optional(),
  transactions: z.lazy(() => TransactionOrderByRelationAggregateInputSchema).optional(),
  Budget: z.lazy(() => BudgetOrderByRelationAggregateInputSchema).optional()
}).strict();

export const CategoryWhereUniqueInputSchema: z.ZodType<Prisma.CategoryWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => CategoryWhereInputSchema),z.lazy(() => CategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CategoryWhereInputSchema),z.lazy(() => CategoryWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  icon: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  color: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  parentCategoryId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  parentCategory: z.union([ z.lazy(() => CategoryNullableRelationFilterSchema),z.lazy(() => CategoryWhereInputSchema) ]).optional().nullable(),
  subcategories: z.lazy(() => CategoryListRelationFilterSchema).optional(),
  transactions: z.lazy(() => TransactionListRelationFilterSchema).optional(),
  Budget: z.lazy(() => BudgetListRelationFilterSchema).optional()
}).strict());

export const CategoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.CategoryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  icon: z.lazy(() => SortOrderSchema).optional(),
  color: z.lazy(() => SortOrderSchema).optional(),
  parentCategoryId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CategoryCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CategoryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CategoryMinOrderByAggregateInputSchema).optional()
}).strict();

export const CategoryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CategoryScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CategoryScalarWhereWithAggregatesInputSchema),z.lazy(() => CategoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CategoryScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CategoryScalarWhereWithAggregatesInputSchema),z.lazy(() => CategoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  icon: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  color: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  parentCategoryId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const TagWhereInputSchema: z.ZodType<Prisma.TagWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TagWhereInputSchema),z.lazy(() => TagWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TagWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TagWhereInputSchema),z.lazy(() => TagWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  transactionIds: z.lazy(() => StringNullableListFilterSchema).optional(),
  transactions: z.lazy(() => TransactionListRelationFilterSchema).optional()
}).strict();

export const TagOrderByWithRelationInputSchema: z.ZodType<Prisma.TagOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  transactionIds: z.lazy(() => SortOrderSchema).optional(),
  transactions: z.lazy(() => TransactionOrderByRelationAggregateInputSchema).optional()
}).strict();

export const TagWhereUniqueInputSchema: z.ZodType<Prisma.TagWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => TagWhereInputSchema),z.lazy(() => TagWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TagWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TagWhereInputSchema),z.lazy(() => TagWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  transactionIds: z.lazy(() => StringNullableListFilterSchema).optional(),
  transactions: z.lazy(() => TransactionListRelationFilterSchema).optional()
}).strict());

export const TagOrderByWithAggregationInputSchema: z.ZodType<Prisma.TagOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  transactionIds: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TagCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TagMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TagMinOrderByAggregateInputSchema).optional()
}).strict();

export const TagScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TagScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TagScalarWhereWithAggregatesInputSchema),z.lazy(() => TagScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TagScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TagScalarWhereWithAggregatesInputSchema),z.lazy(() => TagScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  transactionIds: z.lazy(() => StringNullableListFilterSchema).optional()
}).strict();

export const TransactionWhereInputSchema: z.ZodType<Prisma.TransactionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TransactionWhereInputSchema),z.lazy(() => TransactionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TransactionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TransactionWhereInputSchema),z.lazy(() => TransactionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  accountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  amount: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  currency: z.union([ z.lazy(() => EnumCurrencyFilterSchema),z.lazy(() => CurrencySchema) ]).optional(),
  type: z.union([ z.lazy(() => EnumTransactionTypeFilterSchema),z.lazy(() => TransactionTypeSchema) ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  customIcon: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  recurrence: z.union([ z.lazy(() => EnumRecurrenceTypeFilterSchema),z.lazy(() => RecurrenceTypeSchema) ]).optional(),
  categoryId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  tagIds: z.lazy(() => StringNullableListFilterSchema).optional(),
  account: z.union([ z.lazy(() => AccountRelationFilterSchema),z.lazy(() => AccountWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  category: z.union([ z.lazy(() => CategoryNullableRelationFilterSchema),z.lazy(() => CategoryWhereInputSchema) ]).optional().nullable(),
  tags: z.lazy(() => TagListRelationFilterSchema).optional()
}).strict();

export const TransactionOrderByWithRelationInputSchema: z.ZodType<Prisma.TransactionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  accountId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional(),
  customIcon: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  recurrence: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  tagIds: z.lazy(() => SortOrderSchema).optional(),
  account: z.lazy(() => AccountOrderByWithRelationInputSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  category: z.lazy(() => CategoryOrderByWithRelationInputSchema).optional(),
  tags: z.lazy(() => TagOrderByRelationAggregateInputSchema).optional()
}).strict();

export const TransactionWhereUniqueInputSchema: z.ZodType<Prisma.TransactionWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => TransactionWhereInputSchema),z.lazy(() => TransactionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TransactionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TransactionWhereInputSchema),z.lazy(() => TransactionWhereInputSchema).array() ]).optional(),
  accountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  amount: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  currency: z.union([ z.lazy(() => EnumCurrencyFilterSchema),z.lazy(() => CurrencySchema) ]).optional(),
  type: z.union([ z.lazy(() => EnumTransactionTypeFilterSchema),z.lazy(() => TransactionTypeSchema) ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  customIcon: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  recurrence: z.union([ z.lazy(() => EnumRecurrenceTypeFilterSchema),z.lazy(() => RecurrenceTypeSchema) ]).optional(),
  categoryId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  tagIds: z.lazy(() => StringNullableListFilterSchema).optional(),
  account: z.union([ z.lazy(() => AccountRelationFilterSchema),z.lazy(() => AccountWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  category: z.union([ z.lazy(() => CategoryNullableRelationFilterSchema),z.lazy(() => CategoryWhereInputSchema) ]).optional().nullable(),
  tags: z.lazy(() => TagListRelationFilterSchema).optional()
}).strict());

export const TransactionOrderByWithAggregationInputSchema: z.ZodType<Prisma.TransactionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  accountId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional(),
  customIcon: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  recurrence: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  tagIds: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TransactionCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TransactionAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TransactionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TransactionMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TransactionSumOrderByAggregateInputSchema).optional()
}).strict();

export const TransactionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TransactionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TransactionScalarWhereWithAggregatesInputSchema),z.lazy(() => TransactionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TransactionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TransactionScalarWhereWithAggregatesInputSchema),z.lazy(() => TransactionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  accountId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  amount: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  currency: z.union([ z.lazy(() => EnumCurrencyWithAggregatesFilterSchema),z.lazy(() => CurrencySchema) ]).optional(),
  type: z.union([ z.lazy(() => EnumTransactionTypeWithAggregatesFilterSchema),z.lazy(() => TransactionTypeSchema) ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  notes: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  customIcon: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  recurrence: z.union([ z.lazy(() => EnumRecurrenceTypeWithAggregatesFilterSchema),z.lazy(() => RecurrenceTypeSchema) ]).optional(),
  categoryId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  tagIds: z.lazy(() => StringNullableListFilterSchema).optional()
}).strict();

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  accounts: z.lazy(() => AccountListRelationFilterSchema).optional(),
  transactions: z.lazy(() => TransactionListRelationFilterSchema).optional(),
  budgets: z.lazy(() => BudgetListRelationFilterSchema).optional()
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  accounts: z.lazy(() => AccountOrderByRelationAggregateInputSchema).optional(),
  transactions: z.lazy(() => TransactionOrderByRelationAggregateInputSchema).optional(),
  budgets: z.lazy(() => BudgetOrderByRelationAggregateInputSchema).optional()
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    email: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    email: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  email: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  accounts: z.lazy(() => AccountListRelationFilterSchema).optional(),
  transactions: z.lazy(() => TransactionListRelationFilterSchema).optional(),
  budgets: z.lazy(() => BudgetListRelationFilterSchema).optional()
}).strict());

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional()
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  password: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const AccountCreateInputSchema: z.ZodType<Prisma.AccountCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => AccountTypeSchema),
  currency: z.lazy(() => CurrencySchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutAccountsInputSchema),
  transactions: z.lazy(() => TransactionCreateNestedManyWithoutAccountInputSchema).optional()
}).strict();

export const AccountUncheckedCreateInputSchema: z.ZodType<Prisma.AccountUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  name: z.string(),
  type: z.lazy(() => AccountTypeSchema),
  currency: z.lazy(() => CurrencySchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  transactions: z.lazy(() => TransactionUncheckedCreateNestedManyWithoutAccountInputSchema).optional()
}).strict();

export const AccountUpdateInputSchema: z.ZodType<Prisma.AccountUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => AccountTypeSchema),z.lazy(() => EnumAccountTypeFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => EnumCurrencyFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutAccountsNestedInputSchema).optional(),
  transactions: z.lazy(() => TransactionUpdateManyWithoutAccountNestedInputSchema).optional()
}).strict();

export const AccountUncheckedUpdateInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => AccountTypeSchema),z.lazy(() => EnumAccountTypeFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => EnumCurrencyFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  transactions: z.lazy(() => TransactionUncheckedUpdateManyWithoutAccountNestedInputSchema).optional()
}).strict();

export const AccountCreateManyInputSchema: z.ZodType<Prisma.AccountCreateManyInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  name: z.string(),
  type: z.lazy(() => AccountTypeSchema),
  currency: z.lazy(() => CurrencySchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AccountUpdateManyMutationInputSchema: z.ZodType<Prisma.AccountUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => AccountTypeSchema),z.lazy(() => EnumAccountTypeFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => EnumCurrencyFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AccountUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => AccountTypeSchema),z.lazy(() => EnumAccountTypeFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => EnumCurrencyFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BudgetCreateInputSchema: z.ZodType<Prisma.BudgetCreateInput> = z.object({
  id: z.string().optional(),
  periodStart: z.coerce.date(),
  periodEnd: z.coerce.date(),
  limit: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutBudgetsInputSchema),
  category: z.lazy(() => CategoryCreateNestedOneWithoutBudgetInputSchema)
}).strict();

export const BudgetUncheckedCreateInputSchema: z.ZodType<Prisma.BudgetUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  categoryId: z.string(),
  periodStart: z.coerce.date(),
  periodEnd: z.coerce.date(),
  limit: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const BudgetUpdateInputSchema: z.ZodType<Prisma.BudgetUpdateInput> = z.object({
  periodStart: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  periodEnd: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  limit: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutBudgetsNestedInputSchema).optional(),
  category: z.lazy(() => CategoryUpdateOneRequiredWithoutBudgetNestedInputSchema).optional()
}).strict();

export const BudgetUncheckedUpdateInputSchema: z.ZodType<Prisma.BudgetUncheckedUpdateInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  categoryId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  periodStart: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  periodEnd: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  limit: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BudgetCreateManyInputSchema: z.ZodType<Prisma.BudgetCreateManyInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  categoryId: z.string(),
  periodStart: z.coerce.date(),
  periodEnd: z.coerce.date(),
  limit: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const BudgetUpdateManyMutationInputSchema: z.ZodType<Prisma.BudgetUpdateManyMutationInput> = z.object({
  periodStart: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  periodEnd: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  limit: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BudgetUncheckedUpdateManyInputSchema: z.ZodType<Prisma.BudgetUncheckedUpdateManyInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  categoryId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  periodStart: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  periodEnd: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  limit: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CategoryCreateInputSchema: z.ZodType<Prisma.CategoryCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  icon: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  parentCategory: z.lazy(() => CategoryCreateNestedOneWithoutSubcategoriesInputSchema).optional(),
  subcategories: z.lazy(() => CategoryCreateNestedManyWithoutParentCategoryInputSchema).optional(),
  transactions: z.lazy(() => TransactionCreateNestedManyWithoutCategoryInputSchema).optional(),
  Budget: z.lazy(() => BudgetCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict();

export const CategoryUncheckedCreateInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  icon: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  parentCategoryId: z.string().optional().nullable(),
  subcategories: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutParentCategoryInputSchema).optional(),
  transactions: z.lazy(() => TransactionUncheckedCreateNestedManyWithoutCategoryInputSchema).optional(),
  Budget: z.lazy(() => BudgetUncheckedCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict();

export const CategoryUpdateInputSchema: z.ZodType<Prisma.CategoryUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  parentCategory: z.lazy(() => CategoryUpdateOneWithoutSubcategoriesNestedInputSchema).optional(),
  subcategories: z.lazy(() => CategoryUpdateManyWithoutParentCategoryNestedInputSchema).optional(),
  transactions: z.lazy(() => TransactionUpdateManyWithoutCategoryNestedInputSchema).optional(),
  Budget: z.lazy(() => BudgetUpdateManyWithoutCategoryNestedInputSchema).optional()
}).strict();

export const CategoryUncheckedUpdateInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  parentCategoryId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  subcategories: z.lazy(() => CategoryUncheckedUpdateManyWithoutParentCategoryNestedInputSchema).optional(),
  transactions: z.lazy(() => TransactionUncheckedUpdateManyWithoutCategoryNestedInputSchema).optional(),
  Budget: z.lazy(() => BudgetUncheckedUpdateManyWithoutCategoryNestedInputSchema).optional()
}).strict();

export const CategoryCreateManyInputSchema: z.ZodType<Prisma.CategoryCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  icon: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  parentCategoryId: z.string().optional().nullable()
}).strict();

export const CategoryUpdateManyMutationInputSchema: z.ZodType<Prisma.CategoryUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const CategoryUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateManyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  parentCategoryId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TagCreateInputSchema: z.ZodType<Prisma.TagCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  transactions: z.lazy(() => TransactionCreateNestedManyWithoutTagsInputSchema).optional()
}).strict();

export const TagUncheckedCreateInputSchema: z.ZodType<Prisma.TagUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  transactionIds: z.union([ z.lazy(() => TagCreatetransactionIdsInputSchema),z.string().array() ]).optional(),
  transactions: z.lazy(() => TransactionUncheckedCreateNestedManyWithoutTagsInputSchema).optional()
}).strict();

export const TagUpdateInputSchema: z.ZodType<Prisma.TagUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  transactions: z.lazy(() => TransactionUpdateManyWithoutTagsNestedInputSchema).optional()
}).strict();

export const TagUncheckedUpdateInputSchema: z.ZodType<Prisma.TagUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  transactionIds: z.union([ z.lazy(() => TagUpdatetransactionIdsInputSchema),z.string().array() ]).optional(),
  transactions: z.lazy(() => TransactionUncheckedUpdateManyWithoutTagsNestedInputSchema).optional()
}).strict();

export const TagCreateManyInputSchema: z.ZodType<Prisma.TagCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  transactionIds: z.union([ z.lazy(() => TagCreatetransactionIdsInputSchema),z.string().array() ]).optional(),
}).strict();

export const TagUpdateManyMutationInputSchema: z.ZodType<Prisma.TagUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TagUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TagUncheckedUpdateManyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  transactionIds: z.union([ z.lazy(() => TagUpdatetransactionIdsInputSchema),z.string().array() ]).optional(),
}).strict();

export const TransactionCreateInputSchema: z.ZodType<Prisma.TransactionCreateInput> = z.object({
  id: z.string().optional(),
  amount: z.number(),
  currency: z.lazy(() => CurrencySchema),
  type: z.lazy(() => TransactionTypeSchema),
  description: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  customIcon: z.string().optional().nullable(),
  date: z.coerce.date(),
  recurrence: z.lazy(() => RecurrenceTypeSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  account: z.lazy(() => AccountCreateNestedOneWithoutTransactionsInputSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutTransactionsInputSchema),
  category: z.lazy(() => CategoryCreateNestedOneWithoutTransactionsInputSchema).optional(),
  tags: z.lazy(() => TagCreateNestedManyWithoutTransactionsInputSchema).optional()
}).strict();

export const TransactionUncheckedCreateInputSchema: z.ZodType<Prisma.TransactionUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  accountId: z.string(),
  userId: z.string(),
  amount: z.number(),
  currency: z.lazy(() => CurrencySchema),
  type: z.lazy(() => TransactionTypeSchema),
  description: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  customIcon: z.string().optional().nullable(),
  date: z.coerce.date(),
  recurrence: z.lazy(() => RecurrenceTypeSchema).optional(),
  categoryId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tagIds: z.union([ z.lazy(() => TransactionCreatetagIdsInputSchema),z.string().array() ]).optional(),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutTransactionsInputSchema).optional()
}).strict();

export const TransactionUpdateInputSchema: z.ZodType<Prisma.TransactionUpdateInput> = z.object({
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => EnumCurrencyFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => TransactionTypeSchema),z.lazy(() => EnumTransactionTypeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  customIcon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  recurrence: z.union([ z.lazy(() => RecurrenceTypeSchema),z.lazy(() => EnumRecurrenceTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  account: z.lazy(() => AccountUpdateOneRequiredWithoutTransactionsNestedInputSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutTransactionsNestedInputSchema).optional(),
  category: z.lazy(() => CategoryUpdateOneWithoutTransactionsNestedInputSchema).optional(),
  tags: z.lazy(() => TagUpdateManyWithoutTransactionsNestedInputSchema).optional()
}).strict();

export const TransactionUncheckedUpdateInputSchema: z.ZodType<Prisma.TransactionUncheckedUpdateInput> = z.object({
  accountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => EnumCurrencyFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => TransactionTypeSchema),z.lazy(() => EnumTransactionTypeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  customIcon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  recurrence: z.union([ z.lazy(() => RecurrenceTypeSchema),z.lazy(() => EnumRecurrenceTypeFieldUpdateOperationsInputSchema) ]).optional(),
  categoryId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tagIds: z.union([ z.lazy(() => TransactionUpdatetagIdsInputSchema),z.string().array() ]).optional(),
  tags: z.lazy(() => TagUncheckedUpdateManyWithoutTransactionsNestedInputSchema).optional()
}).strict();

export const TransactionCreateManyInputSchema: z.ZodType<Prisma.TransactionCreateManyInput> = z.object({
  id: z.string().optional(),
  accountId: z.string(),
  userId: z.string(),
  amount: z.number(),
  currency: z.lazy(() => CurrencySchema),
  type: z.lazy(() => TransactionTypeSchema),
  description: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  customIcon: z.string().optional().nullable(),
  date: z.coerce.date(),
  recurrence: z.lazy(() => RecurrenceTypeSchema).optional(),
  categoryId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tagIds: z.union([ z.lazy(() => TransactionCreatetagIdsInputSchema),z.string().array() ]).optional(),
}).strict();

export const TransactionUpdateManyMutationInputSchema: z.ZodType<Prisma.TransactionUpdateManyMutationInput> = z.object({
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => EnumCurrencyFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => TransactionTypeSchema),z.lazy(() => EnumTransactionTypeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  customIcon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  recurrence: z.union([ z.lazy(() => RecurrenceTypeSchema),z.lazy(() => EnumRecurrenceTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TransactionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TransactionUncheckedUpdateManyInput> = z.object({
  accountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => EnumCurrencyFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => TransactionTypeSchema),z.lazy(() => EnumTransactionTypeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  customIcon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  recurrence: z.union([ z.lazy(() => RecurrenceTypeSchema),z.lazy(() => EnumRecurrenceTypeFieldUpdateOperationsInputSchema) ]).optional(),
  categoryId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tagIds: z.union([ z.lazy(() => TransactionUpdatetagIdsInputSchema),z.string().array() ]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().optional(),
  email: z.string(),
  name: z.string().optional().nullable(),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  transactions: z.lazy(() => TransactionCreateNestedManyWithoutUserInputSchema).optional(),
  budgets: z.lazy(() => BudgetCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  email: z.string(),
  name: z.string().optional().nullable(),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  transactions: z.lazy(() => TransactionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  budgets: z.lazy(() => BudgetUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  transactions: z.lazy(() => TransactionUpdateManyWithoutUserNestedInputSchema).optional(),
  budgets: z.lazy(() => BudgetUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  transactions: z.lazy(() => TransactionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  budgets: z.lazy(() => BudgetUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string().optional(),
  email: z.string(),
  name: z.string().optional().nullable(),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const EnumAccountTypeFilterSchema: z.ZodType<Prisma.EnumAccountTypeFilter> = z.object({
  equals: z.lazy(() => AccountTypeSchema).optional(),
  in: z.lazy(() => AccountTypeSchema).array().optional(),
  notIn: z.lazy(() => AccountTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => AccountTypeSchema),z.lazy(() => NestedEnumAccountTypeFilterSchema) ]).optional(),
}).strict();

export const EnumCurrencyFilterSchema: z.ZodType<Prisma.EnumCurrencyFilter> = z.object({
  equals: z.lazy(() => CurrencySchema).optional(),
  in: z.lazy(() => CurrencySchema).array().optional(),
  notIn: z.lazy(() => CurrencySchema).array().optional(),
  not: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => NestedEnumCurrencyFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const UserRelationFilterSchema: z.ZodType<Prisma.UserRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const TransactionListRelationFilterSchema: z.ZodType<Prisma.TransactionListRelationFilter> = z.object({
  every: z.lazy(() => TransactionWhereInputSchema).optional(),
  some: z.lazy(() => TransactionWhereInputSchema).optional(),
  none: z.lazy(() => TransactionWhereInputSchema).optional()
}).strict();

export const TransactionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TransactionOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountCountOrderByAggregateInputSchema: z.ZodType<Prisma.AccountCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AccountMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountMinOrderByAggregateInputSchema: z.ZodType<Prisma.AccountMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const EnumAccountTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumAccountTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => AccountTypeSchema).optional(),
  in: z.lazy(() => AccountTypeSchema).array().optional(),
  notIn: z.lazy(() => AccountTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => AccountTypeSchema),z.lazy(() => NestedEnumAccountTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumAccountTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumAccountTypeFilterSchema).optional()
}).strict();

export const EnumCurrencyWithAggregatesFilterSchema: z.ZodType<Prisma.EnumCurrencyWithAggregatesFilter> = z.object({
  equals: z.lazy(() => CurrencySchema).optional(),
  in: z.lazy(() => CurrencySchema).array().optional(),
  notIn: z.lazy(() => CurrencySchema).array().optional(),
  not: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => NestedEnumCurrencyWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumCurrencyFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumCurrencyFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const FloatFilterSchema: z.ZodType<Prisma.FloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const CategoryRelationFilterSchema: z.ZodType<Prisma.CategoryRelationFilter> = z.object({
  is: z.lazy(() => CategoryWhereInputSchema).optional(),
  isNot: z.lazy(() => CategoryWhereInputSchema).optional()
}).strict();

export const BudgetCountOrderByAggregateInputSchema: z.ZodType<Prisma.BudgetCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  periodStart: z.lazy(() => SortOrderSchema).optional(),
  periodEnd: z.lazy(() => SortOrderSchema).optional(),
  limit: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BudgetAvgOrderByAggregateInputSchema: z.ZodType<Prisma.BudgetAvgOrderByAggregateInput> = z.object({
  limit: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BudgetMaxOrderByAggregateInputSchema: z.ZodType<Prisma.BudgetMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  periodStart: z.lazy(() => SortOrderSchema).optional(),
  periodEnd: z.lazy(() => SortOrderSchema).optional(),
  limit: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BudgetMinOrderByAggregateInputSchema: z.ZodType<Prisma.BudgetMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  periodStart: z.lazy(() => SortOrderSchema).optional(),
  periodEnd: z.lazy(() => SortOrderSchema).optional(),
  limit: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BudgetSumOrderByAggregateInputSchema: z.ZodType<Prisma.BudgetSumOrderByAggregateInput> = z.object({
  limit: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FloatWithAggregatesFilterSchema: z.ZodType<Prisma.FloatWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional()
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const CategoryNullableRelationFilterSchema: z.ZodType<Prisma.CategoryNullableRelationFilter> = z.object({
  is: z.lazy(() => CategoryWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => CategoryWhereInputSchema).optional().nullable()
}).strict();

export const CategoryListRelationFilterSchema: z.ZodType<Prisma.CategoryListRelationFilter> = z.object({
  every: z.lazy(() => CategoryWhereInputSchema).optional(),
  some: z.lazy(() => CategoryWhereInputSchema).optional(),
  none: z.lazy(() => CategoryWhereInputSchema).optional()
}).strict();

export const BudgetListRelationFilterSchema: z.ZodType<Prisma.BudgetListRelationFilter> = z.object({
  every: z.lazy(() => BudgetWhereInputSchema).optional(),
  some: z.lazy(() => BudgetWhereInputSchema).optional(),
  none: z.lazy(() => BudgetWhereInputSchema).optional()
}).strict();

export const CategoryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CategoryOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BudgetOrderByRelationAggregateInputSchema: z.ZodType<Prisma.BudgetOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoryCountOrderByAggregateInputSchema: z.ZodType<Prisma.CategoryCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  icon: z.lazy(() => SortOrderSchema).optional(),
  color: z.lazy(() => SortOrderSchema).optional(),
  parentCategoryId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoryMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CategoryMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  icon: z.lazy(() => SortOrderSchema).optional(),
  color: z.lazy(() => SortOrderSchema).optional(),
  parentCategoryId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoryMinOrderByAggregateInputSchema: z.ZodType<Prisma.CategoryMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  icon: z.lazy(() => SortOrderSchema).optional(),
  color: z.lazy(() => SortOrderSchema).optional(),
  parentCategoryId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const StringNullableListFilterSchema: z.ZodType<Prisma.StringNullableListFilter> = z.object({
  equals: z.string().array().optional().nullable(),
  has: z.string().optional().nullable(),
  hasEvery: z.string().array().optional(),
  hasSome: z.string().array().optional(),
  isEmpty: z.boolean().optional()
}).strict();

export const TagCountOrderByAggregateInputSchema: z.ZodType<Prisma.TagCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  transactionIds: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TagMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TagMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TagMinOrderByAggregateInputSchema: z.ZodType<Prisma.TagMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumTransactionTypeFilterSchema: z.ZodType<Prisma.EnumTransactionTypeFilter> = z.object({
  equals: z.lazy(() => TransactionTypeSchema).optional(),
  in: z.lazy(() => TransactionTypeSchema).array().optional(),
  notIn: z.lazy(() => TransactionTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => TransactionTypeSchema),z.lazy(() => NestedEnumTransactionTypeFilterSchema) ]).optional(),
}).strict();

export const EnumRecurrenceTypeFilterSchema: z.ZodType<Prisma.EnumRecurrenceTypeFilter> = z.object({
  equals: z.lazy(() => RecurrenceTypeSchema).optional(),
  in: z.lazy(() => RecurrenceTypeSchema).array().optional(),
  notIn: z.lazy(() => RecurrenceTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => RecurrenceTypeSchema),z.lazy(() => NestedEnumRecurrenceTypeFilterSchema) ]).optional(),
}).strict();

export const AccountRelationFilterSchema: z.ZodType<Prisma.AccountRelationFilter> = z.object({
  is: z.lazy(() => AccountWhereInputSchema).optional(),
  isNot: z.lazy(() => AccountWhereInputSchema).optional()
}).strict();

export const TagListRelationFilterSchema: z.ZodType<Prisma.TagListRelationFilter> = z.object({
  every: z.lazy(() => TagWhereInputSchema).optional(),
  some: z.lazy(() => TagWhereInputSchema).optional(),
  none: z.lazy(() => TagWhereInputSchema).optional()
}).strict();

export const TagOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TagOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TransactionCountOrderByAggregateInputSchema: z.ZodType<Prisma.TransactionCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  accountId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional(),
  customIcon: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  recurrence: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  tagIds: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TransactionAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TransactionAvgOrderByAggregateInput> = z.object({
  amount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TransactionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TransactionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  accountId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional(),
  customIcon: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  recurrence: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TransactionMinOrderByAggregateInputSchema: z.ZodType<Prisma.TransactionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  accountId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional(),
  customIcon: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  recurrence: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TransactionSumOrderByAggregateInputSchema: z.ZodType<Prisma.TransactionSumOrderByAggregateInput> = z.object({
  amount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumTransactionTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumTransactionTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => TransactionTypeSchema).optional(),
  in: z.lazy(() => TransactionTypeSchema).array().optional(),
  notIn: z.lazy(() => TransactionTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => TransactionTypeSchema),z.lazy(() => NestedEnumTransactionTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumTransactionTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumTransactionTypeFilterSchema).optional()
}).strict();

export const EnumRecurrenceTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumRecurrenceTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RecurrenceTypeSchema).optional(),
  in: z.lazy(() => RecurrenceTypeSchema).array().optional(),
  notIn: z.lazy(() => RecurrenceTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => RecurrenceTypeSchema),z.lazy(() => NestedEnumRecurrenceTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRecurrenceTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRecurrenceTypeFilterSchema).optional()
}).strict();

export const AccountListRelationFilterSchema: z.ZodType<Prisma.AccountListRelationFilter> = z.object({
  every: z.lazy(() => AccountWhereInputSchema).optional(),
  some: z.lazy(() => AccountWhereInputSchema).optional(),
  none: z.lazy(() => AccountWhereInputSchema).optional()
}).strict();

export const AccountOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AccountOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserCreateNestedOneWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAccountsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const TransactionCreateNestedManyWithoutAccountInputSchema: z.ZodType<Prisma.TransactionCreateNestedManyWithoutAccountInput> = z.object({
  create: z.union([ z.lazy(() => TransactionCreateWithoutAccountInputSchema),z.lazy(() => TransactionCreateWithoutAccountInputSchema).array(),z.lazy(() => TransactionUncheckedCreateWithoutAccountInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutAccountInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TransactionCreateOrConnectWithoutAccountInputSchema),z.lazy(() => TransactionCreateOrConnectWithoutAccountInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TransactionCreateManyAccountInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TransactionUncheckedCreateNestedManyWithoutAccountInputSchema: z.ZodType<Prisma.TransactionUncheckedCreateNestedManyWithoutAccountInput> = z.object({
  create: z.union([ z.lazy(() => TransactionCreateWithoutAccountInputSchema),z.lazy(() => TransactionCreateWithoutAccountInputSchema).array(),z.lazy(() => TransactionUncheckedCreateWithoutAccountInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutAccountInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TransactionCreateOrConnectWithoutAccountInputSchema),z.lazy(() => TransactionCreateOrConnectWithoutAccountInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TransactionCreateManyAccountInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const EnumAccountTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumAccountTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => AccountTypeSchema).optional()
}).strict();

export const EnumCurrencyFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumCurrencyFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => CurrencySchema).optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const UserUpdateOneRequiredWithoutAccountsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAccountsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAccountsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutAccountsInputSchema),z.lazy(() => UserUpdateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema) ]).optional(),
}).strict();

export const TransactionUpdateManyWithoutAccountNestedInputSchema: z.ZodType<Prisma.TransactionUpdateManyWithoutAccountNestedInput> = z.object({
  create: z.union([ z.lazy(() => TransactionCreateWithoutAccountInputSchema),z.lazy(() => TransactionCreateWithoutAccountInputSchema).array(),z.lazy(() => TransactionUncheckedCreateWithoutAccountInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutAccountInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TransactionCreateOrConnectWithoutAccountInputSchema),z.lazy(() => TransactionCreateOrConnectWithoutAccountInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TransactionUpsertWithWhereUniqueWithoutAccountInputSchema),z.lazy(() => TransactionUpsertWithWhereUniqueWithoutAccountInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TransactionCreateManyAccountInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TransactionUpdateWithWhereUniqueWithoutAccountInputSchema),z.lazy(() => TransactionUpdateWithWhereUniqueWithoutAccountInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TransactionUpdateManyWithWhereWithoutAccountInputSchema),z.lazy(() => TransactionUpdateManyWithWhereWithoutAccountInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TransactionScalarWhereInputSchema),z.lazy(() => TransactionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TransactionUncheckedUpdateManyWithoutAccountNestedInputSchema: z.ZodType<Prisma.TransactionUncheckedUpdateManyWithoutAccountNestedInput> = z.object({
  create: z.union([ z.lazy(() => TransactionCreateWithoutAccountInputSchema),z.lazy(() => TransactionCreateWithoutAccountInputSchema).array(),z.lazy(() => TransactionUncheckedCreateWithoutAccountInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutAccountInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TransactionCreateOrConnectWithoutAccountInputSchema),z.lazy(() => TransactionCreateOrConnectWithoutAccountInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TransactionUpsertWithWhereUniqueWithoutAccountInputSchema),z.lazy(() => TransactionUpsertWithWhereUniqueWithoutAccountInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TransactionCreateManyAccountInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TransactionUpdateWithWhereUniqueWithoutAccountInputSchema),z.lazy(() => TransactionUpdateWithWhereUniqueWithoutAccountInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TransactionUpdateManyWithWhereWithoutAccountInputSchema),z.lazy(() => TransactionUpdateManyWithWhereWithoutAccountInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TransactionScalarWhereInputSchema),z.lazy(() => TransactionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutBudgetsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutBudgetsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutBudgetsInputSchema),z.lazy(() => UserUncheckedCreateWithoutBudgetsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBudgetsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const CategoryCreateNestedOneWithoutBudgetInputSchema: z.ZodType<Prisma.CategoryCreateNestedOneWithoutBudgetInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutBudgetInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutBudgetInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutBudgetInputSchema).optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputSchema).optional()
}).strict();

export const FloatFieldUpdateOperationsInputSchema: z.ZodType<Prisma.FloatFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const UserUpdateOneRequiredWithoutBudgetsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutBudgetsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutBudgetsInputSchema),z.lazy(() => UserUncheckedCreateWithoutBudgetsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBudgetsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutBudgetsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutBudgetsInputSchema),z.lazy(() => UserUpdateWithoutBudgetsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutBudgetsInputSchema) ]).optional(),
}).strict();

export const CategoryUpdateOneRequiredWithoutBudgetNestedInputSchema: z.ZodType<Prisma.CategoryUpdateOneRequiredWithoutBudgetNestedInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutBudgetInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutBudgetInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutBudgetInputSchema).optional(),
  upsert: z.lazy(() => CategoryUpsertWithoutBudgetInputSchema).optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CategoryUpdateToOneWithWhereWithoutBudgetInputSchema),z.lazy(() => CategoryUpdateWithoutBudgetInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutBudgetInputSchema) ]).optional(),
}).strict();

export const CategoryCreateNestedOneWithoutSubcategoriesInputSchema: z.ZodType<Prisma.CategoryCreateNestedOneWithoutSubcategoriesInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutSubcategoriesInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutSubcategoriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutSubcategoriesInputSchema).optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputSchema).optional()
}).strict();

export const CategoryCreateNestedManyWithoutParentCategoryInputSchema: z.ZodType<Prisma.CategoryCreateNestedManyWithoutParentCategoryInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutParentCategoryInputSchema),z.lazy(() => CategoryCreateWithoutParentCategoryInputSchema).array(),z.lazy(() => CategoryUncheckedCreateWithoutParentCategoryInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutParentCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoryCreateOrConnectWithoutParentCategoryInputSchema),z.lazy(() => CategoryCreateOrConnectWithoutParentCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CategoryCreateManyParentCategoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TransactionCreateNestedManyWithoutCategoryInputSchema: z.ZodType<Prisma.TransactionCreateNestedManyWithoutCategoryInput> = z.object({
  create: z.union([ z.lazy(() => TransactionCreateWithoutCategoryInputSchema),z.lazy(() => TransactionCreateWithoutCategoryInputSchema).array(),z.lazy(() => TransactionUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TransactionCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => TransactionCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TransactionCreateManyCategoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BudgetCreateNestedManyWithoutCategoryInputSchema: z.ZodType<Prisma.BudgetCreateNestedManyWithoutCategoryInput> = z.object({
  create: z.union([ z.lazy(() => BudgetCreateWithoutCategoryInputSchema),z.lazy(() => BudgetCreateWithoutCategoryInputSchema).array(),z.lazy(() => BudgetUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => BudgetUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BudgetCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => BudgetCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BudgetCreateManyCategoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BudgetWhereUniqueInputSchema),z.lazy(() => BudgetWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CategoryUncheckedCreateNestedManyWithoutParentCategoryInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateNestedManyWithoutParentCategoryInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutParentCategoryInputSchema),z.lazy(() => CategoryCreateWithoutParentCategoryInputSchema).array(),z.lazy(() => CategoryUncheckedCreateWithoutParentCategoryInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutParentCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoryCreateOrConnectWithoutParentCategoryInputSchema),z.lazy(() => CategoryCreateOrConnectWithoutParentCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CategoryCreateManyParentCategoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TransactionUncheckedCreateNestedManyWithoutCategoryInputSchema: z.ZodType<Prisma.TransactionUncheckedCreateNestedManyWithoutCategoryInput> = z.object({
  create: z.union([ z.lazy(() => TransactionCreateWithoutCategoryInputSchema),z.lazy(() => TransactionCreateWithoutCategoryInputSchema).array(),z.lazy(() => TransactionUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TransactionCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => TransactionCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TransactionCreateManyCategoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BudgetUncheckedCreateNestedManyWithoutCategoryInputSchema: z.ZodType<Prisma.BudgetUncheckedCreateNestedManyWithoutCategoryInput> = z.object({
  create: z.union([ z.lazy(() => BudgetCreateWithoutCategoryInputSchema),z.lazy(() => BudgetCreateWithoutCategoryInputSchema).array(),z.lazy(() => BudgetUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => BudgetUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BudgetCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => BudgetCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BudgetCreateManyCategoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BudgetWhereUniqueInputSchema),z.lazy(() => BudgetWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable(),
  unset: z.boolean().optional()
}).strict();

export const CategoryUpdateOneWithoutSubcategoriesNestedInputSchema: z.ZodType<Prisma.CategoryUpdateOneWithoutSubcategoriesNestedInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutSubcategoriesInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutSubcategoriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutSubcategoriesInputSchema).optional(),
  upsert: z.lazy(() => CategoryUpsertWithoutSubcategoriesInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.union([ z.boolean(),z.lazy(() => CategoryWhereInputSchema) ]).optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CategoryUpdateToOneWithWhereWithoutSubcategoriesInputSchema),z.lazy(() => CategoryUpdateWithoutSubcategoriesInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutSubcategoriesInputSchema) ]).optional(),
}).strict();

export const CategoryUpdateManyWithoutParentCategoryNestedInputSchema: z.ZodType<Prisma.CategoryUpdateManyWithoutParentCategoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutParentCategoryInputSchema),z.lazy(() => CategoryCreateWithoutParentCategoryInputSchema).array(),z.lazy(() => CategoryUncheckedCreateWithoutParentCategoryInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutParentCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoryCreateOrConnectWithoutParentCategoryInputSchema),z.lazy(() => CategoryCreateOrConnectWithoutParentCategoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CategoryUpsertWithWhereUniqueWithoutParentCategoryInputSchema),z.lazy(() => CategoryUpsertWithWhereUniqueWithoutParentCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CategoryCreateManyParentCategoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CategoryUpdateWithWhereUniqueWithoutParentCategoryInputSchema),z.lazy(() => CategoryUpdateWithWhereUniqueWithoutParentCategoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CategoryUpdateManyWithWhereWithoutParentCategoryInputSchema),z.lazy(() => CategoryUpdateManyWithWhereWithoutParentCategoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CategoryScalarWhereInputSchema),z.lazy(() => CategoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TransactionUpdateManyWithoutCategoryNestedInputSchema: z.ZodType<Prisma.TransactionUpdateManyWithoutCategoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => TransactionCreateWithoutCategoryInputSchema),z.lazy(() => TransactionCreateWithoutCategoryInputSchema).array(),z.lazy(() => TransactionUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TransactionCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => TransactionCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TransactionUpsertWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => TransactionUpsertWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TransactionCreateManyCategoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TransactionUpdateWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => TransactionUpdateWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TransactionUpdateManyWithWhereWithoutCategoryInputSchema),z.lazy(() => TransactionUpdateManyWithWhereWithoutCategoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TransactionScalarWhereInputSchema),z.lazy(() => TransactionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const BudgetUpdateManyWithoutCategoryNestedInputSchema: z.ZodType<Prisma.BudgetUpdateManyWithoutCategoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => BudgetCreateWithoutCategoryInputSchema),z.lazy(() => BudgetCreateWithoutCategoryInputSchema).array(),z.lazy(() => BudgetUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => BudgetUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BudgetCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => BudgetCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BudgetUpsertWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => BudgetUpsertWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BudgetCreateManyCategoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BudgetWhereUniqueInputSchema),z.lazy(() => BudgetWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BudgetWhereUniqueInputSchema),z.lazy(() => BudgetWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BudgetWhereUniqueInputSchema),z.lazy(() => BudgetWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BudgetWhereUniqueInputSchema),z.lazy(() => BudgetWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BudgetUpdateWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => BudgetUpdateWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BudgetUpdateManyWithWhereWithoutCategoryInputSchema),z.lazy(() => BudgetUpdateManyWithWhereWithoutCategoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BudgetScalarWhereInputSchema),z.lazy(() => BudgetScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CategoryUncheckedUpdateManyWithoutParentCategoryNestedInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateManyWithoutParentCategoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutParentCategoryInputSchema),z.lazy(() => CategoryCreateWithoutParentCategoryInputSchema).array(),z.lazy(() => CategoryUncheckedCreateWithoutParentCategoryInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutParentCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoryCreateOrConnectWithoutParentCategoryInputSchema),z.lazy(() => CategoryCreateOrConnectWithoutParentCategoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CategoryUpsertWithWhereUniqueWithoutParentCategoryInputSchema),z.lazy(() => CategoryUpsertWithWhereUniqueWithoutParentCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CategoryCreateManyParentCategoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CategoryUpdateWithWhereUniqueWithoutParentCategoryInputSchema),z.lazy(() => CategoryUpdateWithWhereUniqueWithoutParentCategoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CategoryUpdateManyWithWhereWithoutParentCategoryInputSchema),z.lazy(() => CategoryUpdateManyWithWhereWithoutParentCategoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CategoryScalarWhereInputSchema),z.lazy(() => CategoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TransactionUncheckedUpdateManyWithoutCategoryNestedInputSchema: z.ZodType<Prisma.TransactionUncheckedUpdateManyWithoutCategoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => TransactionCreateWithoutCategoryInputSchema),z.lazy(() => TransactionCreateWithoutCategoryInputSchema).array(),z.lazy(() => TransactionUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TransactionCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => TransactionCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TransactionUpsertWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => TransactionUpsertWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TransactionCreateManyCategoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TransactionUpdateWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => TransactionUpdateWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TransactionUpdateManyWithWhereWithoutCategoryInputSchema),z.lazy(() => TransactionUpdateManyWithWhereWithoutCategoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TransactionScalarWhereInputSchema),z.lazy(() => TransactionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const BudgetUncheckedUpdateManyWithoutCategoryNestedInputSchema: z.ZodType<Prisma.BudgetUncheckedUpdateManyWithoutCategoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => BudgetCreateWithoutCategoryInputSchema),z.lazy(() => BudgetCreateWithoutCategoryInputSchema).array(),z.lazy(() => BudgetUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => BudgetUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BudgetCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => BudgetCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BudgetUpsertWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => BudgetUpsertWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BudgetCreateManyCategoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BudgetWhereUniqueInputSchema),z.lazy(() => BudgetWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BudgetWhereUniqueInputSchema),z.lazy(() => BudgetWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BudgetWhereUniqueInputSchema),z.lazy(() => BudgetWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BudgetWhereUniqueInputSchema),z.lazy(() => BudgetWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BudgetUpdateWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => BudgetUpdateWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BudgetUpdateManyWithWhereWithoutCategoryInputSchema),z.lazy(() => BudgetUpdateManyWithWhereWithoutCategoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BudgetScalarWhereInputSchema),z.lazy(() => BudgetScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TransactionCreateNestedManyWithoutTagsInputSchema: z.ZodType<Prisma.TransactionCreateNestedManyWithoutTagsInput> = z.object({
  create: z.union([ z.lazy(() => TransactionCreateWithoutTagsInputSchema),z.lazy(() => TransactionCreateWithoutTagsInputSchema).array(),z.lazy(() => TransactionUncheckedCreateWithoutTagsInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TransactionCreateOrConnectWithoutTagsInputSchema),z.lazy(() => TransactionCreateOrConnectWithoutTagsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TagCreatetransactionIdsInputSchema: z.ZodType<Prisma.TagCreatetransactionIdsInput> = z.object({
  set: z.string().array()
}).strict();

export const TransactionUncheckedCreateNestedManyWithoutTagsInputSchema: z.ZodType<Prisma.TransactionUncheckedCreateNestedManyWithoutTagsInput> = z.object({
  create: z.union([ z.lazy(() => TransactionCreateWithoutTagsInputSchema),z.lazy(() => TransactionCreateWithoutTagsInputSchema).array(),z.lazy(() => TransactionUncheckedCreateWithoutTagsInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TransactionCreateOrConnectWithoutTagsInputSchema),z.lazy(() => TransactionCreateOrConnectWithoutTagsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TransactionUpdateManyWithoutTagsNestedInputSchema: z.ZodType<Prisma.TransactionUpdateManyWithoutTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TransactionCreateWithoutTagsInputSchema),z.lazy(() => TransactionCreateWithoutTagsInputSchema).array(),z.lazy(() => TransactionUncheckedCreateWithoutTagsInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TransactionCreateOrConnectWithoutTagsInputSchema),z.lazy(() => TransactionCreateOrConnectWithoutTagsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TransactionUpsertWithWhereUniqueWithoutTagsInputSchema),z.lazy(() => TransactionUpsertWithWhereUniqueWithoutTagsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TransactionUpdateWithWhereUniqueWithoutTagsInputSchema),z.lazy(() => TransactionUpdateWithWhereUniqueWithoutTagsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TransactionUpdateManyWithWhereWithoutTagsInputSchema),z.lazy(() => TransactionUpdateManyWithWhereWithoutTagsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TransactionScalarWhereInputSchema),z.lazy(() => TransactionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TagUpdatetransactionIdsInputSchema: z.ZodType<Prisma.TagUpdatetransactionIdsInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export const TransactionUncheckedUpdateManyWithoutTagsNestedInputSchema: z.ZodType<Prisma.TransactionUncheckedUpdateManyWithoutTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TransactionCreateWithoutTagsInputSchema),z.lazy(() => TransactionCreateWithoutTagsInputSchema).array(),z.lazy(() => TransactionUncheckedCreateWithoutTagsInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TransactionCreateOrConnectWithoutTagsInputSchema),z.lazy(() => TransactionCreateOrConnectWithoutTagsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TransactionUpsertWithWhereUniqueWithoutTagsInputSchema),z.lazy(() => TransactionUpsertWithWhereUniqueWithoutTagsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TransactionUpdateWithWhereUniqueWithoutTagsInputSchema),z.lazy(() => TransactionUpdateWithWhereUniqueWithoutTagsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TransactionUpdateManyWithWhereWithoutTagsInputSchema),z.lazy(() => TransactionUpdateManyWithWhereWithoutTagsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TransactionScalarWhereInputSchema),z.lazy(() => TransactionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AccountCreateNestedOneWithoutTransactionsInputSchema: z.ZodType<Prisma.AccountCreateNestedOneWithoutTransactionsInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutTransactionsInputSchema),z.lazy(() => AccountUncheckedCreateWithoutTransactionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AccountCreateOrConnectWithoutTransactionsInputSchema).optional(),
  connect: z.lazy(() => AccountWhereUniqueInputSchema).optional()
}).strict();

export const UserCreateNestedOneWithoutTransactionsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutTransactionsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutTransactionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutTransactionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTransactionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const CategoryCreateNestedOneWithoutTransactionsInputSchema: z.ZodType<Prisma.CategoryCreateNestedOneWithoutTransactionsInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutTransactionsInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutTransactionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutTransactionsInputSchema).optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputSchema).optional()
}).strict();

export const TagCreateNestedManyWithoutTransactionsInputSchema: z.ZodType<Prisma.TagCreateNestedManyWithoutTransactionsInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutTransactionsInputSchema),z.lazy(() => TagCreateWithoutTransactionsInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutTransactionsInputSchema),z.lazy(() => TagUncheckedCreateWithoutTransactionsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutTransactionsInputSchema),z.lazy(() => TagCreateOrConnectWithoutTransactionsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TransactionCreatetagIdsInputSchema: z.ZodType<Prisma.TransactionCreatetagIdsInput> = z.object({
  set: z.string().array()
}).strict();

export const TagUncheckedCreateNestedManyWithoutTransactionsInputSchema: z.ZodType<Prisma.TagUncheckedCreateNestedManyWithoutTransactionsInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutTransactionsInputSchema),z.lazy(() => TagCreateWithoutTransactionsInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutTransactionsInputSchema),z.lazy(() => TagUncheckedCreateWithoutTransactionsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutTransactionsInputSchema),z.lazy(() => TagCreateOrConnectWithoutTransactionsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const EnumTransactionTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumTransactionTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => TransactionTypeSchema).optional()
}).strict();

export const EnumRecurrenceTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumRecurrenceTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => RecurrenceTypeSchema).optional()
}).strict();

export const AccountUpdateOneRequiredWithoutTransactionsNestedInputSchema: z.ZodType<Prisma.AccountUpdateOneRequiredWithoutTransactionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutTransactionsInputSchema),z.lazy(() => AccountUncheckedCreateWithoutTransactionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AccountCreateOrConnectWithoutTransactionsInputSchema).optional(),
  upsert: z.lazy(() => AccountUpsertWithoutTransactionsInputSchema).optional(),
  connect: z.lazy(() => AccountWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AccountUpdateToOneWithWhereWithoutTransactionsInputSchema),z.lazy(() => AccountUpdateWithoutTransactionsInputSchema),z.lazy(() => AccountUncheckedUpdateWithoutTransactionsInputSchema) ]).optional(),
}).strict();

export const UserUpdateOneRequiredWithoutTransactionsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutTransactionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutTransactionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutTransactionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTransactionsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutTransactionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutTransactionsInputSchema),z.lazy(() => UserUpdateWithoutTransactionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutTransactionsInputSchema) ]).optional(),
}).strict();

export const CategoryUpdateOneWithoutTransactionsNestedInputSchema: z.ZodType<Prisma.CategoryUpdateOneWithoutTransactionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutTransactionsInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutTransactionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutTransactionsInputSchema).optional(),
  upsert: z.lazy(() => CategoryUpsertWithoutTransactionsInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.union([ z.boolean(),z.lazy(() => CategoryWhereInputSchema) ]).optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CategoryUpdateToOneWithWhereWithoutTransactionsInputSchema),z.lazy(() => CategoryUpdateWithoutTransactionsInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutTransactionsInputSchema) ]).optional(),
}).strict();

export const TagUpdateManyWithoutTransactionsNestedInputSchema: z.ZodType<Prisma.TagUpdateManyWithoutTransactionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutTransactionsInputSchema),z.lazy(() => TagCreateWithoutTransactionsInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutTransactionsInputSchema),z.lazy(() => TagUncheckedCreateWithoutTransactionsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutTransactionsInputSchema),z.lazy(() => TagCreateOrConnectWithoutTransactionsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TagUpsertWithWhereUniqueWithoutTransactionsInputSchema),z.lazy(() => TagUpsertWithWhereUniqueWithoutTransactionsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TagUpdateWithWhereUniqueWithoutTransactionsInputSchema),z.lazy(() => TagUpdateWithWhereUniqueWithoutTransactionsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TagUpdateManyWithWhereWithoutTransactionsInputSchema),z.lazy(() => TagUpdateManyWithWhereWithoutTransactionsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TagScalarWhereInputSchema),z.lazy(() => TagScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TransactionUpdatetagIdsInputSchema: z.ZodType<Prisma.TransactionUpdatetagIdsInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export const TagUncheckedUpdateManyWithoutTransactionsNestedInputSchema: z.ZodType<Prisma.TagUncheckedUpdateManyWithoutTransactionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutTransactionsInputSchema),z.lazy(() => TagCreateWithoutTransactionsInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutTransactionsInputSchema),z.lazy(() => TagUncheckedCreateWithoutTransactionsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutTransactionsInputSchema),z.lazy(() => TagCreateOrConnectWithoutTransactionsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TagUpsertWithWhereUniqueWithoutTransactionsInputSchema),z.lazy(() => TagUpsertWithWhereUniqueWithoutTransactionsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TagUpdateWithWhereUniqueWithoutTransactionsInputSchema),z.lazy(() => TagUpdateWithWhereUniqueWithoutTransactionsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TagUpdateManyWithWhereWithoutTransactionsInputSchema),z.lazy(() => TagUpdateManyWithWhereWithoutTransactionsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TagScalarWhereInputSchema),z.lazy(() => TagScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AccountCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TransactionCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.TransactionCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => TransactionCreateWithoutUserInputSchema),z.lazy(() => TransactionCreateWithoutUserInputSchema).array(),z.lazy(() => TransactionUncheckedCreateWithoutUserInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TransactionCreateOrConnectWithoutUserInputSchema),z.lazy(() => TransactionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TransactionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BudgetCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.BudgetCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => BudgetCreateWithoutUserInputSchema),z.lazy(() => BudgetCreateWithoutUserInputSchema).array(),z.lazy(() => BudgetUncheckedCreateWithoutUserInputSchema),z.lazy(() => BudgetUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BudgetCreateOrConnectWithoutUserInputSchema),z.lazy(() => BudgetCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BudgetCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BudgetWhereUniqueInputSchema),z.lazy(() => BudgetWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AccountUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TransactionUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.TransactionUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => TransactionCreateWithoutUserInputSchema),z.lazy(() => TransactionCreateWithoutUserInputSchema).array(),z.lazy(() => TransactionUncheckedCreateWithoutUserInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TransactionCreateOrConnectWithoutUserInputSchema),z.lazy(() => TransactionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TransactionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BudgetUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.BudgetUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => BudgetCreateWithoutUserInputSchema),z.lazy(() => BudgetCreateWithoutUserInputSchema).array(),z.lazy(() => BudgetUncheckedCreateWithoutUserInputSchema),z.lazy(() => BudgetUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BudgetCreateOrConnectWithoutUserInputSchema),z.lazy(() => BudgetCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BudgetCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BudgetWhereUniqueInputSchema),z.lazy(() => BudgetWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AccountUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AccountUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TransactionUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.TransactionUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => TransactionCreateWithoutUserInputSchema),z.lazy(() => TransactionCreateWithoutUserInputSchema).array(),z.lazy(() => TransactionUncheckedCreateWithoutUserInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TransactionCreateOrConnectWithoutUserInputSchema),z.lazy(() => TransactionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TransactionUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => TransactionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TransactionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TransactionUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => TransactionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TransactionUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => TransactionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TransactionScalarWhereInputSchema),z.lazy(() => TransactionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const BudgetUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.BudgetUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => BudgetCreateWithoutUserInputSchema),z.lazy(() => BudgetCreateWithoutUserInputSchema).array(),z.lazy(() => BudgetUncheckedCreateWithoutUserInputSchema),z.lazy(() => BudgetUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BudgetCreateOrConnectWithoutUserInputSchema),z.lazy(() => BudgetCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BudgetUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => BudgetUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BudgetCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BudgetWhereUniqueInputSchema),z.lazy(() => BudgetWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BudgetWhereUniqueInputSchema),z.lazy(() => BudgetWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BudgetWhereUniqueInputSchema),z.lazy(() => BudgetWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BudgetWhereUniqueInputSchema),z.lazy(() => BudgetWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BudgetUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => BudgetUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BudgetUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => BudgetUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BudgetScalarWhereInputSchema),z.lazy(() => BudgetScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AccountUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TransactionUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.TransactionUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => TransactionCreateWithoutUserInputSchema),z.lazy(() => TransactionCreateWithoutUserInputSchema).array(),z.lazy(() => TransactionUncheckedCreateWithoutUserInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TransactionCreateOrConnectWithoutUserInputSchema),z.lazy(() => TransactionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TransactionUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => TransactionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TransactionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TransactionWhereUniqueInputSchema),z.lazy(() => TransactionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TransactionUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => TransactionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TransactionUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => TransactionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TransactionScalarWhereInputSchema),z.lazy(() => TransactionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const BudgetUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.BudgetUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => BudgetCreateWithoutUserInputSchema),z.lazy(() => BudgetCreateWithoutUserInputSchema).array(),z.lazy(() => BudgetUncheckedCreateWithoutUserInputSchema),z.lazy(() => BudgetUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BudgetCreateOrConnectWithoutUserInputSchema),z.lazy(() => BudgetCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BudgetUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => BudgetUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BudgetCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BudgetWhereUniqueInputSchema),z.lazy(() => BudgetWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BudgetWhereUniqueInputSchema),z.lazy(() => BudgetWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BudgetWhereUniqueInputSchema),z.lazy(() => BudgetWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BudgetWhereUniqueInputSchema),z.lazy(() => BudgetWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BudgetUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => BudgetUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BudgetUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => BudgetUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BudgetScalarWhereInputSchema),z.lazy(() => BudgetScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedEnumAccountTypeFilterSchema: z.ZodType<Prisma.NestedEnumAccountTypeFilter> = z.object({
  equals: z.lazy(() => AccountTypeSchema).optional(),
  in: z.lazy(() => AccountTypeSchema).array().optional(),
  notIn: z.lazy(() => AccountTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => AccountTypeSchema),z.lazy(() => NestedEnumAccountTypeFilterSchema) ]).optional(),
}).strict();

export const NestedEnumCurrencyFilterSchema: z.ZodType<Prisma.NestedEnumCurrencyFilter> = z.object({
  equals: z.lazy(() => CurrencySchema).optional(),
  in: z.lazy(() => CurrencySchema).array().optional(),
  notIn: z.lazy(() => CurrencySchema).array().optional(),
  not: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => NestedEnumCurrencyFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedEnumAccountTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumAccountTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => AccountTypeSchema).optional(),
  in: z.lazy(() => AccountTypeSchema).array().optional(),
  notIn: z.lazy(() => AccountTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => AccountTypeSchema),z.lazy(() => NestedEnumAccountTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumAccountTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumAccountTypeFilterSchema).optional()
}).strict();

export const NestedEnumCurrencyWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumCurrencyWithAggregatesFilter> = z.object({
  equals: z.lazy(() => CurrencySchema).optional(),
  in: z.lazy(() => CurrencySchema).array().optional(),
  notIn: z.lazy(() => CurrencySchema).array().optional(),
  not: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => NestedEnumCurrencyWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumCurrencyFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumCurrencyFilterSchema).optional()
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedFloatWithAggregatesFilterSchema: z.ZodType<Prisma.NestedFloatWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional()
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const NestedEnumTransactionTypeFilterSchema: z.ZodType<Prisma.NestedEnumTransactionTypeFilter> = z.object({
  equals: z.lazy(() => TransactionTypeSchema).optional(),
  in: z.lazy(() => TransactionTypeSchema).array().optional(),
  notIn: z.lazy(() => TransactionTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => TransactionTypeSchema),z.lazy(() => NestedEnumTransactionTypeFilterSchema) ]).optional(),
}).strict();

export const NestedEnumRecurrenceTypeFilterSchema: z.ZodType<Prisma.NestedEnumRecurrenceTypeFilter> = z.object({
  equals: z.lazy(() => RecurrenceTypeSchema).optional(),
  in: z.lazy(() => RecurrenceTypeSchema).array().optional(),
  notIn: z.lazy(() => RecurrenceTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => RecurrenceTypeSchema),z.lazy(() => NestedEnumRecurrenceTypeFilterSchema) ]).optional(),
}).strict();

export const NestedEnumTransactionTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumTransactionTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => TransactionTypeSchema).optional(),
  in: z.lazy(() => TransactionTypeSchema).array().optional(),
  notIn: z.lazy(() => TransactionTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => TransactionTypeSchema),z.lazy(() => NestedEnumTransactionTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumTransactionTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumTransactionTypeFilterSchema).optional()
}).strict();

export const NestedEnumRecurrenceTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumRecurrenceTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RecurrenceTypeSchema).optional(),
  in: z.lazy(() => RecurrenceTypeSchema).array().optional(),
  notIn: z.lazy(() => RecurrenceTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => RecurrenceTypeSchema),z.lazy(() => NestedEnumRecurrenceTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRecurrenceTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRecurrenceTypeFilterSchema).optional()
}).strict();

export const UserCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateWithoutAccountsInput> = z.object({
  id: z.string().optional(),
  email: z.string(),
  name: z.string().optional().nullable(),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  transactions: z.lazy(() => TransactionCreateNestedManyWithoutUserInputSchema).optional(),
  budgets: z.lazy(() => BudgetCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput> = z.object({
  id: z.string().optional(),
  email: z.string(),
  name: z.string().optional().nullable(),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  transactions: z.lazy(() => TransactionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  budgets: z.lazy(() => BudgetUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAccountsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]),
}).strict();

export const TransactionCreateWithoutAccountInputSchema: z.ZodType<Prisma.TransactionCreateWithoutAccountInput> = z.object({
  id: z.string().optional(),
  amount: z.number(),
  currency: z.lazy(() => CurrencySchema),
  type: z.lazy(() => TransactionTypeSchema),
  description: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  customIcon: z.string().optional().nullable(),
  date: z.coerce.date(),
  recurrence: z.lazy(() => RecurrenceTypeSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutTransactionsInputSchema),
  category: z.lazy(() => CategoryCreateNestedOneWithoutTransactionsInputSchema).optional(),
  tags: z.lazy(() => TagCreateNestedManyWithoutTransactionsInputSchema).optional()
}).strict();

export const TransactionUncheckedCreateWithoutAccountInputSchema: z.ZodType<Prisma.TransactionUncheckedCreateWithoutAccountInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  amount: z.number(),
  currency: z.lazy(() => CurrencySchema),
  type: z.lazy(() => TransactionTypeSchema),
  description: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  customIcon: z.string().optional().nullable(),
  date: z.coerce.date(),
  recurrence: z.lazy(() => RecurrenceTypeSchema).optional(),
  categoryId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tagIds: z.union([ z.lazy(() => TransactionCreatetagIdsInputSchema),z.string().array() ]).optional(),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutTransactionsInputSchema).optional()
}).strict();

export const TransactionCreateOrConnectWithoutAccountInputSchema: z.ZodType<Prisma.TransactionCreateOrConnectWithoutAccountInput> = z.object({
  where: z.lazy(() => TransactionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TransactionCreateWithoutAccountInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutAccountInputSchema) ]),
}).strict();

export const TransactionCreateManyAccountInputEnvelopeSchema: z.ZodType<Prisma.TransactionCreateManyAccountInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TransactionCreateManyAccountInputSchema),z.lazy(() => TransactionCreateManyAccountInputSchema).array() ]),
}).strict();

export const UserUpsertWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpsertWithoutAccountsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAccountsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema) ]),
}).strict();

export const UserUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpdateWithoutAccountsInput> = z.object({
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  transactions: z.lazy(() => TransactionUpdateManyWithoutUserNestedInputSchema).optional(),
  budgets: z.lazy(() => BudgetUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutAccountsInput> = z.object({
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  transactions: z.lazy(() => TransactionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  budgets: z.lazy(() => BudgetUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const TransactionUpsertWithWhereUniqueWithoutAccountInputSchema: z.ZodType<Prisma.TransactionUpsertWithWhereUniqueWithoutAccountInput> = z.object({
  where: z.lazy(() => TransactionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TransactionUpdateWithoutAccountInputSchema),z.lazy(() => TransactionUncheckedUpdateWithoutAccountInputSchema) ]),
  create: z.union([ z.lazy(() => TransactionCreateWithoutAccountInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutAccountInputSchema) ]),
}).strict();

export const TransactionUpdateWithWhereUniqueWithoutAccountInputSchema: z.ZodType<Prisma.TransactionUpdateWithWhereUniqueWithoutAccountInput> = z.object({
  where: z.lazy(() => TransactionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TransactionUpdateWithoutAccountInputSchema),z.lazy(() => TransactionUncheckedUpdateWithoutAccountInputSchema) ]),
}).strict();

export const TransactionUpdateManyWithWhereWithoutAccountInputSchema: z.ZodType<Prisma.TransactionUpdateManyWithWhereWithoutAccountInput> = z.object({
  where: z.lazy(() => TransactionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TransactionUpdateManyMutationInputSchema),z.lazy(() => TransactionUncheckedUpdateManyWithoutAccountInputSchema) ]),
}).strict();

export const TransactionScalarWhereInputSchema: z.ZodType<Prisma.TransactionScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TransactionScalarWhereInputSchema),z.lazy(() => TransactionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TransactionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TransactionScalarWhereInputSchema),z.lazy(() => TransactionScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  accountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  amount: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  currency: z.union([ z.lazy(() => EnumCurrencyFilterSchema),z.lazy(() => CurrencySchema) ]).optional(),
  type: z.union([ z.lazy(() => EnumTransactionTypeFilterSchema),z.lazy(() => TransactionTypeSchema) ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  customIcon: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  recurrence: z.union([ z.lazy(() => EnumRecurrenceTypeFilterSchema),z.lazy(() => RecurrenceTypeSchema) ]).optional(),
  categoryId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  tagIds: z.lazy(() => StringNullableListFilterSchema).optional()
}).strict();

export const UserCreateWithoutBudgetsInputSchema: z.ZodType<Prisma.UserCreateWithoutBudgetsInput> = z.object({
  id: z.string().optional(),
  email: z.string(),
  name: z.string().optional().nullable(),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  transactions: z.lazy(() => TransactionCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutBudgetsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutBudgetsInput> = z.object({
  id: z.string().optional(),
  email: z.string(),
  name: z.string().optional().nullable(),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  transactions: z.lazy(() => TransactionUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutBudgetsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutBudgetsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutBudgetsInputSchema),z.lazy(() => UserUncheckedCreateWithoutBudgetsInputSchema) ]),
}).strict();

export const CategoryCreateWithoutBudgetInputSchema: z.ZodType<Prisma.CategoryCreateWithoutBudgetInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  icon: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  parentCategory: z.lazy(() => CategoryCreateNestedOneWithoutSubcategoriesInputSchema).optional(),
  subcategories: z.lazy(() => CategoryCreateNestedManyWithoutParentCategoryInputSchema).optional(),
  transactions: z.lazy(() => TransactionCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict();

export const CategoryUncheckedCreateWithoutBudgetInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateWithoutBudgetInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  icon: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  parentCategoryId: z.string().optional().nullable(),
  subcategories: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutParentCategoryInputSchema).optional(),
  transactions: z.lazy(() => TransactionUncheckedCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict();

export const CategoryCreateOrConnectWithoutBudgetInputSchema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutBudgetInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CategoryCreateWithoutBudgetInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutBudgetInputSchema) ]),
}).strict();

export const UserUpsertWithoutBudgetsInputSchema: z.ZodType<Prisma.UserUpsertWithoutBudgetsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutBudgetsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutBudgetsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutBudgetsInputSchema),z.lazy(() => UserUncheckedCreateWithoutBudgetsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutBudgetsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBudgetsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutBudgetsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutBudgetsInputSchema) ]),
}).strict();

export const UserUpdateWithoutBudgetsInputSchema: z.ZodType<Prisma.UserUpdateWithoutBudgetsInput> = z.object({
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  transactions: z.lazy(() => TransactionUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutBudgetsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutBudgetsInput> = z.object({
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  transactions: z.lazy(() => TransactionUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const CategoryUpsertWithoutBudgetInputSchema: z.ZodType<Prisma.CategoryUpsertWithoutBudgetInput> = z.object({
  update: z.union([ z.lazy(() => CategoryUpdateWithoutBudgetInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutBudgetInputSchema) ]),
  create: z.union([ z.lazy(() => CategoryCreateWithoutBudgetInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutBudgetInputSchema) ]),
  where: z.lazy(() => CategoryWhereInputSchema).optional()
}).strict();

export const CategoryUpdateToOneWithWhereWithoutBudgetInputSchema: z.ZodType<Prisma.CategoryUpdateToOneWithWhereWithoutBudgetInput> = z.object({
  where: z.lazy(() => CategoryWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CategoryUpdateWithoutBudgetInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutBudgetInputSchema) ]),
}).strict();

export const CategoryUpdateWithoutBudgetInputSchema: z.ZodType<Prisma.CategoryUpdateWithoutBudgetInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  parentCategory: z.lazy(() => CategoryUpdateOneWithoutSubcategoriesNestedInputSchema).optional(),
  subcategories: z.lazy(() => CategoryUpdateManyWithoutParentCategoryNestedInputSchema).optional(),
  transactions: z.lazy(() => TransactionUpdateManyWithoutCategoryNestedInputSchema).optional()
}).strict();

export const CategoryUncheckedUpdateWithoutBudgetInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateWithoutBudgetInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  parentCategoryId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  subcategories: z.lazy(() => CategoryUncheckedUpdateManyWithoutParentCategoryNestedInputSchema).optional(),
  transactions: z.lazy(() => TransactionUncheckedUpdateManyWithoutCategoryNestedInputSchema).optional()
}).strict();

export const CategoryCreateWithoutSubcategoriesInputSchema: z.ZodType<Prisma.CategoryCreateWithoutSubcategoriesInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  icon: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  parentCategory: z.lazy(() => CategoryCreateNestedOneWithoutSubcategoriesInputSchema).optional(),
  transactions: z.lazy(() => TransactionCreateNestedManyWithoutCategoryInputSchema).optional(),
  Budget: z.lazy(() => BudgetCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict();

export const CategoryUncheckedCreateWithoutSubcategoriesInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateWithoutSubcategoriesInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  icon: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  parentCategoryId: z.string().optional().nullable(),
  transactions: z.lazy(() => TransactionUncheckedCreateNestedManyWithoutCategoryInputSchema).optional(),
  Budget: z.lazy(() => BudgetUncheckedCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict();

export const CategoryCreateOrConnectWithoutSubcategoriesInputSchema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutSubcategoriesInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CategoryCreateWithoutSubcategoriesInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutSubcategoriesInputSchema) ]),
}).strict();

export const CategoryCreateWithoutParentCategoryInputSchema: z.ZodType<Prisma.CategoryCreateWithoutParentCategoryInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  icon: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  subcategories: z.lazy(() => CategoryCreateNestedManyWithoutParentCategoryInputSchema).optional(),
  transactions: z.lazy(() => TransactionCreateNestedManyWithoutCategoryInputSchema).optional(),
  Budget: z.lazy(() => BudgetCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict();

export const CategoryUncheckedCreateWithoutParentCategoryInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateWithoutParentCategoryInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  icon: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  subcategories: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutParentCategoryInputSchema).optional(),
  transactions: z.lazy(() => TransactionUncheckedCreateNestedManyWithoutCategoryInputSchema).optional(),
  Budget: z.lazy(() => BudgetUncheckedCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict();

export const CategoryCreateOrConnectWithoutParentCategoryInputSchema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutParentCategoryInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CategoryCreateWithoutParentCategoryInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutParentCategoryInputSchema) ]),
}).strict();

export const CategoryCreateManyParentCategoryInputEnvelopeSchema: z.ZodType<Prisma.CategoryCreateManyParentCategoryInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CategoryCreateManyParentCategoryInputSchema),z.lazy(() => CategoryCreateManyParentCategoryInputSchema).array() ]),
}).strict();

export const TransactionCreateWithoutCategoryInputSchema: z.ZodType<Prisma.TransactionCreateWithoutCategoryInput> = z.object({
  id: z.string().optional(),
  amount: z.number(),
  currency: z.lazy(() => CurrencySchema),
  type: z.lazy(() => TransactionTypeSchema),
  description: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  customIcon: z.string().optional().nullable(),
  date: z.coerce.date(),
  recurrence: z.lazy(() => RecurrenceTypeSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  account: z.lazy(() => AccountCreateNestedOneWithoutTransactionsInputSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutTransactionsInputSchema),
  tags: z.lazy(() => TagCreateNestedManyWithoutTransactionsInputSchema).optional()
}).strict();

export const TransactionUncheckedCreateWithoutCategoryInputSchema: z.ZodType<Prisma.TransactionUncheckedCreateWithoutCategoryInput> = z.object({
  id: z.string().optional(),
  accountId: z.string(),
  userId: z.string(),
  amount: z.number(),
  currency: z.lazy(() => CurrencySchema),
  type: z.lazy(() => TransactionTypeSchema),
  description: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  customIcon: z.string().optional().nullable(),
  date: z.coerce.date(),
  recurrence: z.lazy(() => RecurrenceTypeSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tagIds: z.union([ z.lazy(() => TransactionCreatetagIdsInputSchema),z.string().array() ]).optional(),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutTransactionsInputSchema).optional()
}).strict();

export const TransactionCreateOrConnectWithoutCategoryInputSchema: z.ZodType<Prisma.TransactionCreateOrConnectWithoutCategoryInput> = z.object({
  where: z.lazy(() => TransactionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TransactionCreateWithoutCategoryInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutCategoryInputSchema) ]),
}).strict();

export const TransactionCreateManyCategoryInputEnvelopeSchema: z.ZodType<Prisma.TransactionCreateManyCategoryInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TransactionCreateManyCategoryInputSchema),z.lazy(() => TransactionCreateManyCategoryInputSchema).array() ]),
}).strict();

export const BudgetCreateWithoutCategoryInputSchema: z.ZodType<Prisma.BudgetCreateWithoutCategoryInput> = z.object({
  id: z.string().optional(),
  periodStart: z.coerce.date(),
  periodEnd: z.coerce.date(),
  limit: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutBudgetsInputSchema)
}).strict();

export const BudgetUncheckedCreateWithoutCategoryInputSchema: z.ZodType<Prisma.BudgetUncheckedCreateWithoutCategoryInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  periodStart: z.coerce.date(),
  periodEnd: z.coerce.date(),
  limit: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const BudgetCreateOrConnectWithoutCategoryInputSchema: z.ZodType<Prisma.BudgetCreateOrConnectWithoutCategoryInput> = z.object({
  where: z.lazy(() => BudgetWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BudgetCreateWithoutCategoryInputSchema),z.lazy(() => BudgetUncheckedCreateWithoutCategoryInputSchema) ]),
}).strict();

export const BudgetCreateManyCategoryInputEnvelopeSchema: z.ZodType<Prisma.BudgetCreateManyCategoryInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BudgetCreateManyCategoryInputSchema),z.lazy(() => BudgetCreateManyCategoryInputSchema).array() ]),
}).strict();

export const CategoryUpsertWithoutSubcategoriesInputSchema: z.ZodType<Prisma.CategoryUpsertWithoutSubcategoriesInput> = z.object({
  update: z.union([ z.lazy(() => CategoryUpdateWithoutSubcategoriesInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutSubcategoriesInputSchema) ]),
  create: z.union([ z.lazy(() => CategoryCreateWithoutSubcategoriesInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutSubcategoriesInputSchema) ]),
  where: z.lazy(() => CategoryWhereInputSchema).optional()
}).strict();

export const CategoryUpdateToOneWithWhereWithoutSubcategoriesInputSchema: z.ZodType<Prisma.CategoryUpdateToOneWithWhereWithoutSubcategoriesInput> = z.object({
  where: z.lazy(() => CategoryWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CategoryUpdateWithoutSubcategoriesInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutSubcategoriesInputSchema) ]),
}).strict();

export const CategoryUpdateWithoutSubcategoriesInputSchema: z.ZodType<Prisma.CategoryUpdateWithoutSubcategoriesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  parentCategory: z.lazy(() => CategoryUpdateOneWithoutSubcategoriesNestedInputSchema).optional(),
  transactions: z.lazy(() => TransactionUpdateManyWithoutCategoryNestedInputSchema).optional(),
  Budget: z.lazy(() => BudgetUpdateManyWithoutCategoryNestedInputSchema).optional()
}).strict();

export const CategoryUncheckedUpdateWithoutSubcategoriesInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateWithoutSubcategoriesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  parentCategoryId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  transactions: z.lazy(() => TransactionUncheckedUpdateManyWithoutCategoryNestedInputSchema).optional(),
  Budget: z.lazy(() => BudgetUncheckedUpdateManyWithoutCategoryNestedInputSchema).optional()
}).strict();

export const CategoryUpsertWithWhereUniqueWithoutParentCategoryInputSchema: z.ZodType<Prisma.CategoryUpsertWithWhereUniqueWithoutParentCategoryInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CategoryUpdateWithoutParentCategoryInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutParentCategoryInputSchema) ]),
  create: z.union([ z.lazy(() => CategoryCreateWithoutParentCategoryInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutParentCategoryInputSchema) ]),
}).strict();

export const CategoryUpdateWithWhereUniqueWithoutParentCategoryInputSchema: z.ZodType<Prisma.CategoryUpdateWithWhereUniqueWithoutParentCategoryInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CategoryUpdateWithoutParentCategoryInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutParentCategoryInputSchema) ]),
}).strict();

export const CategoryUpdateManyWithWhereWithoutParentCategoryInputSchema: z.ZodType<Prisma.CategoryUpdateManyWithWhereWithoutParentCategoryInput> = z.object({
  where: z.lazy(() => CategoryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CategoryUpdateManyMutationInputSchema),z.lazy(() => CategoryUncheckedUpdateManyWithoutParentCategoryInputSchema) ]),
}).strict();

export const CategoryScalarWhereInputSchema: z.ZodType<Prisma.CategoryScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CategoryScalarWhereInputSchema),z.lazy(() => CategoryScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CategoryScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CategoryScalarWhereInputSchema),z.lazy(() => CategoryScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  icon: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  color: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  parentCategoryId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const TransactionUpsertWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.TransactionUpsertWithWhereUniqueWithoutCategoryInput> = z.object({
  where: z.lazy(() => TransactionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TransactionUpdateWithoutCategoryInputSchema),z.lazy(() => TransactionUncheckedUpdateWithoutCategoryInputSchema) ]),
  create: z.union([ z.lazy(() => TransactionCreateWithoutCategoryInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutCategoryInputSchema) ]),
}).strict();

export const TransactionUpdateWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.TransactionUpdateWithWhereUniqueWithoutCategoryInput> = z.object({
  where: z.lazy(() => TransactionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TransactionUpdateWithoutCategoryInputSchema),z.lazy(() => TransactionUncheckedUpdateWithoutCategoryInputSchema) ]),
}).strict();

export const TransactionUpdateManyWithWhereWithoutCategoryInputSchema: z.ZodType<Prisma.TransactionUpdateManyWithWhereWithoutCategoryInput> = z.object({
  where: z.lazy(() => TransactionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TransactionUpdateManyMutationInputSchema),z.lazy(() => TransactionUncheckedUpdateManyWithoutCategoryInputSchema) ]),
}).strict();

export const BudgetUpsertWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.BudgetUpsertWithWhereUniqueWithoutCategoryInput> = z.object({
  where: z.lazy(() => BudgetWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BudgetUpdateWithoutCategoryInputSchema),z.lazy(() => BudgetUncheckedUpdateWithoutCategoryInputSchema) ]),
  create: z.union([ z.lazy(() => BudgetCreateWithoutCategoryInputSchema),z.lazy(() => BudgetUncheckedCreateWithoutCategoryInputSchema) ]),
}).strict();

export const BudgetUpdateWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.BudgetUpdateWithWhereUniqueWithoutCategoryInput> = z.object({
  where: z.lazy(() => BudgetWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BudgetUpdateWithoutCategoryInputSchema),z.lazy(() => BudgetUncheckedUpdateWithoutCategoryInputSchema) ]),
}).strict();

export const BudgetUpdateManyWithWhereWithoutCategoryInputSchema: z.ZodType<Prisma.BudgetUpdateManyWithWhereWithoutCategoryInput> = z.object({
  where: z.lazy(() => BudgetScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BudgetUpdateManyMutationInputSchema),z.lazy(() => BudgetUncheckedUpdateManyWithoutCategoryInputSchema) ]),
}).strict();

export const BudgetScalarWhereInputSchema: z.ZodType<Prisma.BudgetScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BudgetScalarWhereInputSchema),z.lazy(() => BudgetScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BudgetScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BudgetScalarWhereInputSchema),z.lazy(() => BudgetScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  categoryId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  periodStart: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  periodEnd: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  limit: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const TransactionCreateWithoutTagsInputSchema: z.ZodType<Prisma.TransactionCreateWithoutTagsInput> = z.object({
  id: z.string().optional(),
  amount: z.number(),
  currency: z.lazy(() => CurrencySchema),
  type: z.lazy(() => TransactionTypeSchema),
  description: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  customIcon: z.string().optional().nullable(),
  date: z.coerce.date(),
  recurrence: z.lazy(() => RecurrenceTypeSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  account: z.lazy(() => AccountCreateNestedOneWithoutTransactionsInputSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutTransactionsInputSchema),
  category: z.lazy(() => CategoryCreateNestedOneWithoutTransactionsInputSchema).optional()
}).strict();

export const TransactionUncheckedCreateWithoutTagsInputSchema: z.ZodType<Prisma.TransactionUncheckedCreateWithoutTagsInput> = z.object({
  id: z.string().optional(),
  accountId: z.string(),
  userId: z.string(),
  amount: z.number(),
  currency: z.lazy(() => CurrencySchema),
  type: z.lazy(() => TransactionTypeSchema),
  description: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  customIcon: z.string().optional().nullable(),
  date: z.coerce.date(),
  recurrence: z.lazy(() => RecurrenceTypeSchema).optional(),
  categoryId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tagIds: z.union([ z.lazy(() => TransactionCreatetagIdsInputSchema),z.string().array() ]).optional(),
}).strict();

export const TransactionCreateOrConnectWithoutTagsInputSchema: z.ZodType<Prisma.TransactionCreateOrConnectWithoutTagsInput> = z.object({
  where: z.lazy(() => TransactionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TransactionCreateWithoutTagsInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();

export const TransactionUpsertWithWhereUniqueWithoutTagsInputSchema: z.ZodType<Prisma.TransactionUpsertWithWhereUniqueWithoutTagsInput> = z.object({
  where: z.lazy(() => TransactionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TransactionUpdateWithoutTagsInputSchema),z.lazy(() => TransactionUncheckedUpdateWithoutTagsInputSchema) ]),
  create: z.union([ z.lazy(() => TransactionCreateWithoutTagsInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();

export const TransactionUpdateWithWhereUniqueWithoutTagsInputSchema: z.ZodType<Prisma.TransactionUpdateWithWhereUniqueWithoutTagsInput> = z.object({
  where: z.lazy(() => TransactionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TransactionUpdateWithoutTagsInputSchema),z.lazy(() => TransactionUncheckedUpdateWithoutTagsInputSchema) ]),
}).strict();

export const TransactionUpdateManyWithWhereWithoutTagsInputSchema: z.ZodType<Prisma.TransactionUpdateManyWithWhereWithoutTagsInput> = z.object({
  where: z.lazy(() => TransactionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TransactionUpdateManyMutationInputSchema),z.lazy(() => TransactionUncheckedUpdateManyWithoutTagsInputSchema) ]),
}).strict();

export const AccountCreateWithoutTransactionsInputSchema: z.ZodType<Prisma.AccountCreateWithoutTransactionsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => AccountTypeSchema),
  currency: z.lazy(() => CurrencySchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutAccountsInputSchema)
}).strict();

export const AccountUncheckedCreateWithoutTransactionsInputSchema: z.ZodType<Prisma.AccountUncheckedCreateWithoutTransactionsInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  name: z.string(),
  type: z.lazy(() => AccountTypeSchema),
  currency: z.lazy(() => CurrencySchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AccountCreateOrConnectWithoutTransactionsInputSchema: z.ZodType<Prisma.AccountCreateOrConnectWithoutTransactionsInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AccountCreateWithoutTransactionsInputSchema),z.lazy(() => AccountUncheckedCreateWithoutTransactionsInputSchema) ]),
}).strict();

export const UserCreateWithoutTransactionsInputSchema: z.ZodType<Prisma.UserCreateWithoutTransactionsInput> = z.object({
  id: z.string().optional(),
  email: z.string(),
  name: z.string().optional().nullable(),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  budgets: z.lazy(() => BudgetCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutTransactionsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutTransactionsInput> = z.object({
  id: z.string().optional(),
  email: z.string(),
  name: z.string().optional().nullable(),
  password: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  budgets: z.lazy(() => BudgetUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutTransactionsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutTransactionsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutTransactionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutTransactionsInputSchema) ]),
}).strict();

export const CategoryCreateWithoutTransactionsInputSchema: z.ZodType<Prisma.CategoryCreateWithoutTransactionsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  icon: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  parentCategory: z.lazy(() => CategoryCreateNestedOneWithoutSubcategoriesInputSchema).optional(),
  subcategories: z.lazy(() => CategoryCreateNestedManyWithoutParentCategoryInputSchema).optional(),
  Budget: z.lazy(() => BudgetCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict();

export const CategoryUncheckedCreateWithoutTransactionsInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateWithoutTransactionsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  icon: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  parentCategoryId: z.string().optional().nullable(),
  subcategories: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutParentCategoryInputSchema).optional(),
  Budget: z.lazy(() => BudgetUncheckedCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict();

export const CategoryCreateOrConnectWithoutTransactionsInputSchema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutTransactionsInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CategoryCreateWithoutTransactionsInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutTransactionsInputSchema) ]),
}).strict();

export const TagCreateWithoutTransactionsInputSchema: z.ZodType<Prisma.TagCreateWithoutTransactionsInput> = z.object({
  id: z.string().optional(),
  name: z.string()
}).strict();

export const TagUncheckedCreateWithoutTransactionsInputSchema: z.ZodType<Prisma.TagUncheckedCreateWithoutTransactionsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  transactionIds: z.union([ z.lazy(() => TagCreatetransactionIdsInputSchema),z.string().array() ]).optional(),
}).strict();

export const TagCreateOrConnectWithoutTransactionsInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutTransactionsInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagCreateWithoutTransactionsInputSchema),z.lazy(() => TagUncheckedCreateWithoutTransactionsInputSchema) ]),
}).strict();

export const AccountUpsertWithoutTransactionsInputSchema: z.ZodType<Prisma.AccountUpsertWithoutTransactionsInput> = z.object({
  update: z.union([ z.lazy(() => AccountUpdateWithoutTransactionsInputSchema),z.lazy(() => AccountUncheckedUpdateWithoutTransactionsInputSchema) ]),
  create: z.union([ z.lazy(() => AccountCreateWithoutTransactionsInputSchema),z.lazy(() => AccountUncheckedCreateWithoutTransactionsInputSchema) ]),
  where: z.lazy(() => AccountWhereInputSchema).optional()
}).strict();

export const AccountUpdateToOneWithWhereWithoutTransactionsInputSchema: z.ZodType<Prisma.AccountUpdateToOneWithWhereWithoutTransactionsInput> = z.object({
  where: z.lazy(() => AccountWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AccountUpdateWithoutTransactionsInputSchema),z.lazy(() => AccountUncheckedUpdateWithoutTransactionsInputSchema) ]),
}).strict();

export const AccountUpdateWithoutTransactionsInputSchema: z.ZodType<Prisma.AccountUpdateWithoutTransactionsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => AccountTypeSchema),z.lazy(() => EnumAccountTypeFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => EnumCurrencyFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutAccountsNestedInputSchema).optional()
}).strict();

export const AccountUncheckedUpdateWithoutTransactionsInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateWithoutTransactionsInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => AccountTypeSchema),z.lazy(() => EnumAccountTypeFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => EnumCurrencyFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUpsertWithoutTransactionsInputSchema: z.ZodType<Prisma.UserUpsertWithoutTransactionsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutTransactionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutTransactionsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutTransactionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutTransactionsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutTransactionsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTransactionsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutTransactionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutTransactionsInputSchema) ]),
}).strict();

export const UserUpdateWithoutTransactionsInputSchema: z.ZodType<Prisma.UserUpdateWithoutTransactionsInput> = z.object({
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  budgets: z.lazy(() => BudgetUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutTransactionsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutTransactionsInput> = z.object({
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  budgets: z.lazy(() => BudgetUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const CategoryUpsertWithoutTransactionsInputSchema: z.ZodType<Prisma.CategoryUpsertWithoutTransactionsInput> = z.object({
  update: z.union([ z.lazy(() => CategoryUpdateWithoutTransactionsInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutTransactionsInputSchema) ]),
  create: z.union([ z.lazy(() => CategoryCreateWithoutTransactionsInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutTransactionsInputSchema) ]),
  where: z.lazy(() => CategoryWhereInputSchema).optional()
}).strict();

export const CategoryUpdateToOneWithWhereWithoutTransactionsInputSchema: z.ZodType<Prisma.CategoryUpdateToOneWithWhereWithoutTransactionsInput> = z.object({
  where: z.lazy(() => CategoryWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CategoryUpdateWithoutTransactionsInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutTransactionsInputSchema) ]),
}).strict();

export const CategoryUpdateWithoutTransactionsInputSchema: z.ZodType<Prisma.CategoryUpdateWithoutTransactionsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  parentCategory: z.lazy(() => CategoryUpdateOneWithoutSubcategoriesNestedInputSchema).optional(),
  subcategories: z.lazy(() => CategoryUpdateManyWithoutParentCategoryNestedInputSchema).optional(),
  Budget: z.lazy(() => BudgetUpdateManyWithoutCategoryNestedInputSchema).optional()
}).strict();

export const CategoryUncheckedUpdateWithoutTransactionsInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateWithoutTransactionsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  parentCategoryId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  subcategories: z.lazy(() => CategoryUncheckedUpdateManyWithoutParentCategoryNestedInputSchema).optional(),
  Budget: z.lazy(() => BudgetUncheckedUpdateManyWithoutCategoryNestedInputSchema).optional()
}).strict();

export const TagUpsertWithWhereUniqueWithoutTransactionsInputSchema: z.ZodType<Prisma.TagUpsertWithWhereUniqueWithoutTransactionsInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TagUpdateWithoutTransactionsInputSchema),z.lazy(() => TagUncheckedUpdateWithoutTransactionsInputSchema) ]),
  create: z.union([ z.lazy(() => TagCreateWithoutTransactionsInputSchema),z.lazy(() => TagUncheckedCreateWithoutTransactionsInputSchema) ]),
}).strict();

export const TagUpdateWithWhereUniqueWithoutTransactionsInputSchema: z.ZodType<Prisma.TagUpdateWithWhereUniqueWithoutTransactionsInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TagUpdateWithoutTransactionsInputSchema),z.lazy(() => TagUncheckedUpdateWithoutTransactionsInputSchema) ]),
}).strict();

export const TagUpdateManyWithWhereWithoutTransactionsInputSchema: z.ZodType<Prisma.TagUpdateManyWithWhereWithoutTransactionsInput> = z.object({
  where: z.lazy(() => TagScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TagUpdateManyMutationInputSchema),z.lazy(() => TagUncheckedUpdateManyWithoutTransactionsInputSchema) ]),
}).strict();

export const TagScalarWhereInputSchema: z.ZodType<Prisma.TagScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TagScalarWhereInputSchema),z.lazy(() => TagScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TagScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TagScalarWhereInputSchema),z.lazy(() => TagScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  transactionIds: z.lazy(() => StringNullableListFilterSchema).optional()
}).strict();

export const AccountCreateWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => AccountTypeSchema),
  currency: z.lazy(() => CurrencySchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  transactions: z.lazy(() => TransactionCreateNestedManyWithoutAccountInputSchema).optional()
}).strict();

export const AccountUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => AccountTypeSchema),
  currency: z.lazy(() => CurrencySchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  transactions: z.lazy(() => TransactionUncheckedCreateNestedManyWithoutAccountInputSchema).optional()
}).strict();

export const AccountCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const AccountCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.AccountCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AccountCreateManyUserInputSchema),z.lazy(() => AccountCreateManyUserInputSchema).array() ]),
}).strict();

export const TransactionCreateWithoutUserInputSchema: z.ZodType<Prisma.TransactionCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  amount: z.number(),
  currency: z.lazy(() => CurrencySchema),
  type: z.lazy(() => TransactionTypeSchema),
  description: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  customIcon: z.string().optional().nullable(),
  date: z.coerce.date(),
  recurrence: z.lazy(() => RecurrenceTypeSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  account: z.lazy(() => AccountCreateNestedOneWithoutTransactionsInputSchema),
  category: z.lazy(() => CategoryCreateNestedOneWithoutTransactionsInputSchema).optional(),
  tags: z.lazy(() => TagCreateNestedManyWithoutTransactionsInputSchema).optional()
}).strict();

export const TransactionUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.TransactionUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  accountId: z.string(),
  amount: z.number(),
  currency: z.lazy(() => CurrencySchema),
  type: z.lazy(() => TransactionTypeSchema),
  description: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  customIcon: z.string().optional().nullable(),
  date: z.coerce.date(),
  recurrence: z.lazy(() => RecurrenceTypeSchema).optional(),
  categoryId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tagIds: z.union([ z.lazy(() => TransactionCreatetagIdsInputSchema),z.string().array() ]).optional(),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutTransactionsInputSchema).optional()
}).strict();

export const TransactionCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.TransactionCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => TransactionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TransactionCreateWithoutUserInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const TransactionCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.TransactionCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TransactionCreateManyUserInputSchema),z.lazy(() => TransactionCreateManyUserInputSchema).array() ]),
}).strict();

export const BudgetCreateWithoutUserInputSchema: z.ZodType<Prisma.BudgetCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  periodStart: z.coerce.date(),
  periodEnd: z.coerce.date(),
  limit: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  category: z.lazy(() => CategoryCreateNestedOneWithoutBudgetInputSchema)
}).strict();

export const BudgetUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.BudgetUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  categoryId: z.string(),
  periodStart: z.coerce.date(),
  periodEnd: z.coerce.date(),
  limit: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const BudgetCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.BudgetCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => BudgetWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BudgetCreateWithoutUserInputSchema),z.lazy(() => BudgetUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const BudgetCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.BudgetCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BudgetCreateManyUserInputSchema),z.lazy(() => BudgetCreateManyUserInputSchema).array() ]),
}).strict();

export const AccountUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AccountUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AccountUpdateWithoutUserInputSchema),z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const AccountUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AccountUpdateWithoutUserInputSchema),z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const AccountUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => AccountScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AccountUpdateManyMutationInputSchema),z.lazy(() => AccountUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const AccountScalarWhereInputSchema: z.ZodType<Prisma.AccountScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumAccountTypeFilterSchema),z.lazy(() => AccountTypeSchema) ]).optional(),
  currency: z.union([ z.lazy(() => EnumCurrencyFilterSchema),z.lazy(() => CurrencySchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const TransactionUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.TransactionUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => TransactionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TransactionUpdateWithoutUserInputSchema),z.lazy(() => TransactionUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => TransactionCreateWithoutUserInputSchema),z.lazy(() => TransactionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const TransactionUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.TransactionUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => TransactionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TransactionUpdateWithoutUserInputSchema),z.lazy(() => TransactionUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const TransactionUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.TransactionUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => TransactionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TransactionUpdateManyMutationInputSchema),z.lazy(() => TransactionUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const BudgetUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.BudgetUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => BudgetWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BudgetUpdateWithoutUserInputSchema),z.lazy(() => BudgetUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => BudgetCreateWithoutUserInputSchema),z.lazy(() => BudgetUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const BudgetUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.BudgetUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => BudgetWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BudgetUpdateWithoutUserInputSchema),z.lazy(() => BudgetUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const BudgetUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.BudgetUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => BudgetScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BudgetUpdateManyMutationInputSchema),z.lazy(() => BudgetUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const TransactionCreateManyAccountInputSchema: z.ZodType<Prisma.TransactionCreateManyAccountInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  amount: z.number(),
  currency: z.lazy(() => CurrencySchema),
  type: z.lazy(() => TransactionTypeSchema),
  description: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  customIcon: z.string().optional().nullable(),
  date: z.coerce.date(),
  recurrence: z.lazy(() => RecurrenceTypeSchema).optional(),
  categoryId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tagIds: z.union([ z.lazy(() => TransactionCreatetagIdsInputSchema),z.string().array() ]).optional(),
}).strict();

export const TransactionUpdateWithoutAccountInputSchema: z.ZodType<Prisma.TransactionUpdateWithoutAccountInput> = z.object({
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => EnumCurrencyFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => TransactionTypeSchema),z.lazy(() => EnumTransactionTypeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  customIcon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  recurrence: z.union([ z.lazy(() => RecurrenceTypeSchema),z.lazy(() => EnumRecurrenceTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutTransactionsNestedInputSchema).optional(),
  category: z.lazy(() => CategoryUpdateOneWithoutTransactionsNestedInputSchema).optional(),
  tags: z.lazy(() => TagUpdateManyWithoutTransactionsNestedInputSchema).optional()
}).strict();

export const TransactionUncheckedUpdateWithoutAccountInputSchema: z.ZodType<Prisma.TransactionUncheckedUpdateWithoutAccountInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => EnumCurrencyFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => TransactionTypeSchema),z.lazy(() => EnumTransactionTypeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  customIcon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  recurrence: z.union([ z.lazy(() => RecurrenceTypeSchema),z.lazy(() => EnumRecurrenceTypeFieldUpdateOperationsInputSchema) ]).optional(),
  categoryId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tagIds: z.union([ z.lazy(() => TransactionUpdatetagIdsInputSchema),z.string().array() ]).optional(),
  tags: z.lazy(() => TagUncheckedUpdateManyWithoutTransactionsNestedInputSchema).optional()
}).strict();

export const TransactionUncheckedUpdateManyWithoutAccountInputSchema: z.ZodType<Prisma.TransactionUncheckedUpdateManyWithoutAccountInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => EnumCurrencyFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => TransactionTypeSchema),z.lazy(() => EnumTransactionTypeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  customIcon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  recurrence: z.union([ z.lazy(() => RecurrenceTypeSchema),z.lazy(() => EnumRecurrenceTypeFieldUpdateOperationsInputSchema) ]).optional(),
  categoryId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tagIds: z.union([ z.lazy(() => TransactionUpdatetagIdsInputSchema),z.string().array() ]).optional(),
}).strict();

export const CategoryCreateManyParentCategoryInputSchema: z.ZodType<Prisma.CategoryCreateManyParentCategoryInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  icon: z.string().optional().nullable(),
  color: z.string().optional().nullable()
}).strict();

export const TransactionCreateManyCategoryInputSchema: z.ZodType<Prisma.TransactionCreateManyCategoryInput> = z.object({
  id: z.string().optional(),
  accountId: z.string(),
  userId: z.string(),
  amount: z.number(),
  currency: z.lazy(() => CurrencySchema),
  type: z.lazy(() => TransactionTypeSchema),
  description: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  customIcon: z.string().optional().nullable(),
  date: z.coerce.date(),
  recurrence: z.lazy(() => RecurrenceTypeSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tagIds: z.union([ z.lazy(() => TransactionCreatetagIdsInputSchema),z.string().array() ]).optional(),
}).strict();

export const BudgetCreateManyCategoryInputSchema: z.ZodType<Prisma.BudgetCreateManyCategoryInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  periodStart: z.coerce.date(),
  periodEnd: z.coerce.date(),
  limit: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CategoryUpdateWithoutParentCategoryInputSchema: z.ZodType<Prisma.CategoryUpdateWithoutParentCategoryInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  subcategories: z.lazy(() => CategoryUpdateManyWithoutParentCategoryNestedInputSchema).optional(),
  transactions: z.lazy(() => TransactionUpdateManyWithoutCategoryNestedInputSchema).optional(),
  Budget: z.lazy(() => BudgetUpdateManyWithoutCategoryNestedInputSchema).optional()
}).strict();

export const CategoryUncheckedUpdateWithoutParentCategoryInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateWithoutParentCategoryInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  subcategories: z.lazy(() => CategoryUncheckedUpdateManyWithoutParentCategoryNestedInputSchema).optional(),
  transactions: z.lazy(() => TransactionUncheckedUpdateManyWithoutCategoryNestedInputSchema).optional(),
  Budget: z.lazy(() => BudgetUncheckedUpdateManyWithoutCategoryNestedInputSchema).optional()
}).strict();

export const CategoryUncheckedUpdateManyWithoutParentCategoryInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateManyWithoutParentCategoryInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  icon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  color: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TransactionUpdateWithoutCategoryInputSchema: z.ZodType<Prisma.TransactionUpdateWithoutCategoryInput> = z.object({
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => EnumCurrencyFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => TransactionTypeSchema),z.lazy(() => EnumTransactionTypeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  customIcon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  recurrence: z.union([ z.lazy(() => RecurrenceTypeSchema),z.lazy(() => EnumRecurrenceTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  account: z.lazy(() => AccountUpdateOneRequiredWithoutTransactionsNestedInputSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutTransactionsNestedInputSchema).optional(),
  tags: z.lazy(() => TagUpdateManyWithoutTransactionsNestedInputSchema).optional()
}).strict();

export const TransactionUncheckedUpdateWithoutCategoryInputSchema: z.ZodType<Prisma.TransactionUncheckedUpdateWithoutCategoryInput> = z.object({
  accountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => EnumCurrencyFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => TransactionTypeSchema),z.lazy(() => EnumTransactionTypeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  customIcon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  recurrence: z.union([ z.lazy(() => RecurrenceTypeSchema),z.lazy(() => EnumRecurrenceTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tagIds: z.union([ z.lazy(() => TransactionUpdatetagIdsInputSchema),z.string().array() ]).optional(),
  tags: z.lazy(() => TagUncheckedUpdateManyWithoutTransactionsNestedInputSchema).optional()
}).strict();

export const TransactionUncheckedUpdateManyWithoutCategoryInputSchema: z.ZodType<Prisma.TransactionUncheckedUpdateManyWithoutCategoryInput> = z.object({
  accountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => EnumCurrencyFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => TransactionTypeSchema),z.lazy(() => EnumTransactionTypeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  customIcon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  recurrence: z.union([ z.lazy(() => RecurrenceTypeSchema),z.lazy(() => EnumRecurrenceTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tagIds: z.union([ z.lazy(() => TransactionUpdatetagIdsInputSchema),z.string().array() ]).optional(),
}).strict();

export const BudgetUpdateWithoutCategoryInputSchema: z.ZodType<Prisma.BudgetUpdateWithoutCategoryInput> = z.object({
  periodStart: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  periodEnd: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  limit: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutBudgetsNestedInputSchema).optional()
}).strict();

export const BudgetUncheckedUpdateWithoutCategoryInputSchema: z.ZodType<Prisma.BudgetUncheckedUpdateWithoutCategoryInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  periodStart: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  periodEnd: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  limit: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BudgetUncheckedUpdateManyWithoutCategoryInputSchema: z.ZodType<Prisma.BudgetUncheckedUpdateManyWithoutCategoryInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  periodStart: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  periodEnd: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  limit: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TransactionUpdateWithoutTagsInputSchema: z.ZodType<Prisma.TransactionUpdateWithoutTagsInput> = z.object({
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => EnumCurrencyFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => TransactionTypeSchema),z.lazy(() => EnumTransactionTypeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  customIcon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  recurrence: z.union([ z.lazy(() => RecurrenceTypeSchema),z.lazy(() => EnumRecurrenceTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  account: z.lazy(() => AccountUpdateOneRequiredWithoutTransactionsNestedInputSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutTransactionsNestedInputSchema).optional(),
  category: z.lazy(() => CategoryUpdateOneWithoutTransactionsNestedInputSchema).optional()
}).strict();

export const TransactionUncheckedUpdateWithoutTagsInputSchema: z.ZodType<Prisma.TransactionUncheckedUpdateWithoutTagsInput> = z.object({
  accountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => EnumCurrencyFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => TransactionTypeSchema),z.lazy(() => EnumTransactionTypeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  customIcon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  recurrence: z.union([ z.lazy(() => RecurrenceTypeSchema),z.lazy(() => EnumRecurrenceTypeFieldUpdateOperationsInputSchema) ]).optional(),
  categoryId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tagIds: z.union([ z.lazy(() => TransactionUpdatetagIdsInputSchema),z.string().array() ]).optional(),
}).strict();

export const TransactionUncheckedUpdateManyWithoutTagsInputSchema: z.ZodType<Prisma.TransactionUncheckedUpdateManyWithoutTagsInput> = z.object({
  accountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => EnumCurrencyFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => TransactionTypeSchema),z.lazy(() => EnumTransactionTypeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  customIcon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  recurrence: z.union([ z.lazy(() => RecurrenceTypeSchema),z.lazy(() => EnumRecurrenceTypeFieldUpdateOperationsInputSchema) ]).optional(),
  categoryId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tagIds: z.union([ z.lazy(() => TransactionUpdatetagIdsInputSchema),z.string().array() ]).optional(),
}).strict();

export const TagUpdateWithoutTransactionsInputSchema: z.ZodType<Prisma.TagUpdateWithoutTransactionsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TagUncheckedUpdateWithoutTransactionsInputSchema: z.ZodType<Prisma.TagUncheckedUpdateWithoutTransactionsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  transactionIds: z.union([ z.lazy(() => TagUpdatetransactionIdsInputSchema),z.string().array() ]).optional(),
}).strict();

export const TagUncheckedUpdateManyWithoutTransactionsInputSchema: z.ZodType<Prisma.TagUncheckedUpdateManyWithoutTransactionsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  transactionIds: z.union([ z.lazy(() => TagUpdatetransactionIdsInputSchema),z.string().array() ]).optional(),
}).strict();

export const AccountCreateManyUserInputSchema: z.ZodType<Prisma.AccountCreateManyUserInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => AccountTypeSchema),
  currency: z.lazy(() => CurrencySchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TransactionCreateManyUserInputSchema: z.ZodType<Prisma.TransactionCreateManyUserInput> = z.object({
  id: z.string().optional(),
  accountId: z.string(),
  amount: z.number(),
  currency: z.lazy(() => CurrencySchema),
  type: z.lazy(() => TransactionTypeSchema),
  description: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  customIcon: z.string().optional().nullable(),
  date: z.coerce.date(),
  recurrence: z.lazy(() => RecurrenceTypeSchema).optional(),
  categoryId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tagIds: z.union([ z.lazy(() => TransactionCreatetagIdsInputSchema),z.string().array() ]).optional(),
}).strict();

export const BudgetCreateManyUserInputSchema: z.ZodType<Prisma.BudgetCreateManyUserInput> = z.object({
  id: z.string().optional(),
  categoryId: z.string(),
  periodStart: z.coerce.date(),
  periodEnd: z.coerce.date(),
  limit: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AccountUpdateWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateWithoutUserInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => AccountTypeSchema),z.lazy(() => EnumAccountTypeFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => EnumCurrencyFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  transactions: z.lazy(() => TransactionUpdateManyWithoutAccountNestedInputSchema).optional()
}).strict();

export const AccountUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateWithoutUserInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => AccountTypeSchema),z.lazy(() => EnumAccountTypeFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => EnumCurrencyFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  transactions: z.lazy(() => TransactionUncheckedUpdateManyWithoutAccountNestedInputSchema).optional()
}).strict();

export const AccountUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutUserInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => AccountTypeSchema),z.lazy(() => EnumAccountTypeFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => EnumCurrencyFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TransactionUpdateWithoutUserInputSchema: z.ZodType<Prisma.TransactionUpdateWithoutUserInput> = z.object({
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => EnumCurrencyFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => TransactionTypeSchema),z.lazy(() => EnumTransactionTypeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  customIcon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  recurrence: z.union([ z.lazy(() => RecurrenceTypeSchema),z.lazy(() => EnumRecurrenceTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  account: z.lazy(() => AccountUpdateOneRequiredWithoutTransactionsNestedInputSchema).optional(),
  category: z.lazy(() => CategoryUpdateOneWithoutTransactionsNestedInputSchema).optional(),
  tags: z.lazy(() => TagUpdateManyWithoutTransactionsNestedInputSchema).optional()
}).strict();

export const TransactionUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.TransactionUncheckedUpdateWithoutUserInput> = z.object({
  accountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => EnumCurrencyFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => TransactionTypeSchema),z.lazy(() => EnumTransactionTypeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  customIcon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  recurrence: z.union([ z.lazy(() => RecurrenceTypeSchema),z.lazy(() => EnumRecurrenceTypeFieldUpdateOperationsInputSchema) ]).optional(),
  categoryId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tagIds: z.union([ z.lazy(() => TransactionUpdatetagIdsInputSchema),z.string().array() ]).optional(),
  tags: z.lazy(() => TagUncheckedUpdateManyWithoutTransactionsNestedInputSchema).optional()
}).strict();

export const TransactionUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.TransactionUncheckedUpdateManyWithoutUserInput> = z.object({
  accountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => EnumCurrencyFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => TransactionTypeSchema),z.lazy(() => EnumTransactionTypeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  customIcon: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  recurrence: z.union([ z.lazy(() => RecurrenceTypeSchema),z.lazy(() => EnumRecurrenceTypeFieldUpdateOperationsInputSchema) ]).optional(),
  categoryId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tagIds: z.union([ z.lazy(() => TransactionUpdatetagIdsInputSchema),z.string().array() ]).optional(),
}).strict();

export const BudgetUpdateWithoutUserInputSchema: z.ZodType<Prisma.BudgetUpdateWithoutUserInput> = z.object({
  periodStart: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  periodEnd: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  limit: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  category: z.lazy(() => CategoryUpdateOneRequiredWithoutBudgetNestedInputSchema).optional()
}).strict();

export const BudgetUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.BudgetUncheckedUpdateWithoutUserInput> = z.object({
  categoryId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  periodStart: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  periodEnd: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  limit: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BudgetUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.BudgetUncheckedUpdateManyWithoutUserInput> = z.object({
  categoryId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  periodStart: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  periodEnd: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  limit: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const AccountFindFirstArgsSchema: z.ZodType<Prisma.AccountFindFirstArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountScalarFieldEnumSchema,AccountScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AccountFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AccountFindFirstOrThrowArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountScalarFieldEnumSchema,AccountScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AccountFindManyArgsSchema: z.ZodType<Prisma.AccountFindManyArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountScalarFieldEnumSchema,AccountScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AccountAggregateArgsSchema: z.ZodType<Prisma.AccountAggregateArgs> = z.object({
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AccountGroupByArgsSchema: z.ZodType<Prisma.AccountGroupByArgs> = z.object({
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithAggregationInputSchema.array(),AccountOrderByWithAggregationInputSchema ]).optional(),
  by: AccountScalarFieldEnumSchema.array(),
  having: AccountScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AccountFindUniqueArgsSchema: z.ZodType<Prisma.AccountFindUniqueArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict() ;

export const AccountFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AccountFindUniqueOrThrowArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict() ;

export const BudgetFindFirstArgsSchema: z.ZodType<Prisma.BudgetFindFirstArgs> = z.object({
  select: BudgetSelectSchema.optional(),
  include: BudgetIncludeSchema.optional(),
  where: BudgetWhereInputSchema.optional(),
  orderBy: z.union([ BudgetOrderByWithRelationInputSchema.array(),BudgetOrderByWithRelationInputSchema ]).optional(),
  cursor: BudgetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BudgetScalarFieldEnumSchema,BudgetScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BudgetFindFirstOrThrowArgsSchema: z.ZodType<Prisma.BudgetFindFirstOrThrowArgs> = z.object({
  select: BudgetSelectSchema.optional(),
  include: BudgetIncludeSchema.optional(),
  where: BudgetWhereInputSchema.optional(),
  orderBy: z.union([ BudgetOrderByWithRelationInputSchema.array(),BudgetOrderByWithRelationInputSchema ]).optional(),
  cursor: BudgetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BudgetScalarFieldEnumSchema,BudgetScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BudgetFindManyArgsSchema: z.ZodType<Prisma.BudgetFindManyArgs> = z.object({
  select: BudgetSelectSchema.optional(),
  include: BudgetIncludeSchema.optional(),
  where: BudgetWhereInputSchema.optional(),
  orderBy: z.union([ BudgetOrderByWithRelationInputSchema.array(),BudgetOrderByWithRelationInputSchema ]).optional(),
  cursor: BudgetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BudgetScalarFieldEnumSchema,BudgetScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BudgetAggregateArgsSchema: z.ZodType<Prisma.BudgetAggregateArgs> = z.object({
  where: BudgetWhereInputSchema.optional(),
  orderBy: z.union([ BudgetOrderByWithRelationInputSchema.array(),BudgetOrderByWithRelationInputSchema ]).optional(),
  cursor: BudgetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const BudgetGroupByArgsSchema: z.ZodType<Prisma.BudgetGroupByArgs> = z.object({
  where: BudgetWhereInputSchema.optional(),
  orderBy: z.union([ BudgetOrderByWithAggregationInputSchema.array(),BudgetOrderByWithAggregationInputSchema ]).optional(),
  by: BudgetScalarFieldEnumSchema.array(),
  having: BudgetScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const BudgetFindUniqueArgsSchema: z.ZodType<Prisma.BudgetFindUniqueArgs> = z.object({
  select: BudgetSelectSchema.optional(),
  include: BudgetIncludeSchema.optional(),
  where: BudgetWhereUniqueInputSchema,
}).strict() ;

export const BudgetFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.BudgetFindUniqueOrThrowArgs> = z.object({
  select: BudgetSelectSchema.optional(),
  include: BudgetIncludeSchema.optional(),
  where: BudgetWhereUniqueInputSchema,
}).strict() ;

export const CategoryFindFirstArgsSchema: z.ZodType<Prisma.CategoryFindFirstArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereInputSchema.optional(),
  orderBy: z.union([ CategoryOrderByWithRelationInputSchema.array(),CategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CategoryScalarFieldEnumSchema,CategoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CategoryFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CategoryFindFirstOrThrowArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereInputSchema.optional(),
  orderBy: z.union([ CategoryOrderByWithRelationInputSchema.array(),CategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CategoryScalarFieldEnumSchema,CategoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CategoryFindManyArgsSchema: z.ZodType<Prisma.CategoryFindManyArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereInputSchema.optional(),
  orderBy: z.union([ CategoryOrderByWithRelationInputSchema.array(),CategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CategoryScalarFieldEnumSchema,CategoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CategoryAggregateArgsSchema: z.ZodType<Prisma.CategoryAggregateArgs> = z.object({
  where: CategoryWhereInputSchema.optional(),
  orderBy: z.union([ CategoryOrderByWithRelationInputSchema.array(),CategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CategoryGroupByArgsSchema: z.ZodType<Prisma.CategoryGroupByArgs> = z.object({
  where: CategoryWhereInputSchema.optional(),
  orderBy: z.union([ CategoryOrderByWithAggregationInputSchema.array(),CategoryOrderByWithAggregationInputSchema ]).optional(),
  by: CategoryScalarFieldEnumSchema.array(),
  having: CategoryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CategoryFindUniqueArgsSchema: z.ZodType<Prisma.CategoryFindUniqueArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereUniqueInputSchema,
}).strict() ;

export const CategoryFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CategoryFindUniqueOrThrowArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereUniqueInputSchema,
}).strict() ;

export const TagFindFirstArgsSchema: z.ZodType<Prisma.TagFindFirstArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereInputSchema.optional(),
  orderBy: z.union([ TagOrderByWithRelationInputSchema.array(),TagOrderByWithRelationInputSchema ]).optional(),
  cursor: TagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TagScalarFieldEnumSchema,TagScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TagFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TagFindFirstOrThrowArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereInputSchema.optional(),
  orderBy: z.union([ TagOrderByWithRelationInputSchema.array(),TagOrderByWithRelationInputSchema ]).optional(),
  cursor: TagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TagScalarFieldEnumSchema,TagScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TagFindManyArgsSchema: z.ZodType<Prisma.TagFindManyArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereInputSchema.optional(),
  orderBy: z.union([ TagOrderByWithRelationInputSchema.array(),TagOrderByWithRelationInputSchema ]).optional(),
  cursor: TagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TagScalarFieldEnumSchema,TagScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TagAggregateArgsSchema: z.ZodType<Prisma.TagAggregateArgs> = z.object({
  where: TagWhereInputSchema.optional(),
  orderBy: z.union([ TagOrderByWithRelationInputSchema.array(),TagOrderByWithRelationInputSchema ]).optional(),
  cursor: TagWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TagGroupByArgsSchema: z.ZodType<Prisma.TagGroupByArgs> = z.object({
  where: TagWhereInputSchema.optional(),
  orderBy: z.union([ TagOrderByWithAggregationInputSchema.array(),TagOrderByWithAggregationInputSchema ]).optional(),
  by: TagScalarFieldEnumSchema.array(),
  having: TagScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TagFindUniqueArgsSchema: z.ZodType<Prisma.TagFindUniqueArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereUniqueInputSchema,
}).strict() ;

export const TagFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TagFindUniqueOrThrowArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereUniqueInputSchema,
}).strict() ;

export const TransactionFindFirstArgsSchema: z.ZodType<Prisma.TransactionFindFirstArgs> = z.object({
  select: TransactionSelectSchema.optional(),
  include: TransactionIncludeSchema.optional(),
  where: TransactionWhereInputSchema.optional(),
  orderBy: z.union([ TransactionOrderByWithRelationInputSchema.array(),TransactionOrderByWithRelationInputSchema ]).optional(),
  cursor: TransactionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TransactionScalarFieldEnumSchema,TransactionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TransactionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TransactionFindFirstOrThrowArgs> = z.object({
  select: TransactionSelectSchema.optional(),
  include: TransactionIncludeSchema.optional(),
  where: TransactionWhereInputSchema.optional(),
  orderBy: z.union([ TransactionOrderByWithRelationInputSchema.array(),TransactionOrderByWithRelationInputSchema ]).optional(),
  cursor: TransactionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TransactionScalarFieldEnumSchema,TransactionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TransactionFindManyArgsSchema: z.ZodType<Prisma.TransactionFindManyArgs> = z.object({
  select: TransactionSelectSchema.optional(),
  include: TransactionIncludeSchema.optional(),
  where: TransactionWhereInputSchema.optional(),
  orderBy: z.union([ TransactionOrderByWithRelationInputSchema.array(),TransactionOrderByWithRelationInputSchema ]).optional(),
  cursor: TransactionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TransactionScalarFieldEnumSchema,TransactionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TransactionAggregateArgsSchema: z.ZodType<Prisma.TransactionAggregateArgs> = z.object({
  where: TransactionWhereInputSchema.optional(),
  orderBy: z.union([ TransactionOrderByWithRelationInputSchema.array(),TransactionOrderByWithRelationInputSchema ]).optional(),
  cursor: TransactionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TransactionGroupByArgsSchema: z.ZodType<Prisma.TransactionGroupByArgs> = z.object({
  where: TransactionWhereInputSchema.optional(),
  orderBy: z.union([ TransactionOrderByWithAggregationInputSchema.array(),TransactionOrderByWithAggregationInputSchema ]).optional(),
  by: TransactionScalarFieldEnumSchema.array(),
  having: TransactionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TransactionFindUniqueArgsSchema: z.ZodType<Prisma.TransactionFindUniqueArgs> = z.object({
  select: TransactionSelectSchema.optional(),
  include: TransactionIncludeSchema.optional(),
  where: TransactionWhereUniqueInputSchema,
}).strict() ;

export const TransactionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TransactionFindUniqueOrThrowArgs> = z.object({
  select: TransactionSelectSchema.optional(),
  include: TransactionIncludeSchema.optional(),
  where: TransactionWhereUniqueInputSchema,
}).strict() ;

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(),UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const AccountCreateArgsSchema: z.ZodType<Prisma.AccountCreateArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  data: z.union([ AccountCreateInputSchema,AccountUncheckedCreateInputSchema ]),
}).strict() ;

export const AccountUpsertArgsSchema: z.ZodType<Prisma.AccountUpsertArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
  create: z.union([ AccountCreateInputSchema,AccountUncheckedCreateInputSchema ]),
  update: z.union([ AccountUpdateInputSchema,AccountUncheckedUpdateInputSchema ]),
}).strict() ;

export const AccountCreateManyArgsSchema: z.ZodType<Prisma.AccountCreateManyArgs> = z.object({
  data: z.union([ AccountCreateManyInputSchema,AccountCreateManyInputSchema.array() ]),
}).strict() ;

export const AccountDeleteArgsSchema: z.ZodType<Prisma.AccountDeleteArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict() ;

export const AccountUpdateArgsSchema: z.ZodType<Prisma.AccountUpdateArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  data: z.union([ AccountUpdateInputSchema,AccountUncheckedUpdateInputSchema ]),
  where: AccountWhereUniqueInputSchema,
}).strict() ;

export const AccountUpdateManyArgsSchema: z.ZodType<Prisma.AccountUpdateManyArgs> = z.object({
  data: z.union([ AccountUpdateManyMutationInputSchema,AccountUncheckedUpdateManyInputSchema ]),
  where: AccountWhereInputSchema.optional(),
}).strict() ;

export const AccountDeleteManyArgsSchema: z.ZodType<Prisma.AccountDeleteManyArgs> = z.object({
  where: AccountWhereInputSchema.optional(),
}).strict() ;

export const BudgetCreateArgsSchema: z.ZodType<Prisma.BudgetCreateArgs> = z.object({
  select: BudgetSelectSchema.optional(),
  include: BudgetIncludeSchema.optional(),
  data: z.union([ BudgetCreateInputSchema,BudgetUncheckedCreateInputSchema ]),
}).strict() ;

export const BudgetUpsertArgsSchema: z.ZodType<Prisma.BudgetUpsertArgs> = z.object({
  select: BudgetSelectSchema.optional(),
  include: BudgetIncludeSchema.optional(),
  where: BudgetWhereUniqueInputSchema,
  create: z.union([ BudgetCreateInputSchema,BudgetUncheckedCreateInputSchema ]),
  update: z.union([ BudgetUpdateInputSchema,BudgetUncheckedUpdateInputSchema ]),
}).strict() ;

export const BudgetCreateManyArgsSchema: z.ZodType<Prisma.BudgetCreateManyArgs> = z.object({
  data: z.union([ BudgetCreateManyInputSchema,BudgetCreateManyInputSchema.array() ]),
}).strict() ;

export const BudgetDeleteArgsSchema: z.ZodType<Prisma.BudgetDeleteArgs> = z.object({
  select: BudgetSelectSchema.optional(),
  include: BudgetIncludeSchema.optional(),
  where: BudgetWhereUniqueInputSchema,
}).strict() ;

export const BudgetUpdateArgsSchema: z.ZodType<Prisma.BudgetUpdateArgs> = z.object({
  select: BudgetSelectSchema.optional(),
  include: BudgetIncludeSchema.optional(),
  data: z.union([ BudgetUpdateInputSchema,BudgetUncheckedUpdateInputSchema ]),
  where: BudgetWhereUniqueInputSchema,
}).strict() ;

export const BudgetUpdateManyArgsSchema: z.ZodType<Prisma.BudgetUpdateManyArgs> = z.object({
  data: z.union([ BudgetUpdateManyMutationInputSchema,BudgetUncheckedUpdateManyInputSchema ]),
  where: BudgetWhereInputSchema.optional(),
}).strict() ;

export const BudgetDeleteManyArgsSchema: z.ZodType<Prisma.BudgetDeleteManyArgs> = z.object({
  where: BudgetWhereInputSchema.optional(),
}).strict() ;

export const CategoryCreateArgsSchema: z.ZodType<Prisma.CategoryCreateArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  data: z.union([ CategoryCreateInputSchema,CategoryUncheckedCreateInputSchema ]),
}).strict() ;

export const CategoryUpsertArgsSchema: z.ZodType<Prisma.CategoryUpsertArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereUniqueInputSchema,
  create: z.union([ CategoryCreateInputSchema,CategoryUncheckedCreateInputSchema ]),
  update: z.union([ CategoryUpdateInputSchema,CategoryUncheckedUpdateInputSchema ]),
}).strict() ;

export const CategoryCreateManyArgsSchema: z.ZodType<Prisma.CategoryCreateManyArgs> = z.object({
  data: z.union([ CategoryCreateManyInputSchema,CategoryCreateManyInputSchema.array() ]),
}).strict() ;

export const CategoryDeleteArgsSchema: z.ZodType<Prisma.CategoryDeleteArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereUniqueInputSchema,
}).strict() ;

export const CategoryUpdateArgsSchema: z.ZodType<Prisma.CategoryUpdateArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  data: z.union([ CategoryUpdateInputSchema,CategoryUncheckedUpdateInputSchema ]),
  where: CategoryWhereUniqueInputSchema,
}).strict() ;

export const CategoryUpdateManyArgsSchema: z.ZodType<Prisma.CategoryUpdateManyArgs> = z.object({
  data: z.union([ CategoryUpdateManyMutationInputSchema,CategoryUncheckedUpdateManyInputSchema ]),
  where: CategoryWhereInputSchema.optional(),
}).strict() ;

export const CategoryDeleteManyArgsSchema: z.ZodType<Prisma.CategoryDeleteManyArgs> = z.object({
  where: CategoryWhereInputSchema.optional(),
}).strict() ;

export const TagCreateArgsSchema: z.ZodType<Prisma.TagCreateArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  data: z.union([ TagCreateInputSchema,TagUncheckedCreateInputSchema ]),
}).strict() ;

export const TagUpsertArgsSchema: z.ZodType<Prisma.TagUpsertArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereUniqueInputSchema,
  create: z.union([ TagCreateInputSchema,TagUncheckedCreateInputSchema ]),
  update: z.union([ TagUpdateInputSchema,TagUncheckedUpdateInputSchema ]),
}).strict() ;

export const TagCreateManyArgsSchema: z.ZodType<Prisma.TagCreateManyArgs> = z.object({
  data: z.union([ TagCreateManyInputSchema,TagCreateManyInputSchema.array() ]),
}).strict() ;

export const TagDeleteArgsSchema: z.ZodType<Prisma.TagDeleteArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  where: TagWhereUniqueInputSchema,
}).strict() ;

export const TagUpdateArgsSchema: z.ZodType<Prisma.TagUpdateArgs> = z.object({
  select: TagSelectSchema.optional(),
  include: TagIncludeSchema.optional(),
  data: z.union([ TagUpdateInputSchema,TagUncheckedUpdateInputSchema ]),
  where: TagWhereUniqueInputSchema,
}).strict() ;

export const TagUpdateManyArgsSchema: z.ZodType<Prisma.TagUpdateManyArgs> = z.object({
  data: z.union([ TagUpdateManyMutationInputSchema,TagUncheckedUpdateManyInputSchema ]),
  where: TagWhereInputSchema.optional(),
}).strict() ;

export const TagDeleteManyArgsSchema: z.ZodType<Prisma.TagDeleteManyArgs> = z.object({
  where: TagWhereInputSchema.optional(),
}).strict() ;

export const TransactionCreateArgsSchema: z.ZodType<Prisma.TransactionCreateArgs> = z.object({
  select: TransactionSelectSchema.optional(),
  include: TransactionIncludeSchema.optional(),
  data: z.union([ TransactionCreateInputSchema,TransactionUncheckedCreateInputSchema ]),
}).strict() ;

export const TransactionUpsertArgsSchema: z.ZodType<Prisma.TransactionUpsertArgs> = z.object({
  select: TransactionSelectSchema.optional(),
  include: TransactionIncludeSchema.optional(),
  where: TransactionWhereUniqueInputSchema,
  create: z.union([ TransactionCreateInputSchema,TransactionUncheckedCreateInputSchema ]),
  update: z.union([ TransactionUpdateInputSchema,TransactionUncheckedUpdateInputSchema ]),
}).strict() ;

export const TransactionCreateManyArgsSchema: z.ZodType<Prisma.TransactionCreateManyArgs> = z.object({
  data: z.union([ TransactionCreateManyInputSchema,TransactionCreateManyInputSchema.array() ]),
}).strict() ;

export const TransactionDeleteArgsSchema: z.ZodType<Prisma.TransactionDeleteArgs> = z.object({
  select: TransactionSelectSchema.optional(),
  include: TransactionIncludeSchema.optional(),
  where: TransactionWhereUniqueInputSchema,
}).strict() ;

export const TransactionUpdateArgsSchema: z.ZodType<Prisma.TransactionUpdateArgs> = z.object({
  select: TransactionSelectSchema.optional(),
  include: TransactionIncludeSchema.optional(),
  data: z.union([ TransactionUpdateInputSchema,TransactionUncheckedUpdateInputSchema ]),
  where: TransactionWhereUniqueInputSchema,
}).strict() ;

export const TransactionUpdateManyArgsSchema: z.ZodType<Prisma.TransactionUpdateManyArgs> = z.object({
  data: z.union([ TransactionUpdateManyMutationInputSchema,TransactionUncheckedUpdateManyInputSchema ]),
  where: TransactionWhereInputSchema.optional(),
}).strict() ;

export const TransactionDeleteManyArgsSchema: z.ZodType<Prisma.TransactionDeleteManyArgs> = z.object({
  where: TransactionWhereInputSchema.optional(),
}).strict() ;

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict() ;

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
}).strict() ;

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
}).strict() ;

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
}).strict() ;

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
}).strict() ;