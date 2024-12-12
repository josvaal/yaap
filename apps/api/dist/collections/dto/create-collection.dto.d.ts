import { Collection } from '@prisma/client';
export type CreateCollectionDto = Omit<Collection, 'id'>;
