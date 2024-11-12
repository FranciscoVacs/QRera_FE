import { Component, Input } from '@angular/core';
import {Router } from '@angular/router';
import { ApiService } from '../api.service';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-event-preview',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './event-preview.component.html',
  styleUrl: './event-preview.component.scss'
})
export class EventPreviewComponent {
  constructor(private router: Router, private apiservice: ApiService){}
 @Input() eventInput: any;
 @Input() locationInput: any;
  routename: any;
  variable: any;
  response: any;

  onClicked(){
    setTimeout(()=> this.router.navigate([`event`, {eventID: this.eventInput.id}]));
  }

  onDelete(){
    this.apiservice.deleteEvent(this.eventInput.id)
    .subscribe(response => {
    this.response = response;
    alert("Evento eliminado")
    })
  }

  onUpdate(){
    setTimeout(()=> this.router.navigate([`manageevent`, {updating: true, eventID: this.eventInput.id}]));
  }
}
