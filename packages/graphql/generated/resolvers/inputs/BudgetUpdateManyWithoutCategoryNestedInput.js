"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetUpdateManyWithoutCategoryNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BudgetCreateManyCategoryInputEnvelope_1 = require("../inputs/BudgetCreateManyCategoryInputEnvelope");
const BudgetCreateOrConnectWithoutCategoryInput_1 = require("../inputs/BudgetCreateOrConnectWithoutCategoryInput");
const BudgetCreateWithoutCategoryInput_1 = require("../inputs/BudgetCreateWithoutCategoryInput");
const BudgetScalarWhereInput_1 = require("../inputs/BudgetScalarWhereInput");
const BudgetUpdateManyWithWhereWithoutCategoryInput_1 = require("../inputs/BudgetUpdateManyWithWhereWithoutCategoryInput");
const BudgetUpdateWithWhereUniqueWithoutCategoryInput_1 = require("../inputs/BudgetUpdateWithWhereUniqueWithoutCategoryInput");
const BudgetUpsertWithWhereUniqueWithoutCategoryInput_1 = require("../inputs/BudgetUpsertWithWhereUniqueWithoutCategoryInput");
const BudgetWhereUniqueInput_1 = require("../inputs/BudgetWhereUniqueInput");
let BudgetUpdateManyWithoutCategoryNestedInput = class BudgetUpdateManyWithoutCategoryNestedInput {
};
exports.BudgetUpdateManyWithoutCategoryNestedInput = BudgetUpdateManyWithoutCategoryNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BudgetCreateWithoutCategoryInput_1.BudgetCreateWithoutCategoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BudgetUpdateManyWithoutCategoryNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BudgetCreateOrConnectWithoutCategoryInput_1.BudgetCreateOrConnectWithoutCategoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BudgetUpdateManyWithoutCategoryNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BudgetUpsertWithWhereUniqueWithoutCategoryInput_1.BudgetUpsertWithWhereUniqueWithoutCategoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BudgetUpdateManyWithoutCategoryNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetCreateManyCategoryInputEnvelope_1.BudgetCreateManyCategoryInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BudgetCreateManyCategoryInputEnvelope_1.BudgetCreateManyCategoryInputEnvelope)
], BudgetUpdateManyWithoutCategoryNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BudgetWhereUniqueInput_1.BudgetWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BudgetUpdateManyWithoutCategoryNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BudgetWhereUniqueInput_1.BudgetWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BudgetUpdateManyWithoutCategoryNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BudgetWhereUniqueInput_1.BudgetWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BudgetUpdateManyWithoutCategoryNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BudgetWhereUniqueInput_1.BudgetWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BudgetUpdateManyWithoutCategoryNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BudgetUpdateWithWhereUniqueWithoutCategoryInput_1.BudgetUpdateWithWhereUniqueWithoutCategoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BudgetUpdateManyWithoutCategoryNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BudgetUpdateManyWithWhereWithoutCategoryInput_1.BudgetUpdateManyWithWhereWithoutCategoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BudgetUpdateManyWithoutCategoryNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BudgetScalarWhereInput_1.BudgetScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BudgetUpdateManyWithoutCategoryNestedInput.prototype, "deleteMany", void 0);
exports.BudgetUpdateManyWithoutCategoryNestedInput = BudgetUpdateManyWithoutCategoryNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BudgetUpdateManyWithoutCategoryNestedInput", {})
], BudgetUpdateManyWithoutCategoryNestedInput);
