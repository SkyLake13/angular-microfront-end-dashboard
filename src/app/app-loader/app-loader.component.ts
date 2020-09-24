import { Component, OnInit, Input, AfterViewInit, Sanitizer, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-app-loader',
    templateUrl: 'app-loader.component.html',
    styleUrls: ['app-loader.component.scss']
})
export class AppLoaderComponent implements OnInit {
    @Input()
    public src: string;

    public safeUrl: SafeUrl;

    @ViewChild('frame', { read: ElementRef })
    public frame: ElementRef;

    constructor(private readonly sanitizer: DomSanitizer) { }

    public ngOnInit(): void {
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.src);

        console.log(this.safeUrl);
    }

    public toggleFullscreen(): void {
        if (this.frame) {
            if (!document.fullscreenElement) {
                this.frame.nativeElement.requestFullscreen().catch(err => {
                  alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
                });
              } else {
                document.exitFullscreen();
              }
        }
    }
}
