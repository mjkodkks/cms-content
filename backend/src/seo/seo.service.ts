import { Injectable } from '@nestjs/common';
import { CreateSeoDto } from './dto/create-seo.dto';
import { UpdateSeoDto } from './dto/update-seo.dto';
import { PrismaService } from 'src/prisma.service';
import { PrismaClient, Prisma } from '@prisma/client';

@Injectable()
export class SeoService {
  constructor(private prisma: PrismaService) { }
  async create(createSeoDto: CreateSeoDto) {
    const { title, description, google_keyword } = createSeoDto;

    const config_seo: Prisma.ConfigCreateInput = {};

    if (title) {
      config_seo.title_tag = title;
    }

    if (description) {
      config_seo.description = description;
    }

    if (google_keyword) {
      config_seo.google_keyword = google_keyword;
    }

    const res = await this.prisma.config.create({
      data: { ...config_seo },
    });

    return {
      res,
    };
  }

  async findAll() {
    const config = await this.prisma.config.findFirst();
    return config;
  }

  findOne(id: number) {
    return `This action returns a #${id} seo`;
  }

  async update(id: string, updateSeoDto: UpdateSeoDto) {
    const { title, description, google_keyword } = updateSeoDto;


    const config_seo: Prisma.ConfigCreateInput = {};

    if (title) {
      config_seo.title_tag = title;
    }

    if (description) {
      config_seo.description = description;
    }

    if (google_keyword) {
      config_seo.google_keyword = google_keyword;
    }

    const res = await this.prisma.config.update({
      where: { id },
      data: {
        ...config_seo,
      },
    });

    return {
      res,
    };
    return `This action updates a #${id} seo`;
  }

  remove(id: number) {
    return `This action removes a #${id} seo`;
  }
}
