import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStorageComponent } from './card-storage.component';

describe('CardStorageComponent', () => {
  let component: CardStorageComponent;
  let fixture: ComponentFixture<CardStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
