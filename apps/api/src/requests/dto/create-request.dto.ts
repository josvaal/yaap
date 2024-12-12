import { Request } from '@prisma/client';

export type CreateRequestDto = Omit<Request, 'id'>;
