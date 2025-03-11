"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagUpdateManyWithoutTransactionsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagCreateOrConnectWithoutTransactionsInput_1 = require("../inputs/TagCreateOrConnectWithoutTransactionsInput");
const TagCreateWithoutTransactionsInput_1 = require("../inputs/TagCreateWithoutTransactionsInput");
const TagScalarWhereInput_1 = require("../inputs/TagScalarWhereInput");
const TagUpdateManyWithWhereWithoutTransactionsInput_1 = require("../inputs/TagUpdateManyWithWhereWithoutTransactionsInput");
const TagUpdateWithWhereUniqueWithoutTransactionsInput_1 = require("../inputs/TagUpdateWithWhereUniqueWithoutTransactionsInput");
const TagUpsertWithWhereUniqueWithoutTransactionsInput_1 = require("../inputs/TagUpsertWithWhereUniqueWithoutTransactionsInput");
const TagWhereUniqueInput_1 = require("../inputs/TagWhereUniqueInput");
let TagUpdateManyWithoutTransactionsNestedInput = class TagUpdateManyWithoutTransactionsNestedInput {
};
exports.TagUpdateManyWithoutTransactionsNestedInput = TagUpdateManyWithoutTransactionsNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagCreateWithoutTransactionsInput_1.TagCreateWithoutTransactionsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagUpdateManyWithoutTransactionsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagCreateOrConnectWithoutTransactionsInput_1.TagCreateOrConnectWithoutTransactionsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagUpdateManyWithoutTransactionsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagUpsertWithWhereUniqueWithoutTransactionsInput_1.TagUpsertWithWhereUniqueWithoutTransactionsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagUpdateManyWithoutTransactionsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagWhereUniqueInput_1.TagWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagUpdateManyWithoutTransactionsNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagWhereUniqueInput_1.TagWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagUpdateManyWithoutTransactionsNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagWhereUniqueInput_1.TagWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagUpdateManyWithoutTransactionsNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagWhereUniqueInput_1.TagWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagUpdateManyWithoutTransactionsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagUpdateWithWhereUniqueWithoutTransactionsInput_1.TagUpdateWithWhereUniqueWithoutTransactionsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagUpdateManyWithoutTransactionsNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagUpdateManyWithWhereWithoutTransactionsInput_1.TagUpdateManyWithWhereWithoutTransactionsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagUpdateManyWithoutTransactionsNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagScalarWhereInput_1.TagScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagUpdateManyWithoutTransactionsNestedInput.prototype, "deleteMany", void 0);
exports.TagUpdateManyWithoutTransactionsNestedInput = TagUpdateManyWithoutTransactionsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagUpdateManyWithoutTransactionsNestedInput", {})
], TagUpdateManyWithoutTransactionsNestedInput);
