import { Injectable } from '@angular/core';
import { Observable } from '../../node_modules/rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerConnectService {

  private serverURL = "http://localhost:8080/";


  constructor(private http:HttpClient) { }


  userRegisteration(userData){
    let specificUrl = this.serverURL + 'cardholder/registeration' + userData;
    let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/json'})};
    return this.http.put(specificUrl, headers);
  }

  merchantRegisteration(merchantData){
    let specificUrl = this.serverURL + 'YET_TO_BE_GIVEN' + merchantData;
    let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/json'})};
    return this.http.put(specificUrl, headers);
  }

  paymentVerification(paymentData){
    let specificUrl = this.serverURL + 'YET_TO_BE_GIVEN' + paymentData;
    let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/json'})};
    return this.http.post(specificUrl, headers);
  }

  test(){
    let specificUrl = "/t/mv6yf-1603094470/post";
    // let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/json'})};
    return this.http.get(specificUrl);
  }

}
