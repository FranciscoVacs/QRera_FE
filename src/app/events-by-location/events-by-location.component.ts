import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service.js';
import { ListOfEventsComponent } from '../list-of-events/list-of-events.component.js';

@Component({
  selector: 'app-events-by-location',
  standalone: true,
  imports: [ListOfEventsComponent],
  templateUrl: './events-by-location.component.html',
  styleUrl: './events-by-location.component.scss'
})
export class EventsByLocationComponent {
  constructor(private route: ActivatedRoute, private apiservice: ApiService){}

  locationID: number = 0;
  location: any;
  variable: any;
  eventList: any[] = [];

  ngOnInit(){
  this.route.params.subscribe(params => {
    this.locationID = params['ID'];
  })

  this.apiservice.getLocation(this.locationID).subscribe(res => 
    {
      this.variable = res;
      this.location = this.variable.data
      this.eventList = this.variable.data.event
    })
  }
}
