import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service.js';
import { NgIf, NgSwitch, NgSwitchCase, NgFor } from '@angular/common';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [NgIf, NgSwitch, NgSwitchCase, NgFor],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent {
  event: any;
  ticketAmount: number = 3;
  ticketTypes: any;
  ticketType: any;
  loc: any;
  variable: any;
  amounts: number[] = [1,2,3,4,5,6];
  state: number = 0;
  constructor(private route: ActivatedRoute, private apiservice: ApiService){}

  ngOnInit(){
  this.event = this.apiservice.actualEvent;
  this.apiservice.getTicketTypes().subscribe(
    response => {this.variable = response;
    this.ticketTypes = this.variable.data.filter((tType:any)=>tType.event==this.event.id);
    console.log(this.ticketTypes)
  })

  this.apiservice.getLocation(this.event.location)
    .subscribe(response => {
      this.variable = response; 
      this.loc = this.variable.data; })
  /*
  this.route.data.subscribe( 
    (data: {event: any}) => {
      this.event=data.event
    }
  )*/
  }


  setTicketType(chosenType: any){
    this.ticketType = chosenType
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
