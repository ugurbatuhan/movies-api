import { Movie } from '../entities';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract movies: IGenericRepository<Movie>;
}