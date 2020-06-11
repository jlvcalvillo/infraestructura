import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInfraComponent } from './card-infra.component';

describe('CardInfraComponent', () => {
  let component: CardInfraComponent;
  let fixture: ComponentFixture<CardInfraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardInfraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInfraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
