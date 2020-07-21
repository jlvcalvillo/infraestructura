import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInfraComponent } from './new-infra.component';

describe('NewInfraComponent', () => {
  let component: NewInfraComponent;
  let fixture: ComponentFixture<NewInfraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewInfraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInfraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
