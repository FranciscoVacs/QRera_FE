import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgIf, NgSwitch, NgSwitchCase, NgFor } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import { MatFormField } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { ManageTickettypesComponent } from '../manage-tickettypes/manage-tickettypes.component.js';
import { MatLabel } from '@angular/material/form-field';
import { MatOption } from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule, MatStepperModule, MatOption, MatLabel, MatSelect, MatFormField, MatListModule, ManageTickettypesComponent, NgIf, NgSwitch, NgSwitchCase, NgFor],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent {
  constructor(private route: ActivatedRoute, private apiservice: ApiService){}

  event: any;
  eventID: any;
  ticketAmount: any;
  selectedTicketType: any;
  variable: any;
  amounts: number[] = [1,2,3,4,5];
  state: number = 0;

  firstFormGroup  = new FormGroup ({
    firstCtrl: new FormControl('', Validators.required)
    })  
  secondFormGroup   = new FormGroup ({
    secondCtrl: new FormControl('', Validators.required)
    })

  ngOnInit(){
  window.scrollTo(0, 0);
  this.route.params.subscribe( params => {
    this.eventID = params['eventID'];
   })

  this.apiservice.getEvent(this.eventID)
  .subscribe(response => {
    this.variable = response; 
    this.event = this.variable.data
  });
  }

  optSelected() {
    this.selectedTicketType = this.firstFormGroup.value.firstCtrl
    console.log(this.selectedTicketType)  
  }

  amountSelected(){
    this.ticketAmount = this.secondFormGroup.value.secondCtrl
    console.log(this.ticketAmount)
  }

  checkUserData(){
    /* Revisar si user esta logeado o no. Si no lo esta poner componente de login que tenga boton de crear cuenta*/
  }
}
