"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionsModule = void 0;
const common_1 = require("@nestjs/common");
const collections_service_1 = require("./collections.service");
const collections_controller_1 = require("./collections.controller");
const prisma_service_1 = require("../prisma/prisma.service");
let CollectionsModule = class CollectionsModule {
};
exports.CollectionsModule = CollectionsModule;
exports.CollectionsModule = CollectionsModule = __decorate([
    (0, common_1.Module)({
        controllers: [collections_controller_1.CollectionsController],
        providers: [collections_service_1.CollectionsService, prisma_service_1.PrismaService],
    })
], CollectionsModule);
//# sourceMappingURL=collections.module.js.map