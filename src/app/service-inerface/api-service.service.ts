import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WEATHER_ITEMS } from './models.ts/weather.data';
import { catchError, retry } from 'rxjs/operators';

import { Weather } from './models.ts/weather';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  weatherList: Weather[]|any;
  weather: Weather | any;
  
  
  constructor(private http: HttpClient ) { }
 

    //***** */ Geo locatio weather api******
    fetchDataByCoords (lat: any, lon:any): Observable<any>{
      // let params= new HttpParams()
      // .set('lat',lat)
      // .set('lon',lon)
      return this.http.get(`http://api.openweathermap.org/data/2.5/weather?appid=efe5cf80014b819a0d87795088944e35&lat=${lat}&lon=${lon}&units=imperial`).pipe(
        catchError(this.handleError)
      );
      // return this.http.get(`${environment.api}weather?appid=${environment.api_key}&lat=${lat}&lon=${lon}&units=imperial`).pipe(
      //   catchError(this.handleError)
      // );
    }
    
      
// **** Fetch Favotite City *****  ///
  getWeatherItems() {
    return this.weatherList;
   }


/// **** Save City to Favorites ***** ///
    addWeatherItem(weatherItem:Weather):any{
  const data = WEATHER_ITEMS.push(weatherItem)

    catchError(this.handleError);
    console.log("Add weather to favorites"+data)
}

///  **** Fetch api request ***** ///
  
fetchrCityUnits(name:any, units:any): Observable<Weather[]> {
  return this.http.get<Weather[]>
(`${environment.api}weather?appid=${environment.api_key}&q=${name}&units=${units}&cnt=6`).pipe(
    retry(1),
    catchError(this.handleError)   
  );
}


otherWeather(city:string, units:any){
  return this.http.get(`${environment.api}weather?appid=${environment.api_key}&q=${city}&units=${units}&cnt=6`)
.pipe(
  retry(1),
  catchError(this.handleError)
)}

geoForecast(lat: any, lon:any):Observable<any>{
  // let params= new HttpParams()
  //     .set('lat',lat)
  //     .set('lon',lon)
  return this.http.get(`${environment.api}forecast?&exclude=hourly,minutely&lat=${lat}&lon=${lon}&appid=${environment.api_key}&cnt=6`)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

WeeklyForecast(city:string):Observable<any>{
  return this.http.get(`${environment.api}forecast?&exclude=hourly,minutely&daily?&q=${city}&cnt=6&appid=${environment.api_key}`)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}


hourForecast(city:string):Observable<any>{
  return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=efe5cf80014b819a0d87795088944e35&cnt=8&units=metrics`)
  .pipe(
   
    retry(1),
    catchError(this.handleError)
  )
  
}

otherForecast(city:string):Observable<any>{
  return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${environment.api_key}&cnt=8&units=metrics`)
  .pipe(
   
    retry(1),
    catchError(this.handleError)
  )
  
}



  
    //// ****  ERROR: Hendler Some Error's ***** //////
    
    _errorHandler(error: Response) {debugger;
      console.log(error);
      return Observable.throw(error || 'Internal server error');
    }
    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('Client Side Error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      // return an observable with a user-facing error message
      return throwError(
        `
      There is a problem with the service. 
      We are notified & working on it. Please try again later.
      N.Peretz team`);
    };


// no



}
