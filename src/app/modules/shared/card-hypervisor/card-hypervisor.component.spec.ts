import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHypervisorComponent } from './card-hypervisor.component';

describe('CardHypervisorComponent', () => {
  let component: CardHypervisorComponent;
  let fixture: ComponentFixture<CardHypervisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardHypervisorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHypervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
