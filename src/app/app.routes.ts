import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component.js';
import { EventComponent } from './event/event.component.js';


export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'event', component: EventComponent},
  {path: '**', component: HomeComponent} 
];
