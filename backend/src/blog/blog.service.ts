import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { PrismaService } from 'src/prisma.service';
import { PrismaClient, Prisma } from '@prisma/client';

@Injectable()
export class BlogService {
  constructor(private prisma: PrismaService) {}

  async create(createBlogDto: CreateBlogDto) {
    const { title, content, seo_title, seo_keyword } = createBlogDto;
    let blog: Prisma.BlogCreateInput;
    let seo: Prisma.SEOCreateInput;
    blog = {
      title,
      content,
    };
    if (seo_title) {
      seo.tilte = seo_title;
    }
    if (seo_keyword) {
      seo.keyword = seo_keyword;
    }

    console.log(blog);

    await this.prisma.blog.create({
      data: blog,
    });

    // if (seo) {
    //   this.prisma.sEO.create({
    //     data: seo,
    //   });
    // }
    return {
      res: 'success',
    };
  }

  findAll() {
    return `This action returns all blog`;
  }

  findOne(id: number) {
    return `This action returns a #${id} blog`;
  }

  update(id: number, updateBlogDto: UpdateBlogDto) {
    return `This action updates a #${id} blog`;
  }

  remove(id: number) {
    return `This action removes a #${id} blog`;
  }
}
