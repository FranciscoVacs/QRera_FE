import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-manage-event',
  standalone: true,
  imports: [],
  templateUrl: './manage-event.component.html',
  styleUrl: './manage-event.component.scss'
})
export class ManageEventComponent {
  eventForm = new FormGroup ({
    event_name: new FormControl(''),  
    begin_datetime: new FormControl(''),
    finish_datetime: new FormControl(''),
    event_description: new FormControl(''),
    min_age: new FormControl(''),
    location: new FormControl(''),
    ticketType: new FormControl(''),
  })
}
