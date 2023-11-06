import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IDataServices } from 'src/core/abstracts';
require('dotenv').config();
import {
    Movie,
    MovieSchema,
} from './model';
import { MongoDataServices } from './mongo-data-services.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Movie.name, schema: MovieSchema },
    ]),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: MongoDataServices,
    },
    
  ],
  exports: [IDataServices],
})
export class MongoDataServicesModule {}