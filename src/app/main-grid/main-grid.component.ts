import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.scss']
})
export class MainGridComponent {

  public openStreet = `https://www.openstreetmap.org/export/embed.html?
  bbox=-0.004017949104309083%2C51.47612752641776%2C0
  .00030577182769775396%2C51.478569861898606&layer=mapnik`;
}
