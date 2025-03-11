"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tag_1 = require("../../../models/Tag");
const Transaction_1 = require("../../../models/Transaction");
const TagTransactionsArgs_1 = require("./args/TagTransactionsArgs");
const helpers_1 = require("../../../helpers");
let TagRelationsResolver = class TagRelationsResolver {
    async transactions(tag, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).tag.findUniqueOrThrow({
            where: {
                id: tag.id,
            },
        }).transactions({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.TagRelationsResolver = TagRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Transaction_1.Transaction], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Tag_1.Tag, Object, Object, TagTransactionsArgs_1.TagTransactionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TagRelationsResolver.prototype, "transactions", null);
exports.TagRelationsResolver = TagRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tag_1.Tag)
], TagRelationsResolver);
