import { Component, OnInit, ViewChild, AfterViewInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-wc-loader',
  templateUrl: './wc-loader.component.html',
  styleUrls: ['./wc-loader.component.scss']
})
export class WcLoaderComponent implements OnInit, AfterViewInit {

  @Input()
  public name: string;

  @Input()
  public src: string;

  @ViewChild('container', {read: ElementRef})
  public container: ElementRef;

  constructor() { }

  public ngOnInit(): void {

  }

  public ngAfterViewInit(): void {
    if (this.container) {
      const script = document.createElement('script');
      script.src = this.src;
      this.container.nativeElement.appendChild(script);

      const component = document.createElement(this.name);
      this.container.nativeElement.appendChild(component);
    }
  }

}
