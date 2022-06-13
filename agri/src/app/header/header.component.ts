import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public api1: ProductserviceService) {   }

  ngOnInit(): void {
  }
  logOut(){
    this.api1.logOutShow=false;
    this.api1.show=true;

  }

}
