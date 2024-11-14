import { Component } from '@angular/core';
import { JsonPipe, CommonModule } from '@angular/common';
import { EventPreviewComponent } from '../event-comps/event-preview/event-preview.component';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';
import { ListOfEventsComponent } from '../event-comps/list-of-events/list-of-events.component.js';
import { EventService } from '../services/event.service.js';
import { LocationService } from '../services/location.service.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, EventPreviewComponent, AutocompleteComponent, ListOfEventsComponent, JsonPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private eventService: EventService, private locationService: LocationService){}
  
  eventsLoaded: boolean = false;
  eventList: any = [];
  locationList: any = [];

    ngOnInit(){
      this.loadEvents();

    }

    loadEvents(){
      this.eventService.getEvents()
      .subscribe(events => {
      this.eventList = events
      })
      this.locationService.getLocations()
      .subscribe(locations => {
      this.locationList = locations
      })
    }
}
