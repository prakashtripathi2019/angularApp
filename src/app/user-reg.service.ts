import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserRegService {

  constructor(private http:HttpClient) { 

  }

  public doRegistration(user:User){
   return this.http.post("http://localhost:9090/user/register",user,{responseType: 'text' as 'json'});
  }
}
