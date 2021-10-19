import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  constructor() { }

  favData:any;
  favDataList:any;
  
    setCityDetails(newLocation: any) {
      this.favData = newLocation;
    }
    setFavDetails(newLocation: any) {
      this.favDataList = newLocation;
    }
    
    getCityDetails() {
      return this.favData;
    }
    getFavDetails() {
      return this.favDataList;
    }
}
