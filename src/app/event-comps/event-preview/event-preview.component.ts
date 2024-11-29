import { Component, Input } from '@angular/core';
import {Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { EventService } from '../../services/event.service.js';
import { NgIf } from '@angular/common';
import { JWTService } from '../../services/jwt.service.js';
import {MatCardModule} from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-event-preview',
  standalone: true,
  imports: [NgIf, MatIconModule, MatButtonModule, MatCardModule, MatIcon],
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

  onDelete(event: Event){
    event.stopPropagation()
    this.eventService.deleteEvent(this.eventInput.id)
    .subscribe(response => {
    alert("Evento eliminado")
    })
  }

  onUpdate(event: Event){
    event.stopPropagation()
    setTimeout(()=> this.router.navigate([`manageevent`, {updating: true, eventID: this.eventInput.id}]));
  }
}
