import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { WcLoaderComponent } from './wc-loader/wc-loader.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainGridComponent } from './main-grid/main-grid.component';
import { AppLoaderComponent } from './app-loader/app-loader.component';


@NgModule({
  declarations: [
    AppComponent,
    WcLoaderComponent,
    SideNavComponent,
    MainGridComponent, AppLoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatGridListModule, MatListModule
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
