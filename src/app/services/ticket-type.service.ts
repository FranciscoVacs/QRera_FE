import { Injectable } from '@angular/core';
import { ApiService } from './api.service.js';

@Injectable({
  providedIn: 'root'
})
export class TicketTypeService {

  constructor(private apiService: ApiService) { }

  getTicketTypes() {
    return this.apiService.get(`/ticketType`);
  }

  postTicketType(ticketType: any, id: number) {
    return this.apiService.post(`/event` + `/${id}` + `/ticketType` , ticketType);
  }
}
