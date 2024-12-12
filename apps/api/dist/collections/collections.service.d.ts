import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class CollectionsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCollectionDto: CreateCollectionDto): Promise<{
        id: number;
        title: string;
        description: string | null;
        color: string;
    } | undefined>;
    findAll(): Prisma.PrismaPromise<{
        id: number;
        title: string;
        description: string | null;
        color: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        title: string;
        description: string | null;
        color: string;
    }>;
    update(id: number, updateCollectionDto: UpdateCollectionDto): Promise<{
        id: number;
        title: string;
        description: string | null;
        color: string;
    }>;
    remove(id: number): Promise<void>;
}
