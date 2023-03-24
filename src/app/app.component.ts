import { OnInit, Component, AfterViewInit } from '@angular/core';
import { MessageService } from './services/message.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  actorId: number = 0;

  constructor(private msgService: MessageService) {}

  ngOnInit() {
    this.msgService.sendActorId(1);
  }

  getActorId(event: any) {
    this.actorId = event.target.value;
    this.msgService.sendActorId(this.actorId);
  }
}
