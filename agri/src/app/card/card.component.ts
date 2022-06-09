import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CallserviceService } from '../callservice.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
card!:FormGroup;
  constructor(private formbuilder:FormBuilder, private call:CallserviceService) { }

  ngOnInit(): void {

    this.card = this.formbuilder.group({
      img:['', Validators.required],
      title:['', Validators.required],
      description:['',Validators.required]
    })
  }
  submitcard(formvalue:any){
    console.log(formvalue)
    this.call.query(formvalue).subscribe(
      (data:any)=>{
        alert('data posted successfully')
        console.log(data);
      },
      (err)=>{
        console.log(err);
      }
    )
  }

}
