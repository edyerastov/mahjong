import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsWrapperComponent } from './cards-wrapper.component';

describe('CardsWrapperComponent', () => {
  let component: CardsWrapperComponent;
  let fixture: ComponentFixture<CardsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
