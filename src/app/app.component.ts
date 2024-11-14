import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { JsonPipe, CommonModule } from '@angular/common';
import { EventPreviewComponent } from './event-comps/event-preview/event-preview.component';
import { ApiService } from './api.service';
import { HomeComponent } from './home/home.component.js';
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatButtonModule} from '@angular/material/button'; 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, EventPreviewComponent, JsonPipe, HomeComponent, RouterLink, MatTabsModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  arr = [
    {link: "Contacto", route: ""},
    {link: "Mis entradas", route: ""},
    {link: "Crear evento", route: "/manageevent"}
  ]
  activeLink = this.arr[0].link;
  title = 'QRera-FE';

    onClicked() {
      
    }

    onClickedGET(){

    }



}