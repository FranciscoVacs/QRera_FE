import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events-by-location',
  standalone: true,
  imports: [],
  templateUrl: './events-by-location.component.html',
  styleUrl: './events-by-location.component.scss'
})
export class EventsByLocationComponent {
  constructor(private route: ActivatedRoute){}

  locationID: number = 0;
  
  ngOnInit(){
  this.route.params.subscribe(params => {
    this.locationID = params['ID'];
  })

  }
}
