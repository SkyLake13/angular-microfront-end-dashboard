import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcLoaderComponent } from './wc-loader.component';

describe('WcLoaderComponent', () => {
  let component: WcLoaderComponent;
  let fixture: ComponentFixture<WcLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
