"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTagOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagWhereUniqueInput_1 = require("../../../inputs/TagWhereUniqueInput");
let FindUniqueTagOrThrowArgs = class FindUniqueTagOrThrowArgs {
};
exports.FindUniqueTagOrThrowArgs = FindUniqueTagOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagWhereUniqueInput_1.TagWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagWhereUniqueInput_1.TagWhereUniqueInput)
], FindUniqueTagOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueTagOrThrowArgs = FindUniqueTagOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueTagOrThrowArgs);
