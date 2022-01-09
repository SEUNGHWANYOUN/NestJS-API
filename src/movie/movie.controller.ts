import { Controller, Delete, Get, Param, Post, Patch, Body, Query } from '@nestjs/common';
import { Movie } from './entity/movie.entity';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {

    constructor (private readonly movieService : MovieService){};


    @Get('search')
    search(@Query('year') SearchYear : string ){
        return `Search movie for Year ${SearchYear}`
    }

    @Get()
    getAll() : Movie[]{
        return this.movieService.getAll();
    }

    @Get('/:id')
    GetOne(@Param('id') movieId : string){
        return this.movieService.getOne(movieId);
    }

    @Post()
    Create(@Body() MovieData){
        return this.movieService.create(MovieData);

    } 
    @Delete('/:id')
    remove(@Param('id') movieId: string){
        return this.movieService.deleate(movieId);
    }
    @Patch('/:id')
    patch(@Param('id') movieId: string, @Body() MovieData){
        return {
            'Moviedata' : movieId,
            ...MovieData
        }
    }

    
}
