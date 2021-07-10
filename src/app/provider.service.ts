import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  baseUrl : string = "http://127.0.0.1:8001/api/providers";
  constructor(private http : HttpClient) { }

  listProviders(){
    //return "liste providers is comming";
    return this.http.get(this.baseUrl);
  }
}
