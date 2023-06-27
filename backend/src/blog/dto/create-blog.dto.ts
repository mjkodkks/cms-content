import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
export class CreateBlogDto {
  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  content: string;

  @ApiProperty({
    required: false,
  })
  seo_title?: string;

  @ApiProperty({
    required: false,
  })
  seo_description?: string;

  @ApiProperty({
    required: false,
  })
  seo_keyword?: string;
}
