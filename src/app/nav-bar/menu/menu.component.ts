import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Theme } from '../theme.model';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  {
  @Input() options: Array<Theme> |any;
  @Output() themeChange: EventEmitter<string> = new EventEmitter<string>();

  changeTheme(themeToSet: any) {
    this.themeChange.emit(themeToSet);
  }

}
