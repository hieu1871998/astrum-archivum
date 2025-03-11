"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CategoryCreateManyInput = class CategoryCreateManyInput {
};
exports.CategoryCreateManyInput = CategoryCreateManyInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CategoryCreateManyInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryCreateManyInput.prototype, "icon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryCreateManyInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CategoryCreateManyInput.prototype, "parentCategoryId", void 0);
exports.CategoryCreateManyInput = CategoryCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryCreateManyInput", {})
], CategoryCreateManyInput);
