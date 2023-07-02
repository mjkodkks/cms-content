import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { SeoModule } from './seo/seo.module';
@Module({
  imports: [BlogModule, SeoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
