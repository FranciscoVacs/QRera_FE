import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service.js';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-event',
  standalone: true,
  imports: [ReactiveFormsModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './manage-event.component.html',
  styleUrl: './manage-event.component.scss',

})
export class ManageEventComponent {
  constructor(private route: ActivatedRoute, private apiservice: ApiService){}
  selectedStartHour: string = ''
  selectedStartMinute: string = ''
  selectedFinishHour: string = ''
  selectedFinishMinute: string = ''
  updating: boolean = false;
  eventID: number = 0;
  hours: string[] = ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23']
  minutes: string[] = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55']
  event: any;
  res:any;
  locationList: any;
  variable: any;
  eventForm = new FormGroup ({
    event_name: new FormControl('', Validators.required),  
    begin_datetime: new FormControl('', Validators.required),
    finish_datetime: new FormControl(''),
    event_description: new FormControl(''),
    min_age: new FormControl(''),
    location: new FormControl('', Validators.required),
    ticketType: new FormControl('', Validators.required),
  })

  ngOnInit(){
    this.route.params.subscribe( params => {
      this.updating = params['updating'];
      this.eventID = params['eventID']
    })
    if (this.updating){
      this.apiservice.getEvent(this.eventID)
      .subscribe( (response) => {
        const variable: any = response
        this.event = variable.data
        this.eventForm.setValue({event_name: this.event.event_name, begin_datetime: this.event.begin_datetime, finish_datetime: this.event.finish_datetime, event_description: this.event.event_description, min_age: this.event.min_age, location: this.event.location, ticketType: this.event.ticketType})
      })
    }
    this.apiservice.getLocations()
    .subscribe(response => {
    this.variable = response;
    this.locationList = this.variable.data
    })
  }

  onSubmitEvent() {
    let minage: number = 1
    if (this.eventForm.value.min_age) {
    minage = +this.eventForm.value.min_age}
    this.event = 
    {
     "event_name": this.eventForm.value.event_name,
     "begin_datetime": this.formatDateTime(this.eventForm.value.begin_datetime, this.selectedStartHour, this.selectedStartMinute),
     "finish_datetime": this.formatDateTime(this.eventForm.value.finish_datetime, this.selectedFinishHour, this.selectedFinishMinute),
     "event_description": this.eventForm.value.event_description,
     "min_age": minage,
     "location": this.eventForm.value.location,
     "ticketType": this.eventForm.value.ticketType,
    }
   this.apiservice.postEvent(this.event).subscribe
    (response=> this.res = response) 
    alert(this.event.event_name) 
  }

  formatDateTime(date: any, selectedHour: string, selectedMinute: string){
   let month: string = (date.getMonth()+1) < 10 ? '0' + (date.getMonth()+1).toString() : (date.getMonth()+1).toString()
   let day: string = date.getDate() < 10 ? '0' + date.getDate().toString() : date.getDate().toString()
   let dateString: string = `${date.getFullYear().toString()}-${month}-${day} ${selectedHour}:${selectedMinute}:00`
   return dateString
  }
}
