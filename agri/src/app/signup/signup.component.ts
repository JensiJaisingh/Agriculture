import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { ProductserviceService } from '../productservice.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup:FormGroup;
  submitted = false;
  array:any = [];
  data: any;
  search!:any;
  resObject:any;
  userList:any=[];
    constructor(private build:FormBuilder, private api: ProductserviceService, private router:Router, private toastr:ToastrService) {
      this.signup = this.build.group({
        firstname:['',Validators.required],
        lastname: ['', Validators.required],
        email: ['',Validators.required],
        mobile: ['',Validators.required],
        city:['',Validators.required],
        postal:['',Validators.required],
        country:['',Validators.required],
        occupation:['',Validators.required],
        interest:['',Validators.required],
        _rev:[''],
        _id:[''],
      });
     }
  
    ngOnInit(): void {
      this.signup=new FormGroup(
        {
      firstname:new FormControl(''),
      lastname:new FormControl(''),
      email:new FormControl(''),
      mobile:new FormControl(''),
      city:new FormControl(''),
      postal:new FormControl(''),
      country:new FormControl(''),
      occupation:new FormControl(''),
      interest:new FormControl(''),
      type:new FormControl('reseller'),
      accepted:new FormControl(false)

    }
   );
   
    }
    saving() {
      const  Formvalue = this.signup.value
          
          console.log("obj",Formvalue);
          
          //angular to couch POST
           this.api.add("agri_sample", Formvalue).subscribe(res => {
            console.log(res);
            this.toastr.success("Your data was posted successfully!");
            console.log('data posted')
            this.signup.reset();
      
          }, err =>{
            console.log(err);
            this.toastr.error("Data cannot be posted")
          });
        }
              
        onReset():void {
          this.submitted=false;
          this.signup.reset();
        }
      
      }