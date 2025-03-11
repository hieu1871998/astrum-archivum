"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TagScalarFieldEnum;
(function (TagScalarFieldEnum) {
    TagScalarFieldEnum["id"] = "id";
    TagScalarFieldEnum["name"] = "name";
    TagScalarFieldEnum["transactionIds"] = "transactionIds";
})(TagScalarFieldEnum || (exports.TagScalarFieldEnum = TagScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(TagScalarFieldEnum, {
    name: "TagScalarFieldEnum",
    description: undefined,
});
