import { Injectable } from '@nestjs/common';
import { Movie } from '../../core/entities';
import { CreateMovieDto, UpdateMovieDto } from '../../core/dtos';

@Injectable()
export class MovieFactoryService {
  createNewMovie(createMovieDto: CreateMovieDto) {
    const newMovie = new Movie();
    newMovie.name = createMovieDto.name;
    newMovie.overview = createMovieDto.overview;
    newMovie.popularity = createMovieDto.popularity;
    newMovie.voteAverage = createMovieDto.voteAverage;
    newMovie.voteCount = createMovieDto.voteCount;
    newMovie.releaseDate = createMovieDto.releaseDate;
    newMovie.genres = createMovieDto.genres
    return newMovie;
  }

  updateMovie(updateMovieDto: UpdateMovieDto) {
    const newMovie = new Movie();
    newMovie.name = updateMovieDto.name;
    newMovie.overview = updateMovieDto.overview;
    newMovie.popularity = updateMovieDto.popularity;
    newMovie.voteAverage = updateMovieDto.voteAverage;
    newMovie.voteCount = updateMovieDto.voteCount;
    newMovie.releaseDate = updateMovieDto.releaseDate;
    return newMovie;
  }
}