import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
export class CreateBlogDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  content: string;

  seo_title?: string;
  seo_keyword?: string;
}
