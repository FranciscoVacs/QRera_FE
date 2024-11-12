import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service.js';

@Component({
  selector: 'app-events-by-location',
  standalone: true,
  imports: [],
  templateUrl: './events-by-location.component.html',
  styleUrl: './events-by-location.component.scss'
})
export class EventsByLocationComponent {
  constructor(private route: ActivatedRoute, private apiservice: ApiService){}

  locationID: number = 0;
  
  ngOnInit(){
  this.route.params.subscribe(params => {
    this.locationID = params['ID'];
  })

  this.apiservice.getLocation(this.locationID).subscribe(res => {console.log(res)})
  }
}
