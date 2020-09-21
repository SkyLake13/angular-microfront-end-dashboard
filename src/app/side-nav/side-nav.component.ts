import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Input()
  public navOptions: INav[] = [];

  public ngOnInit(): void {
    console.log('navOptions - ', this.navOptions);
  }

}


export interface INav {
  text: string;
  icon: string;
}
