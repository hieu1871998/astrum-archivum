"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionUpdateManyWithoutTagsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateOrConnectWithoutTagsInput_1 = require("../inputs/TransactionCreateOrConnectWithoutTagsInput");
const TransactionCreateWithoutTagsInput_1 = require("../inputs/TransactionCreateWithoutTagsInput");
const TransactionScalarWhereInput_1 = require("../inputs/TransactionScalarWhereInput");
const TransactionUpdateManyWithWhereWithoutTagsInput_1 = require("../inputs/TransactionUpdateManyWithWhereWithoutTagsInput");
const TransactionUpdateWithWhereUniqueWithoutTagsInput_1 = require("../inputs/TransactionUpdateWithWhereUniqueWithoutTagsInput");
const TransactionUpsertWithWhereUniqueWithoutTagsInput_1 = require("../inputs/TransactionUpsertWithWhereUniqueWithoutTagsInput");
const TransactionWhereUniqueInput_1 = require("../inputs/TransactionWhereUniqueInput");
let TransactionUpdateManyWithoutTagsNestedInput = class TransactionUpdateManyWithoutTagsNestedInput {
};
exports.TransactionUpdateManyWithoutTagsNestedInput = TransactionUpdateManyWithoutTagsNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionCreateWithoutTagsInput_1.TransactionCreateWithoutTagsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutTagsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionCreateOrConnectWithoutTagsInput_1.TransactionCreateOrConnectWithoutTagsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutTagsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionUpsertWithWhereUniqueWithoutTagsInput_1.TransactionUpsertWithWhereUniqueWithoutTagsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutTagsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereUniqueInput_1.TransactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutTagsNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereUniqueInput_1.TransactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutTagsNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereUniqueInput_1.TransactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutTagsNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereUniqueInput_1.TransactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutTagsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionUpdateWithWhereUniqueWithoutTagsInput_1.TransactionUpdateWithWhereUniqueWithoutTagsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutTagsNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionUpdateManyWithWhereWithoutTagsInput_1.TransactionUpdateManyWithWhereWithoutTagsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutTagsNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionScalarWhereInput_1.TransactionScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutTagsNestedInput.prototype, "deleteMany", void 0);
exports.TransactionUpdateManyWithoutTagsNestedInput = TransactionUpdateManyWithoutTagsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionUpdateManyWithoutTagsNestedInput", {})
], TransactionUpdateManyWithoutTagsNestedInput);
