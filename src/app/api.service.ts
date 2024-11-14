import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  baseRoute = 'http://localhost:3000/api';
  actualEvent: any;
  
  getEvents() {
    return this.httpClient.get(this.baseRoute + `/event`);
  }

  getEvent(id: number) {
    return this.httpClient.get(this.baseRoute  + `/event` + `/${id}`);
  }
  postEvent(event: any) {
    return this.httpClient.post(this.baseRoute  + `/event`, event);
  }

  updateEvent(event: any, id: number) {
    return this.httpClient.patch(this.baseRoute  + `/event` + `/${id}`, event);
  }

  deleteEvent(id:number){
    return this.httpClient.delete(this.baseRoute  + `/event` + `/${id}`)
  }
  getLocations() {
    return this.httpClient.get(this.baseRoute  + `/location`);
  }

  getLocation(id: number) {
    return this.httpClient.get(this.baseRoute  + `/location` + `/${id}`);
  }

  getCities() {
    return this.httpClient.get(this.baseRoute  + `/city`)
  }

  getCity(id:number) {
    return this.httpClient.get(this.baseRoute  + `/city` + `/${id}`)
  }

  postTicketType(ticketType: any) {
    return this.httpClient.post(this.baseRoute  + `/ticketType`, ticketType);
  }
  
  getTicketTypes() {
    return this.httpClient.get(this.baseRoute  + `/ticketType`);
  }

  getDJs() {
    return this.httpClient.get(this.baseRoute  + `/dj`);
  }
}
