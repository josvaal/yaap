"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let CollectionsService = class CollectionsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createCollectionDto) {
        try {
            return await this.prisma.collection.create({
                data: createCollectionDto,
            });
        }
        catch (error) {
            console.log({ error });
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                console.log(error.code);
                if (error.code === 'P2002') {
                    throw new common_1.ConflictException('Collection with this title already exists');
                }
                throw new common_1.InternalServerErrorException(error.message);
            }
            if (error instanceof client_1.Prisma.PrismaClientValidationError) {
                throw new common_1.InternalServerErrorException(error.message);
            }
        }
    }
    findAll() {
        return this.prisma.collection.findMany();
    }
    async findOne(id) {
        const collectionFound = await this.prisma.collection.findUnique({
            where: {
                id,
            },
        });
        if (!collectionFound) {
            throw new common_1.NotFoundException(`Collection #${id} not found`);
        }
        return collectionFound;
    }
    async update(id, updateCollectionDto) {
        const collectionFound = await this.prisma.collection.update({
            where: {
                id,
            },
            data: updateCollectionDto,
        });
        if (!collectionFound) {
            throw new common_1.NotFoundException(`Collection #${id} not found`);
        }
        return collectionFound;
    }
    async remove(id) {
        const deletedCollection = await this.prisma.collection.delete({
            where: {
                id,
            },
        });
        if (!deletedCollection) {
            throw new common_1.NotFoundException(`Collection #${id} not found`);
        }
    }
};
exports.CollectionsService = CollectionsService;
exports.CollectionsService = CollectionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CollectionsService);
//# sourceMappingURL=collections.service.js.map