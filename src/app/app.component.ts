import { Component } from '@angular/core';
import {MapsService} from './maps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 lat:string = '';
 lng:string= '';
 country: string = '';
 city: string = '';
 continente: string='';
 region: string='';
 codigo_postal: number=0;
 constructor(private map: MapsService){}

 ngOnInit(){
   this.map.getLocation().subscribe(data => {
     console.log(data);
     this.lat = data.latitude;
     this.lng = data.longitude;
     this.country = data.country_name;
     this.city = data.city;
     this.region = data.region_name;
     this.continente = data.continent_name;
     this.codigo_postal = data.zip;
   })
 }
}
