import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatDialogTitle, MatDialogActions, MatDialogContent, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { JWTService } from '../services/jwt.service.js';
import { MatButton, MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIcon,     
    MatButton,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  constructor(public jwtService: JWTService, private dialogRef: MatDialogRef<UserComponent>){}

  logout(){
    this.jwtService.unloadUser()
    this.closeDialog()
  }

  closeDialog() {
    this.dialogRef.close('');
  }
}
