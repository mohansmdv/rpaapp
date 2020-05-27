import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFirstlineComponent } from './dashboard-firstline.component';

describe('DashboardFirstlineComponent', () => {
  let component: DashboardFirstlineComponent;
  let fixture: ComponentFixture<DashboardFirstlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFirstlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFirstlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
