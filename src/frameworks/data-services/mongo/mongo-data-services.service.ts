import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataServices } from 'src/core/abstracts';
import { MongoGenericRepository } from './mongo-generic-repository';
import {
  Movie,
  MovieDocument,
} from './model';

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  movies: MongoGenericRepository<Movie>;
  constructor(
    @InjectModel(Movie.name)
    private MovieRepository: Model<MovieDocument>,
  ) {}

  onApplicationBootstrap() {
    this.movies = new MongoGenericRepository<Movie>(this.MovieRepository);
  }
}