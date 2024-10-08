import { Component, Input } from '@angular/core';
import {Router } from '@angular/router';
import { ApiService } from '../api.service.js';

@Component({
  selector: 'app-event-preview',
  standalone: true,
  imports: [],
  templateUrl: './event-preview.component.html',
  styleUrl: './event-preview.component.scss'
})
export class EventPreviewComponent {
  constructor(private router: Router, private apiservice: ApiService){}
 @Input() eventInput: any;
  routename: any;
  loc: any;
  variable: any;

  ngOnInit(){
    this.routename = this.eventInput.event_name.toLowerCase();
    this.routename = this.routename.replaceAll(' ','-');
    this.apiservice.getLocation(this.eventInput.location)
    .subscribe(response => {
      this.variable = response; 
      this.loc = this.variable.data; 
      })
  }

  onClicked(){
    setTimeout(()=> this.router.navigate([`event`, {eventID: this.eventInput.id, locationID: this.loc.id}]), 2000);
  }
}
