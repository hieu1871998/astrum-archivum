"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUpsertWithoutBudgetInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateWithoutBudgetInput_1 = require("../inputs/CategoryCreateWithoutBudgetInput");
const CategoryUpdateWithoutBudgetInput_1 = require("../inputs/CategoryUpdateWithoutBudgetInput");
const CategoryWhereInput_1 = require("../inputs/CategoryWhereInput");
let CategoryUpsertWithoutBudgetInput = class CategoryUpsertWithoutBudgetInput {
};
exports.CategoryUpsertWithoutBudgetInput = CategoryUpsertWithoutBudgetInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateWithoutBudgetInput_1.CategoryUpdateWithoutBudgetInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryUpdateWithoutBudgetInput_1.CategoryUpdateWithoutBudgetInput)
], CategoryUpsertWithoutBudgetInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateWithoutBudgetInput_1.CategoryCreateWithoutBudgetInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryCreateWithoutBudgetInput_1.CategoryCreateWithoutBudgetInput)
], CategoryUpsertWithoutBudgetInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereInput_1.CategoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryWhereInput_1.CategoryWhereInput)
], CategoryUpsertWithoutBudgetInput.prototype, "where", void 0);
exports.CategoryUpsertWithoutBudgetInput = CategoryUpsertWithoutBudgetInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryUpsertWithoutBudgetInput", {})
], CategoryUpsertWithoutBudgetInput);
