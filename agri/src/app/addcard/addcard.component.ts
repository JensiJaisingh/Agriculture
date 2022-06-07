import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.component.html',
  styleUrls: ['./addcard.component.css']
})
export class AddcardComponent implements OnInit {
  addcard: FormGroup;
  submitted = false;
  array:any = [];
  data: any;
  search!:any;
  
  constructor( private build:FormBuilder, private api: ProductserviceService, private router:Router) { 
    this.addcard = this.build.group({
     img:['',Validators.required],
     title: ['', Validators.required],
     description: ['',Validators.required],
     _rev:[''],
     _id:['']

   });
  }

  ngOnInit(): void {
    this.addcard = new FormGroup({
      img: new FormControl(''),
      title: new FormControl(''),
      description: new FormControl(''),
    });
  this.submitted=true;

  }
  // get id() {return this.addcard.get('id')!;}
  // get name() {return this.addcard.get('title')!;}
  // get description() {return this.addcard.get('description')!;}

saving() {
const  Formvalue = this.addcard.value
    const addcard = {
      img: Formvalue.img,
      title: Formvalue.title,
      description: Formvalue.description,
      type: "addcard",

    }
    //angular to couch POST
     this.api.add("agri_sample", addcard).subscribe(res => {
      console.log(res);
      alert("Your data was posted successfully!");
      window.location.replace('dashboard');
      
      console.log('data posted')
      this.addcard.reset();

    });
        }
        
  onReset():void {
    this.submitted=false;
    this.addcard.reset();
  }
}