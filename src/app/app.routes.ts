import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component.js';
import { EventComponent } from './event/event.component.js';
import { ManageEventComponent } from './manage-event/manage-event.component.js';


export const routes: Routes = [
  {path: '', title: 'Home',component: HomeComponent},
  {path: 'event/:eventname', component: EventComponent},
  {path: 'event', component: EventComponent},
  {path: 'manageevent', component: ManageEventComponent},
  {path: '**', component: HomeComponent} 
];
