import { Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';

@Controller('movie')
export class MovieController {

    @Get()
    getAll() {
        return 'Movie all Seclect';
    }

    @Get('/:id')
    GetOne(@Param('id') movieId : string){
        return `Movie Number id: ${movieId}`;
    }

    @Post()
    Create(){
        return 'Create Movie';

    }
    
    @Delete('/:id')
    remove(@Param('id') movieId: string){
        return `Move delete id ${movieId}`;
    }
    @Patch('/:id')
    patch(@Param('id') movieId: string){
        return `Movie patch movie id${movieId}`
    }
}
