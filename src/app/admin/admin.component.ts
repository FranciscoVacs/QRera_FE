import { Component } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [MatFormField, MatLabel],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
