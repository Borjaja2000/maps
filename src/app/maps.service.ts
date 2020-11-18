import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface Location {
  latitude: string;
  longitude:string;
  country_name:string;
  region_name:string;
}

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient ) { }

  getLocation(){
    return this.http.get<Location>('http://api.ipapi.com/api/check?access_key=877ce8dd2b55fb8f8204fed379aba1d5');
  }
}
