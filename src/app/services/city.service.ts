import { Injectable } from '@angular/core';
import { ApiService } from './api.service.js';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private apiService: ApiService) { }

  getCities() {
    return this.apiService.get(`/city`)
    .pipe(map((response: any) => response.data))
  }

  getCityById(id:number) {
    return this.apiService.get(`/city` + `/${id}`)
    .pipe(map((response: any) => response.data))
  }
}
