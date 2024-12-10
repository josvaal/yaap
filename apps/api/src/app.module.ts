import { Module } from '@nestjs/common';
import { CollectionsModule } from './collections/collections.module';
import { PrismaService } from './prisma/prisma.service';
import { RequestsModule } from './requests/requests.module';

@Module({
  imports: [CollectionsModule, RequestsModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
