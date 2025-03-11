"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTagArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagCreateManyInput_1 = require("../../../inputs/TagCreateManyInput");
let CreateManyTagArgs = class CreateManyTagArgs {
};
exports.CreateManyTagArgs = CreateManyTagArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagCreateManyInput_1.TagCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyTagArgs.prototype, "data", void 0);
exports.CreateManyTagArgs = CreateManyTagArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyTagArgs);
