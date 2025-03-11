"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionUpdateManyWithoutCategoryNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateManyCategoryInputEnvelope_1 = require("../inputs/TransactionCreateManyCategoryInputEnvelope");
const TransactionCreateOrConnectWithoutCategoryInput_1 = require("../inputs/TransactionCreateOrConnectWithoutCategoryInput");
const TransactionCreateWithoutCategoryInput_1 = require("../inputs/TransactionCreateWithoutCategoryInput");
const TransactionScalarWhereInput_1 = require("../inputs/TransactionScalarWhereInput");
const TransactionUpdateManyWithWhereWithoutCategoryInput_1 = require("../inputs/TransactionUpdateManyWithWhereWithoutCategoryInput");
const TransactionUpdateWithWhereUniqueWithoutCategoryInput_1 = require("../inputs/TransactionUpdateWithWhereUniqueWithoutCategoryInput");
const TransactionUpsertWithWhereUniqueWithoutCategoryInput_1 = require("../inputs/TransactionUpsertWithWhereUniqueWithoutCategoryInput");
const TransactionWhereUniqueInput_1 = require("../inputs/TransactionWhereUniqueInput");
let TransactionUpdateManyWithoutCategoryNestedInput = class TransactionUpdateManyWithoutCategoryNestedInput {
};
exports.TransactionUpdateManyWithoutCategoryNestedInput = TransactionUpdateManyWithoutCategoryNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionCreateWithoutCategoryInput_1.TransactionCreateWithoutCategoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutCategoryNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionCreateOrConnectWithoutCategoryInput_1.TransactionCreateOrConnectWithoutCategoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutCategoryNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionUpsertWithWhereUniqueWithoutCategoryInput_1.TransactionUpsertWithWhereUniqueWithoutCategoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutCategoryNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateManyCategoryInputEnvelope_1.TransactionCreateManyCategoryInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionCreateManyCategoryInputEnvelope_1.TransactionCreateManyCategoryInputEnvelope)
], TransactionUpdateManyWithoutCategoryNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereUniqueInput_1.TransactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutCategoryNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereUniqueInput_1.TransactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutCategoryNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereUniqueInput_1.TransactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutCategoryNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereUniqueInput_1.TransactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutCategoryNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionUpdateWithWhereUniqueWithoutCategoryInput_1.TransactionUpdateWithWhereUniqueWithoutCategoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutCategoryNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionUpdateManyWithWhereWithoutCategoryInput_1.TransactionUpdateManyWithWhereWithoutCategoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutCategoryNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionScalarWhereInput_1.TransactionScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutCategoryNestedInput.prototype, "deleteMany", void 0);
exports.TransactionUpdateManyWithoutCategoryNestedInput = TransactionUpdateManyWithoutCategoryNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionUpdateManyWithoutCategoryNestedInput", {})
], TransactionUpdateManyWithoutCategoryNestedInput);
