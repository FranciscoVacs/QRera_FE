import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { JWTService } from '../services/jwt.service.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-by-purchase',
  standalone: true,
  imports: [MatButtonModule, MatCardModule ],
  templateUrl: './ticket-by-purchase.component.html',
  styleUrl: './ticket-by-purchase.component.scss'
})
export class TicketByPurchaseComponent {

  constructor(private router: Router, private jwtService: JWTService){}

  ngOnInit(){
    if(this.jwtService.getToken() === null){
      this.router.navigate([''])
    }
  }
}
