import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component.js';
import { EventComponent } from './event-comps/event/event.component.js';
import { ManageEventComponent } from './manage-event/manage-event.component.js';
import { EventsByLocationComponent } from './event-comps/events-by-location/events-by-location.component.js';
import { EventsByCityComponent } from './event-comps/events-by-city/events-by-city.component.js';
import { UserPurchasesComponent } from './user-purchases/user-purchases.component.js';
import { TicketByPurchaseComponent } from './ticket-by-purchase/ticket-by-purchase.component.js';

export const routes: Routes = [
  {path: '', title: 'Home',component: HomeComponent},
  {path: 'event', title: 'Evento', component: EventComponent},
  {path: 'manageevent', title: 'Administrar evento', component: ManageEventComponent},
  {path: 'location', title: 'Events por locación', component: EventsByLocationComponent},
  {path: 'city', title: 'Eventos por ciudad', component: EventsByCityComponent}, 
  {path: 'purchases', title: 'Mis compras', component: UserPurchasesComponent},
  {path: 'tickets', title: 'Mis entradas', component: TicketByPurchaseComponent},
  {path: '**', component: HomeComponent},
];
