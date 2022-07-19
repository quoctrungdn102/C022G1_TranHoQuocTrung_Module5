import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFurumaComponent } from './home-furuma.component';

describe('HomeFurumaComponent', () => {
  let component: HomeFurumaComponent;
  let fixture: ComponentFixture<HomeFurumaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFurumaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFurumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
