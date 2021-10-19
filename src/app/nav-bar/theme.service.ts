import { HttpClient } from '@angular/common/http';
import { Theme } from "./theme.model"
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StyleManagerService } from '../service-inerface/style.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(  private http: HttpClient,  private styleManager: StyleManagerService) { }


  getThemeOptions(): Observable<Array<Theme>> {
    return this.http.get<Array<Theme>>("../../assets/theme.json");
  }

  setTheme(themeToSet: string) {
    this.styleManager.setStyle(
      "theme",
      `../node_modules/@angular/material/${themeToSet}.css`
    );
  }
}
