import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { JWTService } from '../services/jwt.service.js';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { PurchaseService } from '../services/purchase.service.js';

@Component({
  selector: 'app-ticket-by-purchase',
  standalone: true,
  imports: [NgFor, MatButtonModule, MatCardModule ],
  templateUrl: './ticket-by-purchase.component.html',
  styleUrl: './ticket-by-purchase.component.scss'
})
export class TicketByPurchaseComponent {

  constructor(private purchaseService: PurchaseService, private http: HttpClient, private route: ActivatedRoute ,private router: Router, private jwtService: JWTService){}
  tickets: any[] = []
  purchase: any
  purchaseId: number = 0

  ngOnInit(){
    if(this.jwtService.getToken() === null){
      this.router.navigate([''])
    }
    this.route.params.subscribe(params => {
    this.purchaseId = params['purchaseID'];
    this.purchaseService.getPurchaseById(this.purchaseId)
    .subscribe(res => {this.purchase = res; this.tickets = res.ticket})
    })
  }

async downloadTicketPDF(ticketId: number) {
  try {
    const response = await fetch(`http://localhost:3000/api/purchase/${this.purchaseId}/ticket/${ticketId}`);
    const blob = await response.blob();

    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `ticket_${this.purchaseId}.pdf`;
    link.click();
  } catch (error) {
    console.error('Failed to download PDF', error);
  }
}


}