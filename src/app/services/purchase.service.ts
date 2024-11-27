import { Injectable } from '@angular/core';
import { ApiService } from './api.service.js';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private apiService: ApiService) { }

  postPurchase(purchase: any){
    return this.apiService.post('/purchase', purchase)
  }
}
