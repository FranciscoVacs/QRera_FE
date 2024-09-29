import { Component } from '@angular/core';
import { ApiService } from '../api.service.js';
import { JsonPipe, CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EventPreviewComponent } from '../event-preview/event-preview.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, EventPreviewComponent, JsonPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private apiservice: ApiService){}
  
  bool = true;
  variable: any;
  eventList: any = [];
    onclicked() {
        this.apiservice.postEvent().subscribe(response => this.variable = response)
    }
    ngOnInit() {
        this.apiservice.getEvents().subscribe(response => this.variable = response)
        this.eventList = this.variable?.data
    }
}
