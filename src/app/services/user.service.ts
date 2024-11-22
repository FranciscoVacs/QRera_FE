import { Injectable } from '@angular/core';
import { ApiService } from './api.service.js';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) { }

  registerUser(user: any){
    return this.apiService.post('/user/register', user)
  }

  logUser(logdata: any){
    return this.apiService.post('/user/login', logdata)
  }

}
