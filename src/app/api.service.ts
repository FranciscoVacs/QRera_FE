import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  route = 'http://localhost:3000/api/event';
  actualEvent: any;
  
  getEvents() {
    return this.httpClient.get(this.route);
  }

  getEvent(id: number) {
    return this.httpClient.get(`http://localhost:3000/api/event/${id}`);
  }
  postEvent() {
    return this.httpClient.post(this.route, 
    {
    "event_name": "Will it work?",
    "begin_datetime": "2010-10-31 20:00:00",
    "finish_datetime": "2010-10-31 23:00:00",
    "event_description": "I don't know!",
    "min_age": 10,
    "location": 2,
    });
  }

  getLocation(id: number) {
    return this.httpClient.get(`http://localhost:3000/api/location/${id}`);
  }

  getTicketTypes() {
    return this.httpClient.get(`http://localhost:3000/api/ticketType`);
  }

}
