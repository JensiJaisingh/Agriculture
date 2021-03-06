import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  getquery() {
    throw new Error('Method not implemented.');
  }
  
  logOutShow: boolean=false;
  show: boolean=true;

  url='https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/'
  dbUserName='apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4'
  dbPassword = '163671d490ddeef138fc61e470881715'
   basicAuth = 'Basic ' + btoa(this.dbUserName + ':' + this.dbPassword);
  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.basicAuth
    })
  };
  add(db: string, doc: object): Observable<{}> {
    const url = this.url + db;
    return this.http.post(url, doc, this.httpOptions)
  }
  data(db: string, doc: object): Observable<{}> {
    const url = this.url + db;
    return this.http.post(url, doc, this.httpOptions)
  }
  login(){
    const url =  this.url +'agri_sample/_find';
    const basicAuth = 'Basic ' + btoa(this.dbUserName + ':' + this. dbPassword );
    const object = {
      selector: {
        type: 'reseller',
      },
    };
    return this.http.post(url, object, {
      headers: { Authorization: basicAuth },
    });
  }
  getreseller(data:any): Observable<{}> {
    const url = this.url +'agri_sample/_find';
    return this.http.post( url,data, this.httpOptions)
  }
  getcard(data:any): Observable<{}> {
    const url = this.url +'agri_sample/_find';
    return this.http.post( url,data, this.httpOptions)
  }
  getdata( data:any): Observable<{}> {
    const url = this.url +'agri_sample/_find';
    return this.http.post( url,data, this.httpOptions)
  }
  Delete(id: any,rev:any): Observable<{}>  {
    console.log(id);
    console.log(rev);
  this.url= this.url+'agri_sample/'+id+'?rev='+rev;
  return this.http.delete(this.url,this.httpOptions)
  }
  showoff(){
    this.logOutShow = !this.logOutShow;
    this.show = !this.show;
    console.log(this.show)
  }

  
}
