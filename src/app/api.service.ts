import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  eventRoute = 'http://localhost:3000/api/event';
  locationRoute = 'http://localhost:3000/api/location';
  ticketTypeRoute = 'http://localhost:3000/api/ticketType';
  actualEvent: any;
  
  getEvents() {
    return this.httpClient.get(this.eventRoute);
  }

  getEvent(id: number) {
    return this.httpClient.get(this.eventRoute + `/${id}`);
  }
  postEvent(event: any) {
    return this.httpClient.post(this.eventRoute, event);
  }

  getLocations() {
    return this.httpClient.get(this.locationRoute);
  }

  getLocation(id: number) {
    return this.httpClient.get(this.locationRoute + `/${id}`);
  }

  getTicketTypes() {
    return this.httpClient.get(this.ticketTypeRoute);
  }

}
