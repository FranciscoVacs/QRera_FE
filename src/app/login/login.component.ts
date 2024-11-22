import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogTitle, MatDialogActions, MatDialogContent, MatDialogClose } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';  
import { ReactiveFormsModule, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [   NgIf, 
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
  username: string = ''
  password: string = ''
  login: boolean = true

  registerForm = new FormGroup ({
    user_name: new FormControl(''),  
    user_surname: new FormControl(''),
    birth_date: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

  onSubmitData(){
    console.log(this.registerForm.value.email)
  }
}
