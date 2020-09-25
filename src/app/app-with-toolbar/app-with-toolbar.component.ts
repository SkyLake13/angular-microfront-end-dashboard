import { Component, OnInit, Input, AfterViewInit, ViewChild } from '@angular/core';
import { AppLoaderComponent } from '../app-loader/app-loader.component';

@Component({
    selector: 'app-app-with-toolbar',
    templateUrl: './app-with-toolbar.component.html',
    styleUrls: ['./app-with-toolbar.component.scss']
})
export class AppWithToolbarComponent {
    @Input()
    public src: string;

    @ViewChild('appLoader', { read: AppLoaderComponent })
    public appLoader: AppLoaderComponent;

    public toggleFullscreen(): void {
        if (this.appLoader) {
            this.appLoader.toggleFullscreen();
        }
    }

}
