"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BudgetCreateManyUserInputEnvelope_1 = require("../inputs/BudgetCreateManyUserInputEnvelope");
const BudgetCreateOrConnectWithoutUserInput_1 = require("../inputs/BudgetCreateOrConnectWithoutUserInput");
const BudgetCreateWithoutUserInput_1 = require("../inputs/BudgetCreateWithoutUserInput");
const BudgetWhereUniqueInput_1 = require("../inputs/BudgetWhereUniqueInput");
let BudgetCreateNestedManyWithoutUserInput = class BudgetCreateNestedManyWithoutUserInput {
};
exports.BudgetCreateNestedManyWithoutUserInput = BudgetCreateNestedManyWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BudgetCreateWithoutUserInput_1.BudgetCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BudgetCreateNestedManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BudgetCreateOrConnectWithoutUserInput_1.BudgetCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BudgetCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetCreateManyUserInputEnvelope_1.BudgetCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BudgetCreateManyUserInputEnvelope_1.BudgetCreateManyUserInputEnvelope)
], BudgetCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BudgetWhereUniqueInput_1.BudgetWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BudgetCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
exports.BudgetCreateNestedManyWithoutUserInput = BudgetCreateNestedManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BudgetCreateNestedManyWithoutUserInput", {})
], BudgetCreateNestedManyWithoutUserInput);
