import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-cardtable',
  templateUrl: './cardtable.component.html',
  styleUrls: ['./cardtable.component.css']
})
export class CardtableComponent implements OnInit {
object!:any[];
carddata:any;
search!:string;
addcard!:FormGroup;
display: any;
product: any;
data:any;
  constructor(private api:ProductserviceService) {
    this.newcard();
  
  }

  ngOnInit(): void {
    console.log()
  }
  newcard () {
  let _data = {
    selector: {
      type: "addcard"
    }
  }
    this.api.getcard(_data).subscribe(res=>{               
      this.carddata=res;
      console.log(res);
      this.carddata=this.carddata.docs;
      this.product=this.carddata;
      console.log(this.product[0]);
      for(const array of this.product){
            console.log(this.product[array]);
           }
      });
    }
    delete(id:any,rev:any){
      this.api.Delete(id,rev).subscribe(res=>{
        console.log(res);
        alert("Deleted sucessfully");
        window. location. reload();

      })
    }
}
