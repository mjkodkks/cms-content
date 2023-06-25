import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { PrismaService } from 'src/prisma.service';
import { PrismaClient, Prisma } from '@prisma/client';

@Injectable()
export class BlogService {
  constructor(private prisma: PrismaService) {}

  async create(createBlogDto: CreateBlogDto) {
    const { title, content, seo_title, seo_keyword, seo_description } =
      createBlogDto;
    let blog: Prisma.BlogCreateInput;
    let seo;
    blog = {
      title,
      content,
    };

    const useSeo = seo_title || seo_keyword || seo_description;
    if (useSeo) {
      seo = {};

      if (seo_title) {
        seo.title = seo_title;
      }

      if (seo_keyword) {
        seo.keyword = seo_keyword;
      }

      if (seo_description) {
        seo.description = seo_description;
      }
    }

    console.log(blog);
    console.log(seo);

    const blogResponse = await this.prisma.blog.create({
      data: {
        ...blog,
        Seo: {
          create: useSeo
            ? {
                ...seo,
              }
            : undefined,
        },
      },
    });
    // if (seo) {
    //   const seoResponse = await this.prisma.seo.create({
    //     data: {
    //       ...seo,
    //       blog: {
    //         connect: {
    //           id: blogResponse.id,
    //         },
    //       },
    //     },
    //   });
    // }

    return {
      res: 'success',
    };
  }

  async findAll() {
    const blogs = await this.prisma.blog.findMany({
      include: {
        Seo: true,
      },
    });
    return blogs;
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
