import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListOfEventsComponent } from '../list-of-events/list-of-events.component.js';
import {CommonModule} from '@angular/common';
import { CityService } from '../../services/city.service.js';

@Component({
  selector: 'app-events-by-city',
  standalone: true,
  imports: [ListOfEventsComponent, CommonModule],
  templateUrl: './events-by-city.component.html',
  styleUrl: './events-by-city.component.scss'
})
export class EventsByCityComponent {
  constructor(private route: ActivatedRoute, private cityService: CityService){}

  cityID: number = 0;
  city: any;
  eventList: any[] = [];
  locations: any[] = [];

  ngOnInit(){
  this.route.params.subscribe(params => {
    this.cityID = params['ID'];
  })

  this.cityService.getCityById(this.cityID).subscribe(city => 
    {
      this.city = city
      this.locations = this.city.location
    })
}
}