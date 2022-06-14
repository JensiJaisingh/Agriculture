import { Component } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  constructor(public api1: ProductserviceService) {   }

  
  logOut(){
    this.api1.logOutShow=false;
    this.api1.show=true;

  }

}
