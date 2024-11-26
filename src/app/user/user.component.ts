import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatDialogTitle, MatDialogActions, MatDialogContent, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../services/auth.service.js';
import { JWTService } from '../services/jwt.service.js';
import { MatButton } from '@angular/material/button';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIcon,     
    MatButton,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  constructor(private jwtService: JWTService,private dialogRef: MatDialogRef<UserComponent>, public authService: AuthService){}

  logout(){
    this.jwtService.destroyToken()
    this.authService.currentUserSig.set(null)
    this.closeDialog()
  }
  closeDialog() {
    this.dialogRef.close('');
  }
}
