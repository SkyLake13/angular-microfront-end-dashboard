import { Component, OnInit, Input, AfterViewInit, ViewChild } from '@angular/core';
import { AppLoaderComponent } from '../app-loader/app-loader.component';
import { WcLoaderComponent } from '../wc-loader/wc-loader.component';

@Component({
    selector: 'app-wc-with-toolbar',
    templateUrl: './wc-with-toolbar.component.html',
    styleUrls: ['./wc-with-toolbar.component.scss']
})
export class WcWithToolbarComponent {
    @Input()
    public src: string;

    @Input()
    public name: string;

    @ViewChild('wcLoader', { read: WcLoaderComponent })
    public appLoader: WcLoaderComponent;

    public toggleFullscreen(): void {
        if (this.appLoader) {
            this.appLoader.toggleFullscreen();
        }
    }

}
