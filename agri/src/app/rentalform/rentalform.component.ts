import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { ProductserviceService } from '../productservice.service';
import { Router,ActivatedRoute  } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-rentalform',
  templateUrl: './rentalform.component.html',
  styleUrls: ['./rentalform.component.css']
})
export class RentalformComponent implements OnInit {
  rental:FormGroup;
  submitted = false;
  array:any = [];
  data: any;
  search!:any;
  dataSet:any;
  resObject:any;
  maxDate:any;
  userList:any=[];
    constructor(private build:FormBuilder, private api: ProductserviceService, private router:Router,public active: ActivatedRoute, private toastr:ToastrService) {
      this.rental = this.build.group({
        firstname:['',Validators.required],
        lastname: ['', Validators.required],
        email: ['',Validators.required],
        mobile: ['',Validators.required],
        address:['',Validators.required],
        postal:['',Validators.required],
        country:['',Validators.required],
        date:['',Validators.required],
        hours:['',Validators.required],
        _rev:[''],
        _id:[''],
      });
     }
    

    ngOnInit(): void {
      this.rental=new FormGroup(
        {
      firstname:new FormControl(''),
      lastname:new FormControl(''),
      email:new FormControl(''),
      mobile:new FormControl(''),
      address:new FormControl(''),
      postal:new FormControl(''),
      country:new FormControl(''),
      date:new FormControl(''),
      hours:new FormControl(''),
      type:new FormControl('resellerform'),
      accepted:new FormControl(false)

    }
   );
   this.active.queryParams.subscribe(data=>{
    this.dataSet = data;
    console.log(data)
  },res=>{
    console.log(res);
  })
   
    }
    saving() {
      const  Formvalue = this.rental.value
          console.log("obj",Formvalue);
          //angular to couch POST
           this.api.add("agri_sample", Formvalue).subscribe(res => {
            console.log(res);
            this.toastr.success("Your data was posted successfully!");
            console.log('data posted')
            this.rental.reset();
      
          }, err =>{
            console.log(err);
           this.toastr.error("Cannot be posted empty");

          });
        }
                     
        onReset():void {
          this.submitted=false;
          this.rental.reset();
        }
        
        futureDate(){
          let date = new Date();
          let currentdate:any = date.getDate();
          let currentmonth:any = date.getMonth() + 1;
          let currentyear:any = date.getFullYear();
          if (currentdate < 10){
            currentdate = "0" + currentdate;
          }
          if(currentmonth < 10){
            currentmonth = "0" + currentmonth;
          }
          this.maxDate = currentyear + "-" + currentmonth + "-" + currentdate;
          
        }

      }
