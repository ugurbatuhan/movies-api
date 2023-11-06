import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type MovieDocument = Movie & Document;

@Schema()
export class Movie {
  @Prop({ required: true })
  name: string;

  @Prop({required: true})
  overview: string;

  @Prop({required: true})
  popularity: number;
  
  @Prop({required: true})
  voteAverage: number;

  @Prop({required: true})
  voteCount: number;

  @Prop({required: true})
  releaseDate: string;

  @Prop({ required: true })
  genres: any[];

}

export const MovieSchema = SchemaFactory.createForClass(Movie);