import {Component} from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector:'app-form',
  standalone:true,
  imports:[FormsModule],
  templateUrl:'./form.html'
})
export class FormComponent{
  name="";


handleSubmit(){ 
  alert("Hello"+this.name);
}}