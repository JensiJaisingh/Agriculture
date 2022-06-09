import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CallserviceService } from '../callservice.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
contact!:FormGroup;
search!:string;
  constructor(private formbuilder:FormBuilder, private call:CallserviceService) { }

  ngOnInit(): void {
    this.contact=this.formbuilder.group(
      {
    name:['',Validators.required],
    email:['',Validators.required],
    occupation:['',Validators.required],
    talk:['',Validators.required]
  })
  }
submitcontact(formvalue:any){
console.log(formvalue)
this.call.query(formvalue).subscribe((response)=>{
  console.log(response);
  alert('data was posted')
},error=>{
  console.log(error);
})
  }

}
