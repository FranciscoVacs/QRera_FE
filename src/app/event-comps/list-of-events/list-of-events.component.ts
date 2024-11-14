import { Component, Input } from '@angular/core';
import { EventPreviewComponent } from '../event-preview/event-preview.component.js';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-list-of-events',
  standalone: true,
  imports: [EventPreviewComponent, CommonModule],
  templateUrl: './list-of-events.component.html',
  styleUrl: './list-of-events.component.scss'
})
export class ListOfEventsComponent {
  constructor(){}


  @Input() eventList: any = [];
}
