import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JsonPipe, CommonModule } from '@angular/common';
import { EventComponent } from './event/event.component';
import { ApiService } from './api.service.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, EventComponent, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
    constructor(private apiservice: ApiService) {}
  title = 'QRera-FE';
  bool = true;
  variable: any;
  eventList: any = [];

    onclick() {
        this.apiservice.getEvents().subscribe(response => this.variable = response)
        this.eventList = this.variable.data
    }
    onclicked() {
        this.apiservice.postEvent().subscribe(response => this.variable = response)
    }

    ngOnInit() {
    }
}