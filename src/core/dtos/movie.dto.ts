import { IsString, IsNotEmpty, IsNumber, IsArray, ValidateNested } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
class GenreDto {
  @ApiProperty({ description: 'ID of the genre' })
  @IsNumber()
  id: number;

  @ApiProperty({ description: 'Name of the genre' })
  @IsString()
  name: string;
}
export class CreateMovieDto {


  @ApiProperty({ description: 'Name of the movie' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Overview of the movie' })
  @IsString()
  @IsNotEmpty()
  overview: string;

  @ApiProperty({ description: 'Popularity of the movie' })
  @IsNumber()
  @IsNotEmpty()
  popularity: number;

  @ApiProperty({ description: 'Avarage vote of the movie' })
  @IsNumber()
  @IsNotEmpty()
  voteAverage: number;

  @ApiProperty({ description: 'Avarage vote count of the movie' })
  @IsNumber()
  @IsNotEmpty()
  voteCount: number;

  @ApiProperty({ description: 'Release date of the movie' })
  @IsString()
  @IsNotEmpty()
  releaseDate: string;

  @ApiProperty({ 
    description: 'Genres of the movie',
    type: [GenreDto] 
  })
  @IsArray()
  @IsNotEmpty()
  genres: GenreDto[];

}

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}