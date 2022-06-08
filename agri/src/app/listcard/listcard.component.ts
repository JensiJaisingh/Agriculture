import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';
@Component({
  selector: 'app-listcard',
  templateUrl: './listcard.component.html',
  styleUrls: ['./listcard.component.css']
})
export class ListcardComponent implements OnInit {
  array:any = [];
  data: any;
  object!:any;
  newcard!:string;
  search!:string;
  addcard!:FormGroup;
  getcard:any;
  getcardData: any;
  constructor( private build:FormBuilder, private api: ProductserviceService, private router:Router) { 
  this.saving()
  }
  ngOnInit(): void {
    console.log('listcard');
  }
  saving() {
    let data = {
      selector: {
        type: "addcard"
      }
      
    }
    
    //get the all data
    this.api.getcard(data).subscribe((res: any) => {
      this.getcard=res;     
      console.log(res);
      this.getcard = this.getcard.docs;
      this.getcardData = this.getcard;
      console.log(this.getcardData[0]);
      
      
    });
    
    }
    view(data:any){
      let option ={queryParams:data}
this.router.navigate(['/datawarehouse'],option)
    }
    delete(id:any,rev:any){
      this.api.Delete(id,rev).subscribe(res=>{
        console.log(res);
        alert("Deleted sucessfully");
        window. location. reload();

      })
    }
    }


