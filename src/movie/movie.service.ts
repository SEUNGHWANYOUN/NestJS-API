import { Injectable } from '@nestjs/common';
import { Movie } from './entity/movie.entity';

@Injectable()
export class MovieService {
    private movie: Movie[] =[];

    getAll():Movie[]{
        return this.movie;
    }

    getOne(id: string): Movie{
        return this.movie.find(movie => movie.id === +id);
    }  

    deleate(id: string): boolean{
        this.movie.filter(movie => movie.id !== +id);
        return true;
    }

    create(movieData){
        this.movie.push({
            id : this.movie.length +1,
            ...movieData
                }

        )
    }
}
