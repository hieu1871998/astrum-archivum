"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetUpdateManyWithoutUserNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BudgetCreateManyUserInputEnvelope_1 = require("../inputs/BudgetCreateManyUserInputEnvelope");
const BudgetCreateOrConnectWithoutUserInput_1 = require("../inputs/BudgetCreateOrConnectWithoutUserInput");
const BudgetCreateWithoutUserInput_1 = require("../inputs/BudgetCreateWithoutUserInput");
const BudgetScalarWhereInput_1 = require("../inputs/BudgetScalarWhereInput");
const BudgetUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/BudgetUpdateManyWithWhereWithoutUserInput");
const BudgetUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/BudgetUpdateWithWhereUniqueWithoutUserInput");
const BudgetUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/BudgetUpsertWithWhereUniqueWithoutUserInput");
const BudgetWhereUniqueInput_1 = require("../inputs/BudgetWhereUniqueInput");
let BudgetUpdateManyWithoutUserNestedInput = class BudgetUpdateManyWithoutUserNestedInput {
};
exports.BudgetUpdateManyWithoutUserNestedInput = BudgetUpdateManyWithoutUserNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BudgetCreateWithoutUserInput_1.BudgetCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BudgetUpdateManyWithoutUserNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BudgetCreateOrConnectWithoutUserInput_1.BudgetCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BudgetUpdateManyWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BudgetUpsertWithWhereUniqueWithoutUserInput_1.BudgetUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BudgetUpdateManyWithoutUserNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetCreateManyUserInputEnvelope_1.BudgetCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BudgetCreateManyUserInputEnvelope_1.BudgetCreateManyUserInputEnvelope)
], BudgetUpdateManyWithoutUserNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BudgetWhereUniqueInput_1.BudgetWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BudgetUpdateManyWithoutUserNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BudgetWhereUniqueInput_1.BudgetWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BudgetUpdateManyWithoutUserNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BudgetWhereUniqueInput_1.BudgetWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BudgetUpdateManyWithoutUserNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BudgetWhereUniqueInput_1.BudgetWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BudgetUpdateManyWithoutUserNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BudgetUpdateWithWhereUniqueWithoutUserInput_1.BudgetUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BudgetUpdateManyWithoutUserNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BudgetUpdateManyWithWhereWithoutUserInput_1.BudgetUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BudgetUpdateManyWithoutUserNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BudgetScalarWhereInput_1.BudgetScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BudgetUpdateManyWithoutUserNestedInput.prototype, "deleteMany", void 0);
exports.BudgetUpdateManyWithoutUserNestedInput = BudgetUpdateManyWithoutUserNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BudgetUpdateManyWithoutUserNestedInput", {})
], BudgetUpdateManyWithoutUserNestedInput);
