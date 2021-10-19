import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.css']
})
export class WeeklyComponent implements OnInit {

  
  weatherIconURL = 'https://openweathermap.org/img/w/';
  @Input() forecast: any;
  constructor() { }

  ngOnInit(): void {
  }

}
