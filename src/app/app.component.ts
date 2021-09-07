import { Component } from '@angular/core';
import { ScheduleService } from './schedule.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'schedule-chart-app';

  constructor(
    public service: ScheduleService
  ){
  }
}
