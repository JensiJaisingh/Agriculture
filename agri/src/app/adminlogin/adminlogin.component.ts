import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { CallserviceService } from '../callservice.service';
import { ProductserviceService } from '../productservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
adminvalid!:FormGroup;
object:any=[];
admindata:any;
  constructor(private formbuilder:FormBuilder, private call:CallserviceService, private api1:ProductserviceService, private router:Router) { }

  ngOnInit(): void {
    this.adminvalid = this.formbuilder.group(
      {
        adminid:['',Validators.required],
        password:['',Validators.required],
        _id:[''],
        _rev:['']
        
      })
  this.adminuserlogin()
    }
    
  
adminUsermail(formvalue:any){
  console.log(formvalue)
  for (const iterator of this.object) {
  
    if(iterator.adminid == formvalue.adminid && iterator.password==formvalue.password){
    {
    console.log('hello');
  this.api1.showoff();
      
      this.router.navigate(['/dashboard'])
      alert('valid mail id ')
    }
    
      }
    }}
    adminuserlogin() {
    
      this.call.adminlogin().subscribe(data=>{
        console.log(data);
        console.log('Data was fetching');
        this.admindata=data;
        this.admindata=this.admindata.docs;
        console.log(this.admindata);
        for(const i of this.admindata){

              console.log(i);
              this.object.push(i);
              console.log(i)
        }
      
      }, err=>
      {
        console.log(err);
      })
    }
    
  }

  
