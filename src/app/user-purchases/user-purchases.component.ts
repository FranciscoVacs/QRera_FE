import { Component } from '@angular/core';
import { UserService } from '../services/user.service.js';
import { JWTService } from '../services/jwt.service.js';

@Component({
  selector: 'app-user-purchases',
  standalone: true,
  imports: [],
  templateUrl: './user-purchases.component.html',
  styleUrl: './user-purchases.component.scss'
})
export class UserPurchasesComponent {
  constructor(private userService: UserService, public jwtService: JWTService){}
  ngOnInit(){
    this.userService.getUserPurchases(this.jwtService.currentUserSig().id).subscribe(res => { console.log(res)})
  }
}
