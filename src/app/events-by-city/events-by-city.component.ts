import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service.js';
import { ListOfEventsComponent } from '../list-of-events/list-of-events.component.js';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-events-by-city',
  standalone: true,
  imports: [ListOfEventsComponent, CommonModule],
  templateUrl: './events-by-city.component.html',
  styleUrl: './events-by-city.component.scss'
})
export class EventsByCityComponent {
  constructor(private route: ActivatedRoute, private apiservice: ApiService){}

  cityID: number = 0;
  city: any;
  variable: any;
  eventList: any[] = [];
  locations: any[] = [];

  ngOnInit(){
  this.route.params.subscribe(params => {
    this.cityID = params['ID'];
  })

  this.apiservice.getCity(this.cityID).subscribe(res => 
    {
      this.variable = res;
      this.city = this.variable.data
      this.locations = this.city.location
    })
}
}