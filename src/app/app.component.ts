import { Component } from '@angular/core';
import { INav } from './side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html',
})
export class AppComponent {
  public navs: INav[] = [
    { text: 'Home', icon: 'home' },
    { text: 'Settings', icon: 'settings' },
    { text: 'Help', icon: 'help' },
    { text: 'About', icon: 'about' },
    { text: 'Test', icon: 'test' }
  ];
}
