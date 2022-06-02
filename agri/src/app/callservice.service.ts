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
  adminlogin(){
    return this.http.get('http://localhost:8000/adminlogin')
  }
  query(formvalue:any){
    return this.http.post('http://localhost:8000/talk',formvalue);
  }
  getquery(){
    return this.http.get('http://localhost:8000/gettalk');
  }
}
