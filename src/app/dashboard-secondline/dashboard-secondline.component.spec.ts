import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSecondlineComponent } from './dashboard-secondline.component';

describe('DashboardSecondlineComponent', () => {
  let component: DashboardSecondlineComponent;
  let fixture: ComponentFixture<DashboardSecondlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSecondlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSecondlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
