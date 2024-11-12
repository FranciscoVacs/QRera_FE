import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { JsonPipe, CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EventPreviewComponent } from '../event-preview/event-preview.component';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';
import { Router } from '@angular/router';
import { ListOfEventsComponent } from '../list-of-events/list-of-events.component.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, EventPreviewComponent, AutocompleteComponent, ListOfEventsComponent, JsonPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private apiservice: ApiService){}
  
  bool = true;
  variable: any;
  eventsLoaded: boolean = false;
  eventList: any = [];
  locationList: any = [];
  returnLocation: any;

    ngOnInit(){
      this.loadEvents();

    }

    loadEvents(){
        this.apiservice.getEvents()
        .subscribe(response => {
        this.variable = response;
        this.eventList = this.variable.data
        })
        this.apiservice.getLocations()
        .subscribe(response => {
        this.variable = response;
        this.locationList = this.variable.data
        })

        }
}
