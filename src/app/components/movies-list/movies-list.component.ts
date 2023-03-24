import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MoviesDataService } from '../../services/movies-data.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent {
  _movies$ = new Observable<any>();

  actorId: number = 0;

  constructor(
    private moviesDataService: MoviesDataService,
    private msgService: MessageService
  ) {
    this.msgService.getActorId().subscribe((id) => {
      this.actorId = id;
      this.getMoviesList();
    });
  }

  getMoviesList() {
    this._movies$ = new Observable<any>();
    this._movies$ = this.moviesDataService.getMoviesData().pipe(
      map((movie) => {
        return movie.filter((m) => {
          return m.actorId == this.actorId.toString();
        });
      })
    );
  }
}
