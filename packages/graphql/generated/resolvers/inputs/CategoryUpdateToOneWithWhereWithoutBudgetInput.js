"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUpdateToOneWithWhereWithoutBudgetInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryUpdateWithoutBudgetInput_1 = require("../inputs/CategoryUpdateWithoutBudgetInput");
const CategoryWhereInput_1 = require("../inputs/CategoryWhereInput");
let CategoryUpdateToOneWithWhereWithoutBudgetInput = class CategoryUpdateToOneWithWhereWithoutBudgetInput {
};
exports.CategoryUpdateToOneWithWhereWithoutBudgetInput = CategoryUpdateToOneWithWhereWithoutBudgetInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereInput_1.CategoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryWhereInput_1.CategoryWhereInput)
], CategoryUpdateToOneWithWhereWithoutBudgetInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateWithoutBudgetInput_1.CategoryUpdateWithoutBudgetInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryUpdateWithoutBudgetInput_1.CategoryUpdateWithoutBudgetInput)
], CategoryUpdateToOneWithWhereWithoutBudgetInput.prototype, "data", void 0);
exports.CategoryUpdateToOneWithWhereWithoutBudgetInput = CategoryUpdateToOneWithWhereWithoutBudgetInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryUpdateToOneWithWhereWithoutBudgetInput", {})
], CategoryUpdateToOneWithWhereWithoutBudgetInput);
