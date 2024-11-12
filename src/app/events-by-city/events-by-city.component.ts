import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events-by-city',
  standalone: true,
  imports: [],
  templateUrl: './events-by-city.component.html',
  styleUrl: './events-by-city.component.scss'
})
export class EventsByCityComponent {
  constructor(private route: ActivatedRoute){}

  cityID: number = 0;
  
  ngOnInit(){
  this.route.params.subscribe(params => {
    this.cityID = params['ID'];
  })
}
}