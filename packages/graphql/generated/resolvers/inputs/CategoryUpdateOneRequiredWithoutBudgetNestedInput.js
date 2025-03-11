"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUpdateOneRequiredWithoutBudgetNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateOrConnectWithoutBudgetInput_1 = require("../inputs/CategoryCreateOrConnectWithoutBudgetInput");
const CategoryCreateWithoutBudgetInput_1 = require("../inputs/CategoryCreateWithoutBudgetInput");
const CategoryUpdateToOneWithWhereWithoutBudgetInput_1 = require("../inputs/CategoryUpdateToOneWithWhereWithoutBudgetInput");
const CategoryUpsertWithoutBudgetInput_1 = require("../inputs/CategoryUpsertWithoutBudgetInput");
const CategoryWhereUniqueInput_1 = require("../inputs/CategoryWhereUniqueInput");
let CategoryUpdateOneRequiredWithoutBudgetNestedInput = class CategoryUpdateOneRequiredWithoutBudgetNestedInput {
};
exports.CategoryUpdateOneRequiredWithoutBudgetNestedInput = CategoryUpdateOneRequiredWithoutBudgetNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateWithoutBudgetInput_1.CategoryCreateWithoutBudgetInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryCreateWithoutBudgetInput_1.CategoryCreateWithoutBudgetInput)
], CategoryUpdateOneRequiredWithoutBudgetNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateOrConnectWithoutBudgetInput_1.CategoryCreateOrConnectWithoutBudgetInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryCreateOrConnectWithoutBudgetInput_1.CategoryCreateOrConnectWithoutBudgetInput)
], CategoryUpdateOneRequiredWithoutBudgetNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpsertWithoutBudgetInput_1.CategoryUpsertWithoutBudgetInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryUpsertWithoutBudgetInput_1.CategoryUpsertWithoutBudgetInput)
], CategoryUpdateOneRequiredWithoutBudgetNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereUniqueInput_1.CategoryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryWhereUniqueInput_1.CategoryWhereUniqueInput)
], CategoryUpdateOneRequiredWithoutBudgetNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateToOneWithWhereWithoutBudgetInput_1.CategoryUpdateToOneWithWhereWithoutBudgetInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryUpdateToOneWithWhereWithoutBudgetInput_1.CategoryUpdateToOneWithWhereWithoutBudgetInput)
], CategoryUpdateOneRequiredWithoutBudgetNestedInput.prototype, "update", void 0);
exports.CategoryUpdateOneRequiredWithoutBudgetNestedInput = CategoryUpdateOneRequiredWithoutBudgetNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryUpdateOneRequiredWithoutBudgetNestedInput", {})
], CategoryUpdateOneRequiredWithoutBudgetNestedInput);
