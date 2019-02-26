import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http : HttpClient) {
    
  }
  data = {};
  

  registerRawMatCollector() {
  return  this.http.post('http://localhost:4200/register/rawmat', this.data);
}

  

}
