import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogTitle, MatDialogActions, MatDialogContent, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';  
import { ReactiveFormsModule, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import { UserService } from '../services/user.service.js';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [   NgIf,
    MatIcon, 
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private userService: UserService, private dialogRef: MatDialogRef<LoginComponent>){}

  email: string = ''
  password: string = ''
  loginBool: boolean = true

  registerForm = new FormGroup ({
    user_name: new FormControl(''),  
    user_surname: new FormControl(''),
    birth_date: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

  register(){
    console.log(this.registerForm.value.email)
    let newUser = {
      "email" : this.registerForm.value.email,
      "user_name" : this.registerForm.value.user_name,
      "user_surname" : this.registerForm.value.user_surname,
      "password" : this.registerForm.value.password,
      "birth_date" : this.registerForm.value.birth_date
    }
    this.userService.registerUser(newUser)
  }

  login(){
    console.log('skdajs')
    this.userService.logUser({"email": this.email, "password": this.password})
  }
  
  closeDialog() {
    this.dialogRef.close('Pizza!');
  }
}
