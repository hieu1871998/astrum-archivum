"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCreateNestedOneWithoutBudgetInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateOrConnectWithoutBudgetInput_1 = require("../inputs/CategoryCreateOrConnectWithoutBudgetInput");
const CategoryCreateWithoutBudgetInput_1 = require("../inputs/CategoryCreateWithoutBudgetInput");
const CategoryWhereUniqueInput_1 = require("../inputs/CategoryWhereUniqueInput");
let CategoryCreateNestedOneWithoutBudgetInput = class CategoryCreateNestedOneWithoutBudgetInput {
};
exports.CategoryCreateNestedOneWithoutBudgetInput = CategoryCreateNestedOneWithoutBudgetInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateWithoutBudgetInput_1.CategoryCreateWithoutBudgetInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryCreateWithoutBudgetInput_1.CategoryCreateWithoutBudgetInput)
], CategoryCreateNestedOneWithoutBudgetInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateOrConnectWithoutBudgetInput_1.CategoryCreateOrConnectWithoutBudgetInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryCreateOrConnectWithoutBudgetInput_1.CategoryCreateOrConnectWithoutBudgetInput)
], CategoryCreateNestedOneWithoutBudgetInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereUniqueInput_1.CategoryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryWhereUniqueInput_1.CategoryWhereUniqueInput)
], CategoryCreateNestedOneWithoutBudgetInput.prototype, "connect", void 0);
exports.CategoryCreateNestedOneWithoutBudgetInput = CategoryCreateNestedOneWithoutBudgetInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryCreateNestedOneWithoutBudgetInput", {})
], CategoryCreateNestedOneWithoutBudgetInput);
