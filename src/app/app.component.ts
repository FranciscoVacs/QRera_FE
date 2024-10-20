import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { JsonPipe, CommonModule } from '@angular/common';
import { EventPreviewComponent } from './event-preview/event-preview.component';
import { ApiService } from './api.service.js';
import { HomeComponent } from './home/home.component.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, EventPreviewComponent, JsonPipe, HomeComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'QRera-FE';

    onClicked() {
      
    }

    onClickedGET(){

    }



}