import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CallserviceService } from '../callservice.service';

@Component({
  selector: 'app-talktable',
  templateUrl: './talktable.component.html',
  styleUrls: ['./talktable.component.css']
})
export class TalktableComponent implements OnInit {
object:any=[];
agridata:any;
search!:string;
contact!:FormGroup;
  constructor(private call:CallserviceService) { }
  ngOnInit(): void {
    this.QueryDetails();
  }
  QueryDetails() {
    this.call.getquery().subscribe(data=>{               
      this.agridata=data;
      this.agridata=this.agridata.docs;
      console.log(this.agridata);
      for(const i of this.agridata){
            this.object.push(i);
           }
      }, res=>{
        console.log(res);
      })
 }
}
