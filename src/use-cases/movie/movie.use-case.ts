import { Injectable } from '@nestjs/common';
import { Movie } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class MovieUseCases {
  constructor(
    private dataServices: IDataServices,
  ) {}

  getAllMovies(): Promise<Movie[]> {
    return this.dataServices.movies.getAll()
  }

  getMovieById(id: any): Promise<Movie> {
    return this.dataServices.movies.get(id);
  }

  deleteMovieById(id: any) {
    return this.dataServices.movies.delete(id);
  }

  async createMovie(movie: Movie): Promise<Movie> {
    try {
      
      const createdMovie = await this.dataServices.movies.create(movie);
      return createdMovie;
    } catch (error) {
      throw error;
    }
  }

  updateMovie(movieId: string, movie: Movie): Promise<Movie> {
    return this.dataServices.movies.update(movieId, movie);
  }
}