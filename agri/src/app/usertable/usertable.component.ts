import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductserviceService } from '../productservice.service';
@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  object!:any[];
  userdata:any;
  search!:string;
  signup!:FormGroup;
  display: any;
  product: any;
  data:any;
  id:any;
  rev:any;
  objData:any;
    constructor(private api:ProductserviceService, private toastr:ToastrService) {
      this.newdata();
    
    }
  
    ngOnInit(): void {
      console.log()
    }
  
    newdata () {
    let _data = {
      selector: {
        type: "reseller"
      }
    }
      this.api.getcard(_data).subscribe(res=>{               
        this.userdata=res;
        console.log(res);
        this.userdata=this.userdata.docs;
        this.product=this.userdata;
        console.log(this.product[0]);
        for(const array of this.product){
              console.log(this.product[array]);
                 let id:any=array._id; 
                 let rev:any=array._rev;
            localStorage.setItem("id",id);
            localStorage.setItem("rev",rev);

             }
        });
      }
      delete(id:any,rev:any){
        this.api.Delete(id,rev).subscribe(res=>{
          console.log(res);
          this.toastr.success("Deleted sucessfully");
          window. location. reload();
  
        },(err)=>{
          console.log(err)
          this.toastr.error("Error");

        })
      }
      accept(card:any){
        card['accepted']  = true;
        const data = card; 
         this.api.add("agri_sample", data).subscribe(res=>{
          console.log(res);
          this.toastr.success("Your data was posted successfully");
          console.log('data posted')

         },
         err=>{
          console.log(err);
          this.toastr.error("Your data was not posted")
         })

        this.api.add(this.id,this.rev).subscribe(res=>{
          this.objData=res;
          this.objData.reseller="true";
          this.toastr.success("Accepted Successfully");
        },(err)=>{
          console.log(err)
          this.toastr.error("Error");
        })
      }
 
  
  }
