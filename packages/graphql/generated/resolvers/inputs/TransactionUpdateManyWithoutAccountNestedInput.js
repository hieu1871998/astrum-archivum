"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionUpdateManyWithoutAccountNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateManyAccountInputEnvelope_1 = require("../inputs/TransactionCreateManyAccountInputEnvelope");
const TransactionCreateOrConnectWithoutAccountInput_1 = require("../inputs/TransactionCreateOrConnectWithoutAccountInput");
const TransactionCreateWithoutAccountInput_1 = require("../inputs/TransactionCreateWithoutAccountInput");
const TransactionScalarWhereInput_1 = require("../inputs/TransactionScalarWhereInput");
const TransactionUpdateManyWithWhereWithoutAccountInput_1 = require("../inputs/TransactionUpdateManyWithWhereWithoutAccountInput");
const TransactionUpdateWithWhereUniqueWithoutAccountInput_1 = require("../inputs/TransactionUpdateWithWhereUniqueWithoutAccountInput");
const TransactionUpsertWithWhereUniqueWithoutAccountInput_1 = require("../inputs/TransactionUpsertWithWhereUniqueWithoutAccountInput");
const TransactionWhereUniqueInput_1 = require("../inputs/TransactionWhereUniqueInput");
let TransactionUpdateManyWithoutAccountNestedInput = class TransactionUpdateManyWithoutAccountNestedInput {
};
exports.TransactionUpdateManyWithoutAccountNestedInput = TransactionUpdateManyWithoutAccountNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionCreateWithoutAccountInput_1.TransactionCreateWithoutAccountInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutAccountNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionCreateOrConnectWithoutAccountInput_1.TransactionCreateOrConnectWithoutAccountInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutAccountNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionUpsertWithWhereUniqueWithoutAccountInput_1.TransactionUpsertWithWhereUniqueWithoutAccountInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutAccountNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateManyAccountInputEnvelope_1.TransactionCreateManyAccountInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionCreateManyAccountInputEnvelope_1.TransactionCreateManyAccountInputEnvelope)
], TransactionUpdateManyWithoutAccountNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereUniqueInput_1.TransactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutAccountNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereUniqueInput_1.TransactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutAccountNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereUniqueInput_1.TransactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutAccountNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereUniqueInput_1.TransactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutAccountNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionUpdateWithWhereUniqueWithoutAccountInput_1.TransactionUpdateWithWhereUniqueWithoutAccountInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutAccountNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionUpdateManyWithWhereWithoutAccountInput_1.TransactionUpdateManyWithWhereWithoutAccountInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutAccountNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionScalarWhereInput_1.TransactionScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutAccountNestedInput.prototype, "deleteMany", void 0);
exports.TransactionUpdateManyWithoutAccountNestedInput = TransactionUpdateManyWithoutAccountNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionUpdateManyWithoutAccountNestedInput", {})
], TransactionUpdateManyWithoutAccountNestedInput);
