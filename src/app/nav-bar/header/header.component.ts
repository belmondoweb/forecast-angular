import { Component, Input, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Theme } from '../theme.model';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {
  @Input() options$: Observable<Array<Theme>> = this.themeService.getThemeOptions();

  constructor(private readonly themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.setTheme("indigo-pink");
  }

  themeChangeHandler(themeToSet: any) {
    this.themeService.setTheme(themeToSet);
  }

}
