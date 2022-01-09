import { Controller, Delete, Get, Param, Post, Patch, Body, Query } from '@nestjs/common';

@Controller('movie')
export class MovieController {


    @Get('search')
    search(@Query('year') SearchYear : string ){
        return `Search movie for Year ${SearchYear}`
    }

    @Get()
    getAll() {
        return 'Movie all Seclect';
    }

    @Get('/:id')
    GetOne(@Param('id') movieId : string){
        return `Movie Number id: ${movieId}`;
    }

    @Post()
    Create(@Body() MovieData){
        return MovieData;

    } 
    @Delete('/:id')
    remove(@Param('id') movieId: string){
        return `Move delete id ${movieId}`;
    }
    @Patch('/:id')
    patch(@Param('id') movieId: string, @Body() MovieData){
        return {
            'Moviedata' : movieId,
            ...MovieData
        }
    }

    
}
