"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTagArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagUpdateManyMutationInput_1 = require("../../../inputs/TagUpdateManyMutationInput");
const TagWhereInput_1 = require("../../../inputs/TagWhereInput");
let UpdateManyTagArgs = class UpdateManyTagArgs {
};
exports.UpdateManyTagArgs = UpdateManyTagArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagUpdateManyMutationInput_1.TagUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagUpdateManyMutationInput_1.TagUpdateManyMutationInput)
], UpdateManyTagArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagWhereInput_1.TagWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagWhereInput_1.TagWhereInput)
], UpdateManyTagArgs.prototype, "where", void 0);
exports.UpdateManyTagArgs = UpdateManyTagArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyTagArgs);
