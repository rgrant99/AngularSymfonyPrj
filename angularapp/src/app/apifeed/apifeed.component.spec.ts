import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApifeedComponent } from './apifeed.component';

describe('ApifeedComponent', () => {
  let component: ApifeedComponent;
  let fixture: ComponentFixture<ApifeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApifeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApifeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
