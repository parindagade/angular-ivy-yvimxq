import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Actor } from '../../models/actor.model';
import { Movie } from '../../models/movies.model';
import { ActorsListService } from '../../services/actors-list.service';

@Component({
  selector: 'actor-selector',
  templateUrl: './actor-selector.component.html',
  styleUrls: ['./actor-selector.component.css'],
})
export class ActorSelectorComponent implements OnInit {
  _actors$: Observable<Actor[]> = new Observable();

  _moviesList: Observable<Movie[]> = new Observable();

  actorId: number = 0;

  constructor(private actorDataService: ActorsListService) {}

  ngOnInit() {
    // this.selectActor(2);
    this._actors$ = this.actorDataService.getActors().pipe(
      map((actor) => {
        return actor.filter((a) => a.age > 35);
      })
    );
  }

  selectActor(val: any) {
    this.actorId = val.value;
  }
}
