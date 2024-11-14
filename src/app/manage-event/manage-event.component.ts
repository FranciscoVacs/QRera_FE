import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, FormsModule} from '@angular/forms';
import { ApiService } from '../api.service';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ActivatedRoute } from '@angular/router';
import { ManageTickettypesComponent } from '../manage-tickettypes/manage-tickettypes.component.js';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-manage-event',
  standalone: true,
  imports: [ReactiveFormsModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule, MatButtonModule, FormsModule, ManageTickettypesComponent],
  templateUrl: './manage-event.component.html',
  styleUrl: './manage-event.component.scss',

})
export class ManageEventComponent {
  constructor(private route: ActivatedRoute, private apiservice: ApiService, private http: HttpClient){}
  selectedStartHour: string = '00'
  selectedStartMinute: string = '00'
  selectedFinishHour: string = '00'
  selectedFinishMinute: string = '00'
  atLeastOneticket: boolean = true;
  updating: boolean = false;
  eventID: number = 0;
  hours: string[] = ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23']
  minutes: string[] = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55']
  event: any;
  loadedEvent:any;
  ticketList: any;
  locationList: any;
  djList: any;
  selectedFile: any;
  variable: any;
  eventForm = new FormGroup ({
    event_name: new FormControl('', Validators.required),  
    begin_datetime: new FormControl('', Validators.required),
    finish_datetime: new FormControl('', Validators.required),
    event_description: new FormControl(''),
    min_age: new FormControl(''),
    location: new FormControl('', Validators.required),
    dj: new FormControl('', Validators.required),
    ticketType: new FormControl('', Validators.required),
  })

  ngOnInit(){
    window.scrollTo(0, 0);
    this.route.params.subscribe( params => {
      this.updating = params['updating'];
      this.eventID = params['eventID']
    })
    if (this.updating){
      this.apiservice.getEvent(this.eventID)
      .subscribe( (response) => {
        const variable: any = response
        this.event = variable.data
        this.eventForm
          .patchValue({event_name: this.event.event_name, event_description: this.event.event_description, 
          min_age: this.event.min_age, location: this.event.location.location_name, ticketType: 'a'})
      })}
    this.apiservice.getLocations()
    .subscribe(response => {
    this.variable = response;
    this.locationList = this.variable.data
    })
    this.apiservice.getDJs()
    .subscribe(response => {
    this.variable = response;
    this.djList = this.variable.data
    })
  }

  onFileSelected(event: any){
    this.selectedFile = event.target.files[0] 
  }

  updateTicketList(ticketList: any){
    this.ticketList = ticketList
    if (this.ticketList && this.atLeastOneticket){
      this.eventForm.patchValue({ticketType: 'Value'})
    }
  }

  onSubmitEvent() {
    let minage: number = 1

    if (this.eventForm.value.min_age) {
      minage = +this.eventForm.value.min_age
    }
    
    this.event = 
    {
     "event_name": this.eventForm.value.event_name,
     "begin_datetime": this.formatDateTime(this.eventForm.value.begin_datetime, this.selectedStartHour, this.selectedStartMinute),
     "finish_datetime":this.formatDateTime(this.eventForm.value.finish_datetime, this.selectedFinishHour, this.selectedFinishMinute),
     "event_description": this.eventForm.value.event_description,
     "min_age": minage,
     "location": this.eventForm.value.location,
     "dj": this.eventForm.value.dj,
    }
    let formdata = new FormData();
    formdata.append('event_name', this.event.event_name)
    formdata.append('begin_datetime',this.event.begin_datetime)
    formdata.append('finish_datetime',this.event.finish_datetime)
    formdata.append('event_description',this.event.event_description)
    formdata.append('min_age',this.event.min_age)
    formdata.append('cover_photo', this.selectedFile, this.selectedFile.name);
    formdata.append('location',this.event.location)
    formdata.append('dj',this.event.dj)

    if (this.updating){
      this.apiservice.updateEvent(formdata, this.eventID).subscribe
      (response => {let res = response; alert('Evento actualizado con éxito')}) 
    }
    else {
      this.apiservice.postEvent(formdata).subscribe
      (response=> 
        {
        this.loadedEvent = response; 
        this.postTicketTypes()
      }) 
    } 
  }

  postTicketTypes(){
      
      this.ticketList.forEach((ticket: any, index: number) => {
      ticket.begin_datetime = this.formatDateTime(ticket.begin_datetime, '00', '00')
      ticket.finish_datetime = this.formatDateTime(ticket.finish_datetime, '00', '00')
      ticket.event = this.loadedEvent.data.id;
      this.apiservice.postTicketType(ticket, this.loadedEvent.data.id).subscribe
          
      (response => 
        { 
          let res = response; 
          if (index+1===this.ticketList.length){alert('Evento cargado con éxito')}
        })
      });
  }

  formatDateTime(date: any, selectedHour: string, selectedMinute: string){
   let month: string = (date.getMonth()+1) < 10 ? '0' + (date.getMonth()+1).toString() : (date.getMonth()+1).toString()
   let day: string = date.getDate() < 10 ? '0' + date.getDate().toString() : date.getDate().toString()
   let dateString: string = `${date.getFullYear().toString()}-${month}-${day} ${selectedHour}:${selectedMinute}:00`
   return dateString
  }

}
