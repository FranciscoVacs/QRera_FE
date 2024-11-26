import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { JsonPipe, CommonModule } from '@angular/common';
import { EventPreviewComponent } from './event-comps/event-preview/event-preview.component';
import { HomeComponent } from './home/home.component.js';
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {LoginComponent} from './login/login.component.js';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { JWTService } from './services/jwt.service.js';
import { AuthService } from './services/auth.service.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, RouterOutlet, CommonModule, EventPreviewComponent, JsonPipe, HomeComponent, RouterLink, MatTabsModule, MatButtonModule, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private jwtService: JWTService, public authService: AuthService) {}

  readonly dialog = inject(MatDialog)

  arr = [
    {link: "Contacto", route: ""},
    {link: "Mis entradas", route: ""},
    {link: "Crear evento", route: "/manageevent"}
  ]
  activeLink = this.arr[0].link;
  title = 'QRera-FE';

  ngOnInit(){
  }


    openLogin() {
          const dialogRef = this.dialog.open(LoginComponent, {height: '100%', width: '50%',});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    }


}