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
     content1: ['',Validators.required],
     content2:['',Validators.required],
     feature:['',Validators.required],
     mainimg:['',Validators.required],
     keyone:['',Validators.required],
     key2:['',Validators.required],
     key3:['',Validators.required],
     key4:['',Validators.required],
     link:['',Validators.required],
     _rev:[''],
     _id:['']

   });
  }

  ngOnInit(): void {
    this.addcard = new FormGroup({
      img: new FormControl(''),
      title: new FormControl(''),
      description: new FormControl(''),
      content1: new FormControl(''),
      content2:new FormControl(''),
      feature: new FormControl(''),
      mainimg: new FormControl(''),
      keyone:new FormControl(''),
      key2:new FormControl(''),
      key3:new FormControl(''),
      key4:new FormControl(''),
      link:new FormControl('')
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
      content1: Formvalue.content1,
      content2: Formvalue.content2,
      feature: Formvalue.feature,
      mainimg: Formvalue.mainimg,
      keyone: Formvalue.keyone,
      key2: Formvalue.key2,
      key3: Formvalue.key3,
      key4: Formvalue.key4,
      link: Formvalue.link,
      type: "addcard",

    }
    //angular to couch POST
     this.api.add("agri_sample", addcard).subscribe(res => {
      console.log(res);
      alert("Your data was posted successfully!");
      window.location.replace('dashboard');
      
      console.log('data posted')
      this.addcard.reset();

    }, err =>{
      console.log(err);
    });
        }
        
  onReset():void {
    this.submitted=false;
    this.addcard.reset();
  }
}