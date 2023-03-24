import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
  constructor() {}

  private subject = new Subject<number>();
  subject_msg: any;

  sendActorId(actorId: number) {
    this.subject.next(actorId);
  }

  getActorId(): Observable<number> {
    return (this.subject_msg = this.subject.asObservable());
  }
}
