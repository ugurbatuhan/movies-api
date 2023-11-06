import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieController } from './controllers';
import { ApiFetchService } from './movie-api-service/api-fetch-service';
import { DataServicesModule } from './services/data-services/data-services.module';
import { MovieUseCasesModule } from './use-cases/movie';
import { ConfigModule } from '@nestjs/config';
import { setTimeout } from 'timers/promises';
@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }),
    DataServicesModule, DataServicesModule, MovieUseCasesModule
  ],
  controllers: [AppController, MovieController],
  providers: [AppService, ApiFetchService],
})
export class AppModule implements OnApplicationBootstrap {
  constructor(private readonly apiFetchService: ApiFetchService){}
  async onApplicationBootstrap() {

    const data = setTimeout(2000, await this.apiFetchService.fetchDataFromApi()) 

  }
}
