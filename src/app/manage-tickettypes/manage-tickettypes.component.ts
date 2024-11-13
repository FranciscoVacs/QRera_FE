import { Component, signal, Output, EventEmitter } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import { NgIf, NgSwitch, NgSwitchCase, NgFor, CommonModule } from '@angular/common';



@Component({
  selector: 'app-manage-tickettypes',
  standalone: true,
  imports: [NgIf, CommonModule, ReactiveFormsModule, FormsModule, MatIconModule, MatExpansionModule, MatButtonModule, MatFormFieldModule, MatDatepickerModule, MatInputModule],
  templateUrl: './manage-tickettypes.component.html',
  styleUrl: './manage-tickettypes.component.scss'
})
export class ManageTickettypesComponent {
  
  readonly panelOpenState = signal(false);
  tickettypes: any[] = [];
  isFormActivated: boolean = false;
  @Output() ticketListEvent = new EventEmitter<any>();

  tickettypeForm = new FormGroup ({
    ticketType_name: new FormControl('', Validators.required),  
    begin_datetime: new FormControl('', Validators.required),
    finish_datetime: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    max_quantity: new FormControl('', Validators.required),
  })


  toggleForm(){
    this.isFormActivated = !this.isFormActivated
  }


  onSubmitTickettype() {
    let price: number = 0;
    if (this.tickettypeForm.value.price) {
      price = +this.tickettypeForm.value.price
    }
    let tickettype = {
      "ticketType_name": this.tickettypeForm.value.ticketType_name,
      "begin_datetime": this.tickettypeForm.value.begin_datetime,
      "finish_datetime": this.tickettypeForm.value.finish_datetime,
      "price": price,
      "max_quantity": this.tickettypeForm.value.max_quantity
    }
    this.tickettypes.push(tickettype)
    this.sendTicketList()
    /* load all inputs into a tickettype object */
  }

  sendTicketList(){
    console.log('ashuda')
    this.ticketListEvent.emit(this.tickettypes)
  }
}
