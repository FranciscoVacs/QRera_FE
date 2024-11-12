import { Component, Input, OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autocomplete',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, ReactiveFormsModule, AsyncPipe],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.scss'
})
export class AutocompleteComponent {
  constructor(private router: Router, private apiservice: ApiService){}

  @Input() locationList: any;
  myControl = new FormControl('');
  options: string[] = [];
  filteredOptions?: Observable<string[]>;
  variable: any;
  cityList: any;
  optionName: string = '';
  targetRoute: string ='';
  foundValue: any;
  targetID: number = 0;

  ngOnInit() {

    this.apiservice.getCities().subscribe( response => {
      this.variable = response;
      this.cityList = this.variable.data;
      this.options = this.cityList.map((city: any) => city.city_name)
      .concat(this.locationList.map((location: any) => location.location_name));
    }) 

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  onOptionSelected(event:any){
    this.optionName = event.option.value;
    this.foundValue = this.locationList.find((loc:any) => loc.location_name === this.optionName)
    if (this.foundValue) {
      this.targetRoute = 'location';
      this.targetID = this.foundValue.id
    }
    else {
      this.foundValue = this.cityList.find((city:any) => city.city_name === this.optionName)
      if (this.foundValue) {
        this.targetRoute = 'city';
        this.targetID = this.foundValue.id
       }
      else {
        this.targetRoute = '';
       }    
    }

  }

  onSearchPrompted(event:any){
    /* go to route with location/city's id. */
    if (this.targetRoute === '')
    setTimeout(()=> this.router.navigate([`${this.targetRoute}`]));
    else 
    setTimeout(()=> this.router.navigate([`${this.targetRoute}`, {ID: this.targetID}]));
  }

}
