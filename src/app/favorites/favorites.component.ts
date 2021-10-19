import { Component, Input, OnInit, Output, Renderer2 } from '@angular/core';

import { ApiServiceService } from '../service-inerface/api-service.service';

import { EventEmitterService } from '../service-inerface/event-emitter.service';
import { Forecast } from '../service-inerface/models.ts/forecast';
import { Weather } from '../service-inerface/models.ts/weather';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  favData:any=[];
  
  favoritesData:any;
  // forecast:Forecast[]=[];
  weatherData: Weather[] |any;
  darkTheme = false;
  constructor(private weatherService: ApiServiceService, private eventEmitterService: EventEmitterService) { 

  }

  ngOnInit() {
  this.weatherData =JSON.parse((this.weatherData, localStorage.getItem('FAVLIST') )||'{}');;

  this.getCityList()

}



//  }
getCityList(){
  this.weatherService.getWeatherItems()
}
}
  
