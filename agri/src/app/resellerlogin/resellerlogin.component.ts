import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { CallserviceService } from '../callservice.service';
import { ProductserviceService } from '../productservice.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-resellerlogin',
  templateUrl: './resellerlogin.component.html',
  styleUrls: ['./resellerlogin.component.css']
})
export class ResellerloginComponent implements OnInit {
  resellervalid!:FormGroup;
  object:any=[];
  resellerdata:any;
  product:any;
  data:any;
    constructor(private formbuilder:FormBuilder, private call:CallserviceService, private api:ProductserviceService, private router:Router,private toastr:ToastrService) {
     
    }
  
  
    ngOnInit(): void {
      this.resellervalid = new FormGroup({
        resellerid: new FormControl('',[Validators.required,Validators.email]),
        password: new FormControl('',[Validators.required]),
      });
        this.api.login().subscribe(data=>{
          console.log(data);
          console.log('Data was fetching');
          this.resellerdata=data;
          this.resellerdata=this.resellerdata.docs;
          console.log(this.resellerdata);
          for(const i of this.resellerdata){
            console.log(i);
            this.object.push(i);
          
          }
        });
      }
    
    
      
     

      resellerUsermail(formvalue:any) 
      {
       console.log(formvalue)
       for(const i of this.object){
          if(i.email == formvalue.resellerid && i.mobile == formvalue.password )
          {
            console.log('success');
            this.router.navigate(['/rentalcard']);
            this.toastr.success("login success");
          }
       }
    }
   
 
    
}