"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CategoryScalarFieldEnum;
(function (CategoryScalarFieldEnum) {
    CategoryScalarFieldEnum["id"] = "id";
    CategoryScalarFieldEnum["name"] = "name";
    CategoryScalarFieldEnum["icon"] = "icon";
    CategoryScalarFieldEnum["color"] = "color";
    CategoryScalarFieldEnum["parentCategoryId"] = "parentCategoryId";
})(CategoryScalarFieldEnum || (exports.CategoryScalarFieldEnum = CategoryScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(CategoryScalarFieldEnum, {
    name: "CategoryScalarFieldEnum",
    description: undefined,
});
