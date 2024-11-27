import { Component, Input } from '@angular/core';
import {Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { EventService } from '../../services/event.service.js';
import { NgIf } from '@angular/common';
import { JWTService } from '../../services/jwt.service.js';

@Component({
  selector: 'app-event-preview',
  standalone: true,
  imports: [NgIf, MatIconModule, MatButtonModule],
  templateUrl: './event-preview.component.html',
  styleUrl: './event-preview.component.scss'
})
export class EventPreviewComponent {
  constructor(private router: Router, private eventService: EventService, public jwtService: JWTService ){}
 @Input() eventInput: any;
  routename: any;

  onClicked(){
    setTimeout(()=> this.router.navigate([`event`, {eventID: this.eventInput.id}]));
  }

  onDelete(){
    this.eventService.deleteEvent(this.eventInput.id)
    .subscribe(response => {
    alert("Evento eliminado")
    })
  }

  onUpdate(){
    setTimeout(()=> this.router.navigate([`manageevent`, {updating: true, eventID: this.eventInput.id}]));
  }
}
