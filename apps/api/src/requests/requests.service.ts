import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class RequestsService {
  constructor(private prisma: PrismaService) {}

  async create(createRequestDto: CreateRequestDto) {
    try {
      return await this.prisma.request.create({
        data: createRequestDto,
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
    return this.prisma.request.findMany();
  }

  async findOne(id: number) {
    const requestFound = await this.prisma.request.findUnique({
      where: {
        id,
      },
    });

    if (!requestFound) {
      throw new NotFoundException(`Request #${id} not found`);
    }

    return requestFound;
  }

  async update(id: number, updateRequestDto: UpdateRequestDto) {
    const requestFound = await this.prisma.request.update({
      where: {
        id,
      },
      data: updateRequestDto,
    });

    if (!requestFound) {
      throw new NotFoundException(`Request #${id} not found`);
    }

    return requestFound;
  }

  async remove(id: number) {
    const deletedRequest = await this.prisma.request.delete({
      where: {
        id,
      },
    });
    if (!deletedRequest) {
      throw new NotFoundException(`Request #${id} not found`);
    }
  }
}
