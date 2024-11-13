import { Component, Input } from '@angular/core';
import {Router } from '@angular/router';
import { ApiService } from '../api.service';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-event-preview',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './event-preview.component.html',
  styleUrl: './event-preview.component.scss'
})
export class EventPreviewComponent {
  constructor(private router: Router, private apiservice: ApiService){}
 @Input() eventInput: any;
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
