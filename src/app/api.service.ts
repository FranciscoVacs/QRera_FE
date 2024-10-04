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

  postEvent() {
    return this.httpClient.post(this.route, 
    {
    "event_name": "Will it work?",
    "begin_datetime": "2010-10-31 20:00:00",
    "finish_datetime": "2010-10-31 23:00:00",
    "event_description": "I don't know!",
    "min_age": 10,
    "location": 1,
    "ticketType": [ 
      {    
      "ticketType_name": "sala de las artes",
      "begin_datetime": "2021-10-10 20:00:00",
      "finish_datetime": "2021-10-30 23:00:00",
      "price": 1000,
      "max_quantity":100,
      "event": 1
      }, 
      {
      "ticketType_name": "sala de las artes",
      "begin_datetime": "2021-10-10 20:00:00",
      "finish_datetime": "2021-10-30 23:00:00",
      "price": 1000,
      "max_quantity":100,
      "event": 1
      }
     ]
    }
);
  }
}
