import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CollectionsService {
  constructor(private prisma: PrismaService) {}

  async create(createCollectionDto: CreateCollectionDto) {
    try {
      return await this.prisma.collection.create({
        data: createCollectionDto,
      });
    } catch (error) {
      console.log({ error });
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        console.log(error.code);
        if (error.code === 'P2002') {
          throw new ConflictException(
            'Collection with this title already exists',
          );
        }
        throw new InternalServerErrorException(error.message);
      }
      if (error instanceof Prisma.PrismaClientValidationError) {
        throw new InternalServerErrorException(error.message);
      }
    }
  }

  findAll() {
    return this.prisma.collection.findMany();
  }

  async findOne(id: number) {
    const collectionFound = await this.prisma.collection.findUnique({
      where: {
        id,
      },
    });

    if (!collectionFound) {
      throw new NotFoundException(`Collection #${id} not found`);
    }

    return collectionFound;
  }

  async update(id: number, updateCollectionDto: UpdateCollectionDto) {
    const collectionFound = await this.prisma.collection.update({
      where: {
        id,
      },
      data: updateCollectionDto,
    });

    if (!collectionFound) {
      throw new NotFoundException(`Collection #${id} not found`);
    }

    return collectionFound;
  }

  async remove(id: number) {
    const deletedCollection = await this.prisma.collection.delete({
      where: {
        id,
      },
    });
    if (!deletedCollection) {
      throw new NotFoundException(`Collection #${id} not found`);
    }
  }
}
