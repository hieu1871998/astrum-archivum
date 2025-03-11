"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTagResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateTagArgs_1 = require("./args/AggregateTagArgs");
const Tag_1 = require("../../../models/Tag");
const AggregateTag_1 = require("../../outputs/AggregateTag");
const helpers_1 = require("../../../helpers");
let AggregateTagResolver = class AggregateTagResolver {
    async aggregateTag(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tag.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateTagResolver = AggregateTagResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTag_1.AggregateTag, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTagArgs_1.AggregateTagArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateTagResolver.prototype, "aggregateTag", null);
exports.AggregateTagResolver = AggregateTagResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tag_1.Tag)
], AggregateTagResolver);
