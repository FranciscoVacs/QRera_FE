import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component.js';
import { EventComponent } from './event/event.component.js';
import { ManageEventComponent } from './manage-event/manage-event.component.js';
import { EventsByLocationComponent } from './events-by-location/events-by-location.component.js';
import { EventsByCityComponent } from './events-by-city/events-by-city.component.js';


export const routes: Routes = [
  {path: '', title: 'Home',component: HomeComponent},
  {path: 'event', title: 'Event page', component: EventComponent},
  {path: 'manageevent', title: 'Manage Event', component: ManageEventComponent},
  {path: 'location', title: 'Events by location', component: EventsByLocationComponent},
  {path: 'city', title: 'Events by city', component: EventsByCityComponent}, 
  {path: '**', component: HomeComponent},
];
