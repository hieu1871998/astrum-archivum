"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagCreateNestedManyWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagCreateOrConnectWithoutTransactionsInput_1 = require("../inputs/TagCreateOrConnectWithoutTransactionsInput");
const TagCreateWithoutTransactionsInput_1 = require("../inputs/TagCreateWithoutTransactionsInput");
const TagWhereUniqueInput_1 = require("../inputs/TagWhereUniqueInput");
let TagCreateNestedManyWithoutTransactionsInput = class TagCreateNestedManyWithoutTransactionsInput {
};
exports.TagCreateNestedManyWithoutTransactionsInput = TagCreateNestedManyWithoutTransactionsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagCreateWithoutTransactionsInput_1.TagCreateWithoutTransactionsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagCreateNestedManyWithoutTransactionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagCreateOrConnectWithoutTransactionsInput_1.TagCreateOrConnectWithoutTransactionsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagCreateNestedManyWithoutTransactionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagWhereUniqueInput_1.TagWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagCreateNestedManyWithoutTransactionsInput.prototype, "connect", void 0);
exports.TagCreateNestedManyWithoutTransactionsInput = TagCreateNestedManyWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagCreateNestedManyWithoutTransactionsInput", {})
], TagCreateNestedManyWithoutTransactionsInput);
