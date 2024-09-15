import { Component, Input } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent {
 @Input() eventInput: any;


}
