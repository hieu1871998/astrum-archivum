"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var BudgetScalarFieldEnum;
(function (BudgetScalarFieldEnum) {
    BudgetScalarFieldEnum["id"] = "id";
    BudgetScalarFieldEnum["userId"] = "userId";
    BudgetScalarFieldEnum["categoryId"] = "categoryId";
    BudgetScalarFieldEnum["periodStart"] = "periodStart";
    BudgetScalarFieldEnum["periodEnd"] = "periodEnd";
    BudgetScalarFieldEnum["limit"] = "limit";
    BudgetScalarFieldEnum["createdAt"] = "createdAt";
    BudgetScalarFieldEnum["updatedAt"] = "updatedAt";
})(BudgetScalarFieldEnum || (exports.BudgetScalarFieldEnum = BudgetScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(BudgetScalarFieldEnum, {
    name: "BudgetScalarFieldEnum",
    description: undefined,
});
