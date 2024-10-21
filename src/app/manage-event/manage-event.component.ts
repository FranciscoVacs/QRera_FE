import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service.js';

@Component({
  selector: 'app-manage-event',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './manage-event.component.html',
  styleUrl: './manage-event.component.scss'
})
export class ManageEventComponent {
  constructor(private apiservice: ApiService){}
  event: any;
  res:any;
  eventForm = new FormGroup ({
    event_name: new FormControl('', Validators.required),  
    begin_datetime: new FormControl(''),
    finish_datetime: new FormControl(''),
    event_description: new FormControl(''),
    min_age: new FormControl(''),
    location: new FormControl(''),
    ticketType: new FormControl(''),
  })

  onSubmitEvent() {
    this.event = 
    {
     "event_name": this.eventForm.value.event_name,
     "begin_datetime": this.eventForm.value.begin_datetime,
     "finish_datetime": this.eventForm.value.finish_datetime,
     "event_description": this.eventForm.value.event_description,
     "min_age": this.eventForm.value.min_age,
     "location": this.eventForm.value.location,
    }
   this.apiservice.postEvent(this.event).subscribe
    (response=> this.res = response) 
    alert(typeof this.event.min_age) 
  }
}
