import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getEvents() {
    return this.httpClient.get('http://localhost:3000/api/event');
  }

  postEvent() {
    return this.httpClient.post('http://localhost:3000/api/event', 
    {
    "event_name": "Nombre de evento",
    "begin_datetime": "2021-10-31 20:00:00",
    "finish_datetime": "2021-10-31 23:00:00",
    "event_description": "Descripcion de evento",
    "min_age": 18,
    "location": 1
});
  }
}
