import { CollectionsService } from './collections.service';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
export declare class CollectionsController {
    private readonly collectionsService;
    constructor(collectionsService: CollectionsService);
    create(createCollectionDto: CreateCollectionDto): Promise<{
        id: number;
        title: string;
        description: string | null;
        color: string;
    } | undefined>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        title: string;
        description: string | null;
        color: string;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        title: string;
        description: string | null;
        color: string;
    }>;
    update(id: string, updateCollectionDto: UpdateCollectionDto): Promise<{
        id: number;
        title: string;
        description: string | null;
        color: string;
    }>;
    remove(id: string): Promise<void>;
}
