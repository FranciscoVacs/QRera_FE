import { Injectable } from '@angular/core';
import { ApiService } from './api.service.js';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DjService {

  constructor(private apiService: ApiService) { }

  getDJs() {
    return this.apiService.get(`/dj`)
    .pipe(map((response: any) => response.data))
  }
}
