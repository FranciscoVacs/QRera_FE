import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service.js';
import { AsyncPipe, JsonPipe, CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EventPreviewComponent } from '../event-preview/event-preview.component';
import { Router } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, CommonModule, EventPreviewComponent, JsonPipe, FormsModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private apiservice: ApiService){}
  
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];

  bool = true;
  variable: any;
  eventsLoaded: boolean = false;
  eventList: any = [];
  locationList: any = [];
  returnLocation: any;

    ngOnInit(){
      this.loadEvents();

    }

    findLocation(id: number){
      this.returnLocation = this.locationList.find((loc:any) => this.eventList[id].location == loc.id)
      return this.returnLocation
    }

    loadEvents(){
        this.apiservice.getEvents()
        .subscribe(response => {
        this.variable = response;
        this.eventList = this.variable.data
        })
        this.apiservice.getLocations()
        .subscribe(response => {
        this.variable = response;
        this.locationList = this.variable.data
        })
        }
}
