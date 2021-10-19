import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiServiceService } from '../service-inerface/api-service.service';
import { Forecast } from '../service-inerface/models.ts/forecast';

@Component({
  selector: 'app-forcast',
  templateUrl: './forcast.component.html',
  styleUrls: ['./forcast.component.css']
})
export class ForcastComponent implements OnInit, OnChanges {



  constructor(private weatherSer: ApiServiceService) { }

  weatherIconURL = 'https://openweathermap.org/img/w/';
  @Input() forecastHours: any;

  ngOnInit() {
  }

  ngOnChanges() { 
    debugger;
  }

}
