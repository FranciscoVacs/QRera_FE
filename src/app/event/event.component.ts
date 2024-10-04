import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service.js';
import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [NgIf, NgSwitch, NgSwitchCase],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent {
  event: any;
  ticketAmount: number = 3;
  state: number = 0;
  constructor(private route: ActivatedRoute, private apis: ApiService){}

  ngOnInit(){
  this.event = this.apis.actualEvent;
  /*
  this.route.data.subscribe( 
    (data: {event: any}) => {
      this.event=data.event
    }
  )*/
  }

  updateState(){
    this.state++;
  }

  setTicketAmount(value: number){
    this.ticketAmount = value;
  }

  checkUserData(){
    /* Revisar si user esta logeado o no. Si no lo esta poner componente de login que tenga boton de crear cuenta*/
  }
}
