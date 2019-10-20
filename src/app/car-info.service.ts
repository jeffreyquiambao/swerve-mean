import { Injectable } from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarInfoService {
  // interacts with the api to grab car data
  constructor(private http: HttpClient) { }

  public getCarInfo(query) {
    console.log('service called!');
    return this.http.get('http://localhost:3000/api/carData/'
    + query.make + '/'
    + query.model + '/'
    + query.year + '/'
    + query.trany + '/'
    + query.drive);
  }
}
