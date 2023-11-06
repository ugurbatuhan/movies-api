import { Test, TestingModule } from '@nestjs/testing';
import { MovieUseCases } from './use-cases/movie';
import { Movie } from './core/entities';
describe('MovieUseCases', () => {
  let movieUseCases: MovieUseCases;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovieUseCases],
    }).compile();

    movieUseCases = module.get<MovieUseCases>(MovieUseCases);
  });

  it('should be defined', () => {
    expect(movieUseCases).toBeDefined();
  });

  it('getAllMovies should return an array of movies', async () => {
    const movies: Movie[] = await movieUseCases.getAllMovies();
    expect(movies).toBeInstanceOf(Array<Movie>);
  });

  it('getMovieById should return a movie by ID', async () => {
    const movieId = '';
    const movie: Movie = await movieUseCases.getMovieById(movieId);
    expect(movie).toBeInstanceOf(Movie);
  });

  it('deleteMovieById should delete a movie by ID', async () => {
    const movieId = '';
    const result = await movieUseCases.deleteMovieById(movieId);
    expect(result).toBeUndefined(); 
  });

  it('createMovie should create a new movie', async () => {
    const newMovie: Movie = {
      name: 'New Movie',
      overview: 'Movie overview text',
      popularity: 8.5,
      voteAverage: 4.7,
      voteCount: 1000,
      releaseDate: '2023-11-10',
      genres: [{id:22, name:'Action',}, {id:25, name:'Adventure'}],
    };
    const createdMovie: Movie = await movieUseCases.createMovie(newMovie);
    expect(createdMovie).toBeInstanceOf(Movie);
    expect(createdMovie.name).toBe('New Movie');
    expect(createdMovie.overview).toBe('Movie overview text');
  });
  
  
});
