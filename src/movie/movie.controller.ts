import { Controller, Get, Param } from '@nestjs/common';

@Controller('movie')
export class MovieController {

    @Get()
    getAll() {
        return 'Movie all Seclect';
    }

    @Get('/:id')
    GetOne(@Param('id') movieId : String){
        return `Movie Number id: ${movieId}`;
    }
}
