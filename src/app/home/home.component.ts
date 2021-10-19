import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiServiceService } from '../service-inerface/api-service.service';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
// import 'rxjs/add/operator/do';
import { Weather } from '../service-inerface/models.ts/weather';
import { Forecast, ForecastCl } from '../service-inerface/models.ts/forecast';
import { pluck } from 'rxjs/operators';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  weatherIconURL = 'https://openweathermap.org/img/w/';
  cities$: Observable<any> | any;
  @Input()weatherData: Observable<Weather[]> | any;
  // weatherData: any=[];/
  weatherIndex: any;

  forecastHours: Forecast[]=[];
  forecast: Forecast[]=[];
  @Output() saveCity:EventEmitter<any>=new EventEmitter<any>();
  private stateGeo: any;
  city: any;
  days:any[]=[];
  isShowSearchData: boolean = false;
  isAddToFavorites: boolean = false;
  form: FormGroup | any;

  lat: any;
  lon: any;

  constructor(private weatherService: ApiServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cities$ = this.getLocation();
    this.form = this.fb.group({
      weather : this.fb.array([this.addWeatherGroup()])
    });
    }
 
  addWeatherGroup() {
    return this.fb.group({
      name: ['', Validators.required],
      temp: ['', Validators.required],
    });
  }


  async getLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition((success) => {
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;
        console.log(`lat ${this.lat} and lon ${this.lon}`)
        this.weatherService.fetchDataByCoords(this.lat, this.lon).subscribe(data => {
          this.weatherData = data;
          this.city = data.name;
          debugger;
          setTimeout(() => this.weatherService.fetchDataByCoords(this.lat, this.lon), 5000);

          this.weatherService.geoForecast(this.lat, this.lon)
          // check for Geolocation support
          if (navigator.geolocation) {
            console.log('Geolocation is supported!');
          }
          else {
            this.lat=32.0591348;
            this.lon=34.8513687;
            console.log('Geolocation is not supported for this Browser/OS.');
          }
        });
      })
    }
  }
  private stopWatching() {
    if (this.weatherData !== -1) {
      window.navigator.geolocation.clearWatch(this.weatherData);
      this.stateGeo = "disabled";
      console.log(this.stateGeo)
    }
  }
  // ********** Get data for city search  **********//

  onSubmit(weatherForm: NgForm) {
    this.weatherService.otherWeather(weatherForm.value.city, weatherForm.value.temp).subscribe(
      (data) => {
        this.weatherData =data
        this.weatherData.push(data); 
         this.weatherArray.push(this.addWeatherGroup());
      })

    this.weatherService.otherForecast(weatherForm.value.city).subscribe(
      (f) => {
        this.forecast = f
        console.log("forecast" + this.forecast + f);
      })
    }

  

  // ********** Get 5 day  **********//

weekly(){
  this.weatherService.WeeklyForecast(this.city).subscribe(data=>
    this.forecast=data)
    for(let i=0; i<this.forecast.length; i+=8){
      this.days.push(this.forecast[i]);
      console.log("forecast from fiveday weeklyForecast..."+this.days)
     }
}

    
  // ********** Get Hourly  **********//
  onForecast() {
    this.weatherService.hourForecast(this.city).subscribe(
      (data) => {
        this.forecastHours = data;
        console.log("forecast data from otherForecast..." + this.forecastHours);  
      })
  }
 
  // ******** Save to List *********** //
  onSave(form:any) {
    this.weatherService.addWeatherItem(this.form.value)
    // or local
    let cityArr
        if(this.weatherData !== null){
          cityArr =[]
          }else{
            cityArr = JSON.parse(this.weatherData);
          }
        localStorage.setItem('FAVLIST', JSON.stringify(form));
  }
  get weatherArray(){
    return this.form.get('weather') as FormArray;
    }
 

  onClick(){
    this.saveCity.emit(this.weatherData)
  }
  ngOnDestroy() {this.getLocation}


}

  // not useing this api

    


//  fiveDayWeather(city:any){
//   for(let i=0; i<city.length; i+=8){
//     this.days.push(city[i]);
//     console.log("forecast from fiveday weeklyForecast..."+this.days)
//    }
// }


