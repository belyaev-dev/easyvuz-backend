import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class UniversitiesService {
  constructor(readonly prisma: PrismaService) {}

  async getAll() {
    return this.prisma.university.findMany({
      include: {
        programs: {
          include: {
            type: true,
          },
        },
      },
    });
  }
}
