import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import axios from 'axios'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getContacts(){
  
    return this.httpClient.get("http://localhost:3000/data");

  }


  /*
  getContacts(p:any){
  
    //return this.httpClient.get("http://localhost:3000/data");
   
    return new Promise((resolve,reject)=>{
      axios.get("https://reqres.in/api/users?page="+p).then(res =>{
        return resolve(res.data)
      })
    })
  }
*/
 



}
