import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { NgIf, NgSwitch, NgSwitchCase, NgFor } from '@angular/common';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [NgIf, NgSwitch, NgSwitchCase, NgFor],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent {
  constructor(private route: ActivatedRoute, private apiservice: ApiService){}

  event: any;
  eventID: any;
  ticketAmount: number = 3;
  selectedTicketType: any;
  variable: any;
  amounts: number[] = [1,2,3,4,5,6];
  state: number = 0;

  ngOnInit(){
  this.route.params.subscribe( params => {
    this.eventID = params['eventID'];
   })

  this.apiservice.getEvent(this.eventID)
  .subscribe(response => {
    this.variable = response; 
    this.event = this.variable.data
  });
  }

  setTicketType(chosenType: any){
    this.selectedTicketType = chosenType
    this.state++;
  }
  setTicketAmount(value: number){
    this.ticketAmount = value;
    this.state++;
  }

  checkUserData(){
    /* Revisar si user esta logeado o no. Si no lo esta poner componente de login que tenga boton de crear cuenta*/
  }
}
