import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JWTService {

  constructor() { }

  getToken(){
    /*return localStorage.getItem('token')*/
    return typeof window !== 'undefined' ? localStorage.getItem('token') : null
  }

  setToken(token: string){
  }

  destroyToken(){
/*    window.localStorage.removeItem('token')*/
    return typeof window !== 'undefined' ? localStorage.removeItem('token') : null
  }
  
}
