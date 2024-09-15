import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event/event.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, EventComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'QRera-FE';
  eventList = [
    {
        "id": 1,
        "name": "Rock en el parque",
        "image": "./assets/event-banners/1.jpg",
        "begin_datetime": "2024-09-01T20:00:00",
        "finish_datetime": "2024-09-01T23:00:00",
        "event_description": "Concierto de rock en el parque central.",
        "min_age": 18,
        "location_id": 1
    },
    {
        "id": 2,
        "name": "Arte de la nueva era",
        "image": "./assets/event-banners/2.jpg",
        "begin_datetime": "2024-09-05T18:00:00",
        "finish_datetime": "2024-09-05T21:00:00",
        "event_description": "Exposición de arte contemporáneo.",
        "min_age": 12,
        "location_id": 2
    },
    {
        "id": 3,
        "name": "Cine bajo las estrellas",
        "image": "./assets/event-banners/3.jpg",
        "begin_datetime": "2024-09-10T19:30:00",
        "finish_datetime": "2024-09-10T22:30:00",
        "event_description": "Proyección de película al aire libre.",
        "min_age": 16,
        "location_id": 3
    },
    {
        "id": 4,
        "name": "Heads will roll",
        "image": "./assets/event-banners/4.jpg",
        "begin_datetime": "2024-09-15T21:00:00",
        "finish_datetime": "2024-09-16T02:00:00",
        "event_description": "Fiesta de música electrónica.",
        "min_age": 21,
        "location_id": 4
    },
    {
        "id": 5,
        "name": "Conoce y comparte historias",
        "image": "./assets/event-banners/5.jpg",
        "begin_datetime": "2024-09-20T15:00:00",
        "finish_datetime": "2024-09-20T18:00:00",
        "event_description": "Feria de libros y cultura local.",
        "min_age": 0,
        "location_id": 5
    }
];
}
