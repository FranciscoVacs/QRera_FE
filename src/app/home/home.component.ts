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
  eventsLoaded: boolean = false;
  eventList: any = [];

    onClicked() {
        this.apiservice.getEvents().subscribe(response => this.variable = response) 
    }

    onClickedGET(){
      this.loadEvents();
    }

    ngOnInit(){
      this.loadEvents();
    }

    loadEvents(){
        this.apiservice.getEvents().subscribe(response => this.variable = response) 
        this.eventList = this.variable?.data
        }
}
