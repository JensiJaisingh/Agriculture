import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup,Validators } from '@angular/forms';
import { CallserviceService } from '../callservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 emailvalid!:FormGroup
  constructor(private call:CallserviceService,private formbuilder:FormBuilder) { }

  ngOnInit(): void {
  this.emailvalid=this.formbuilder.group(
    {
       email:['',Validators.required],
       password:['',Validators.required]
    }
  )
  }
oneUser(formvalue:any){
       console.log(formvalue)
       this.call.emailpost(formvalue).subscribe((data:any)=>{
         alert('data was posted')
       })
}
}
