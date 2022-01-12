import { Module } from '@nestjs/common';
import { MovieController } from './movie/movie.controller';
import { MovieService } from './movie/movie.service';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [MovieController],
  providers: [MovieService],
})
export class AppModule {}
