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
 @Input() locationInput: any;
  routename: any;
  variable: any;

  ngOnInit(){
    this.routename = this.eventInput.event_name.toLowerCase();
    this.routename = this.routename.replaceAll(' ','-');
  }

  onClicked(){
    setTimeout(()=> this.router.navigate([`event`, {eventID: this.eventInput.id, locationID: this.locationInput.id}]), 2000);
  }
}
