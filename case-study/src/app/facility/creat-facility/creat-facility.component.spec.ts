import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatFacilityComponent } from './creat-facility.component';

describe('CreatFacilityComponent', () => {
  let component: CreatFacilityComponent;
  let fixture: ComponentFixture<CreatFacilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatFacilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
