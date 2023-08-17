import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiserviceService {

    constructor(private _http:HttpClient) { }
    ut:any;
    repository:any;
  getdata(){
    return this._http.get('https://api.github.com/users/' + this.ut )
  }
  getrepo(){
    return this._http.get(this.repository)
  }
}