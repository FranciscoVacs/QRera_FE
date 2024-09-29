import { Component, Input } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-event-preview',
  standalone: true,
  imports: [],
  templateUrl: './event-preview.component.html',
  styleUrl: './event-preview.component.scss'
})
export class EventPreviewComponent {
  constructor(private router: Router){}
 @Input() eventInput: any;

  onTitleClicked(){
  setTimeout(()=> this.router.navigate(['event']), 2000);
  }
}
