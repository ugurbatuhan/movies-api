import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services/data-services.module';
import { MovieFactoryService } from './movie-factory.service';
import { MovieUseCases } from './movie.use-case';
@Module({
  imports: [DataServicesModule],
  providers: [MovieFactoryService, MovieUseCases],
  exports: [MovieFactoryService, MovieUseCases],
})
export class MovieUseCasesModule {}