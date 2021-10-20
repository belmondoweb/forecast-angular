import { Component,OnInit} from '@angular/core';
import { ApiServiceService } from '../service-inerface/api-service.service';
import { EventEmitterService } from '../service-inerface/event-emitter.service';

import { Weather } from '../service-inerface/models.ts/weather';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  currCity:Weather[]|any;
  cityList:Weather[]=[];
  city:any=[];
    weatherIconURL =  'https://openweathermap.org/img/w/';
  constructor(private weatherService: ApiServiceService, private eventEmitterService: EventEmitterService) { 

  }

  ngOnInit() {

  this.city= this.weatherService.favoriesList$.pipe().subscribe(
      res =>{
        this.currCity=res;
        // console.log(res); 
        return res;
      }
    )
    // let data =(localStorage.getItem('FAVLIST'))|| {};
    this.weatherService.favouritesList.next(this.cityList);
    this.city =JSON.parse(( localStorage.getItem('FAVLIST'))||'[]');
    
    
}


}

