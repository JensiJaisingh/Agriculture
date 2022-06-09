import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-datawarehouse',
  templateUrl: './datawarehouse.component.html',
  styleUrls: ['./datawarehouse.component.css']
})
export class DatawarehouseComponent implements OnInit {

  public dataSet:any;
  constructor(public active: ActivatedRoute) { }

  ngOnInit(): void {
    this.active.queryParams.subscribe(data=>{
      this.dataSet = data;
      console.log(data)
    },res=>{
      console.log(res);
    })
  }

}
