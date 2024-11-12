import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component.js';
import { EventComponent } from './event/event.component.js';
import { ManageEventComponent } from './manage-event/manage-event.component.js';
import { EventsByLocationComponent } from './events-by-location/events-by-location.component.js';
import { EventsByCityComponent } from './events-by-city/events-by-city.component.js';


export const routes: Routes = [
  {path: '', title: 'Home',component: HomeComponent},
  {path: 'event', component: EventComponent},
  {path: 'manageevent', component: ManageEventComponent},
  {path: 'location', component: EventsByLocationComponent},
  {path: 'city', component: EventsByCityComponent}, 
  {path: '**', component: HomeComponent},
];
