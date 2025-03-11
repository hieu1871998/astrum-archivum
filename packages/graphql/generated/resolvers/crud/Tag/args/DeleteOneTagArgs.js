"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneTagArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagWhereUniqueInput_1 = require("../../../inputs/TagWhereUniqueInput");
let DeleteOneTagArgs = class DeleteOneTagArgs {
};
exports.DeleteOneTagArgs = DeleteOneTagArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagWhereUniqueInput_1.TagWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagWhereUniqueInput_1.TagWhereUniqueInput)
], DeleteOneTagArgs.prototype, "where", void 0);
exports.DeleteOneTagArgs = DeleteOneTagArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneTagArgs);
