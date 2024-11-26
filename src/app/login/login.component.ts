import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogTitle, MatDialogActions, MatDialogContent, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';  
import { ReactiveFormsModule, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import { UserService } from '../services/user.service.js';
import { DateService } from '../services/date.service.js';
import { catchError, of } from 'rxjs';
import { MatDatepickerModule, MatDatepickerToggle } from '@angular/material/datepicker';
import {jwtDecode} from 'jwt-decode';
import { AuthService } from '../services/auth.service.js';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [   NgIf,
    MatDatepickerToggle,
    MatDatepickerModule,
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

  constructor( 
    private authService: AuthService,
    private userService: UserService, 
    private dateService: DateService, 
    private dialogRef: MatDialogRef<LoginComponent>){}

  email: string = ''
  password: string = ''
  loginBool: boolean = true
  feedback: any

  registerForm = new FormGroup ({
    user_name: new FormControl(''),  
    user_surname: new FormControl(''),
    birth_date: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

  register(){
    let formattedDate: string = this.dateService.formatDateTime(this.registerForm.value.birth_date,'00','00')
    console.log(this.registerForm.value.email)
    let newUser = {
      "email" : this.registerForm.value.email,
      "user_name" : this.registerForm.value.user_name,
      "user_surname" : this.registerForm.value.user_surname,
      "password" : this.registerForm.value.password,
      "birth_date" : formattedDate
    }
    this.userService.registerUser(newUser).pipe(
      catchError(err => 
        {return of({error: err})}
        ))
      .subscribe((res:any) => {
        console.log('loldab: ', res)
        if (res.error){
          this.feedback = res.error.error.message}
        else {
          let token: string = res.headers.get('token')
          let decodedToken = jwtDecode(token)
          let user
          console.log(decodedToken)
          /*
          this.userService.getUserById(decodedToken.id).subscribe((res:any)=>{
          user = res.user
          })*/
          localStorage.setItem('token', token)


          this.authService.currentUserSig.set(user)
          this.feedback = res.body.message
          this.closeDialog()
        }
    })
  }

  login(){
    this.userService.logUser({"email": this.email, "password": this.password}).pipe(
      catchError(err => 
        {return of({error: err})}
        ))
      .subscribe((res: any) => {
        console.log('loldab: ', res)
        if (res.error){
          this.feedback = res.error.error.message}
        else {
          let token: string = res.headers.get('token')
          let decodedToken: any = jwtDecode(token)
          let user
          console.log(decodedToken)
          this.userService.getUserById(decodedToken.id).subscribe(res=>{
            user = res
            this.authService.currentUserSig.set(user)
            console.log(this.authService.currentUserSig())
          })
          localStorage.setItem('token', token)

          this.feedback = res.body.message
          this.closeDialog()
        }
      })
  }
  
  closeDialog() {
    this.dialogRef.close('');
  }
}
