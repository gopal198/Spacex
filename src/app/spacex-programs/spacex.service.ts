import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class SpacexService {
  constructor(private http: HttpClient) {}

  getSpacexDetails(val1?,val2?,val3?):Observable<any> {
      let url = "https://api.spacexdata.com/v3/launches?limit=100";
    if(val1){
        url = url +val1; 
    }
    if(val2){
         url = url+val2; 
    }
    if(val3){
        url = url + val3;
    }
     return this.http.get(url);

  }
}

