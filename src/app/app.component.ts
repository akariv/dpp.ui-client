import { Component } from '@angular/core';
import {ServerEventsService} from "./server-events.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app';
  errorMessage: string = null;

  constructor(private ses: ServerEventsService) {
    ses.error.subscribe((errorMessage) => {
      this.errorMessage = errorMessage;
    })
  }
}
