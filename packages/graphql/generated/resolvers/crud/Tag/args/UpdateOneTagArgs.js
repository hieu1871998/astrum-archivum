"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneTagArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagUpdateInput_1 = require("../../../inputs/TagUpdateInput");
const TagWhereUniqueInput_1 = require("../../../inputs/TagWhereUniqueInput");
let UpdateOneTagArgs = class UpdateOneTagArgs {
};
exports.UpdateOneTagArgs = UpdateOneTagArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagUpdateInput_1.TagUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagUpdateInput_1.TagUpdateInput)
], UpdateOneTagArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagWhereUniqueInput_1.TagWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagWhereUniqueInput_1.TagWhereUniqueInput)
], UpdateOneTagArgs.prototype, "where", void 0);
exports.UpdateOneTagArgs = UpdateOneTagArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneTagArgs);
