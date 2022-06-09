import { FormGroup,Validators,FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CallserviceService } from '../callservice.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 emailvalid!:FormGroup;
 _data:any;
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
       console.log(formvalue);
       this.call.emailpost(formvalue).subscribe((_data:any)=>{
         alert('data was posted')
       },err=>{
         console.log(err);
       }
       )
}
}
