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
  constructor(private router: Router, private apis: ApiService){}
 @Input() eventInput: any;
  routename: any;

  ngOnInit(){
    this.routename = this.eventInput.event_name.toLowerCase();
    this.routename = this.routename.replaceAll(' ','-');
  }

  onClicked(){
    this.apis.actualEvent = this.eventInput;
    setTimeout(()=> this.router.navigate([`event/${this.routename}`]), 2000);
  }
}
