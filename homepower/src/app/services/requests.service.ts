import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }

  Power(state){
    let url = "https://homepowerapp.herokuapp.com/send/send";
    return this.http.get(url, {params: {state: state}}).pipe(
      map(results => {
        console.log("Results",results);
        return results["Response"];
      })
    );
  }
}