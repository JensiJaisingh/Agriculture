import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CallserviceService {

  constructor(private http:HttpClient) { }
  emailpost(formvalue:any)
  {
    return this.http.post('http://localhost:8000/email',formvalue);
  }
  query(formvalue:any){
    return this.http.post('http://localhost:8000/talk',formvalue);
  }
  adminlogin(){
    return this.http.get('http://localhost:8000/adminlogin');
  }
  resellerlogin(){
    return this.http.get('http://localhost:8000/resellerlogin');
  }
  resellerdetails(formvalue:any)
  {
    return this.http.post('http://localhost:8000/email',formvalue);
  }
  getquery(){
    return this.http.get('http://localhost:8000/gettalk');
  }
  add(){
    return this.http.get('http://localhost:8000/carddetails');
  }
  getcard(formvalue:any){
    return this.http.post('http://localhost:8000/getcarddetails',formvalue);
  }
 
}
