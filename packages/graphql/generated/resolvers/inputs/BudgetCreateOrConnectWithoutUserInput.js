"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BudgetCreateWithoutUserInput_1 = require("../inputs/BudgetCreateWithoutUserInput");
const BudgetWhereUniqueInput_1 = require("../inputs/BudgetWhereUniqueInput");
let BudgetCreateOrConnectWithoutUserInput = class BudgetCreateOrConnectWithoutUserInput {
};
exports.BudgetCreateOrConnectWithoutUserInput = BudgetCreateOrConnectWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetWhereUniqueInput_1.BudgetWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BudgetWhereUniqueInput_1.BudgetWhereUniqueInput)
], BudgetCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetCreateWithoutUserInput_1.BudgetCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BudgetCreateWithoutUserInput_1.BudgetCreateWithoutUserInput)
], BudgetCreateOrConnectWithoutUserInput.prototype, "create", void 0);
exports.BudgetCreateOrConnectWithoutUserInput = BudgetCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BudgetCreateOrConnectWithoutUserInput", {})
], BudgetCreateOrConnectWithoutUserInput);
