import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColerPickerComponent } from './coler-picker.component';

describe('ColerPickerComponent', () => {
  let component: ColerPickerComponent;
  let fixture: ComponentFixture<ColerPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColerPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColerPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
