import { Injectable } from '@nestjs/common';
import { MovieUseCases } from 'src/use-cases/movie';


@Injectable()
export class ApiFetchService {
  constructor(private movieUseCases: MovieUseCases){}
  

  async fetchDataFromApi(): Promise<any> {
    try {
      const allmovies = await this.movieUseCases.getAllMovies()
      if(allmovies){
        return "ok"
      }
        const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=primary_release_date.asc&vote_average.gte=8.4&vote_count.gte=1500&watch_region=TR&with_watch_providers=8';
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`
          }
        };
        
        const response = await fetch(url, options)
    
        if (!response.ok) {
          throw new Error();
        }
        const movies = await response.json();
        for (const movie of movies.results) {
          const url = `https://api.themoviedb.org/3/movie/${movie.id}`;
          const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${process.env.TMDB_API_KEY}`
            }
          };
          
        const response = await fetch(url, options)
        const movieFromFetch = await response.json()
        
        
          const movieForDb = {
            name: movieFromFetch?.original_title,
            overview: movieFromFetch?.overview,
            popularity: movieFromFetch?.popularity,
            voteAverage: movieFromFetch?.vote_average,
            voteCount: movieFromFetch?.vote_count,
            releaseDate: movieFromFetch?.release_date,
            genres: movieFromFetch?.genres,
          };
        
          await this.movieUseCases.createMovie(movieForDb);
        
        
      }
      

    } catch (error) {
      throw error
    }

} 

}

