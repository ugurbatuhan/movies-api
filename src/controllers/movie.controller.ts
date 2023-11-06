import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { CreateMovieDto, UpdateMovieDto, } from '../core/dtos';
import { MovieUseCases, MovieFactoryService } from 'src/use-cases/movie';
import { Movie } from 'src/core/entities';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('Movies')
@Controller('api/movie')
export class MovieController {
  constructor(
    private movieUseCases: MovieUseCases,
    private movieFactoryService: MovieFactoryService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Get all movies', description: 'Get a list of all movies.' })
  @ApiResponse({ status: 200, description: 'List of movies', type: Movie })
  async getAll() {
    return this.movieUseCases.getAllMovies();
  }

  @ApiOperation({ summary: 'Get a movie by ID', description: 'Get a single movie by its ID.' })
  @ApiParam({ name: 'id', description: 'Movie ID' })
  @ApiResponse({ status: 200, description: 'The found movie', type: Movie })
  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.movieUseCases.getMovieById(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a movie', description: 'Delete an existing movie.' })
  @ApiParam({ name: 'id', description: 'Movie ID' })
  @ApiResponse({ status: 200, description: 'The deleted movie', type: Movie })
  async deleteById(@Param('id') id: any) {
    return this.movieUseCases.deleteMovieById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new movie', description: 'Create a new movie.' })
  @ApiBody({ type: CreateMovieDto })
  @ApiResponse({ status: 201, description: 'The created movie', type: Movie })
  async createMovie(@Body() movieDto: CreateMovieDto) : Promise<Movie> {

    try {
      const movie = this.movieFactoryService.createNewMovie(movieDto);
      const createdMovie = await this.movieUseCases.createMovie(movie);
        
      return createdMovie
    } catch (error) {
        throw error
    }
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a movie', description: 'Update an existing movie.' })
  @ApiParam({ name: 'id', description: 'Movie ID' })
  @ApiBody({ type: UpdateMovieDto })
  @ApiResponse({ status: 200, description: 'The updated movie', type: Movie })
  updateMovie(
    @Param('id') movieId: string,
    @Body() updateMovieDto: UpdateMovieDto,
  ) {
    const movie = this.movieFactoryService.updateMovie(updateMovieDto);
    return this.movieUseCases.updateMovie(movieId, movie);
  }
}