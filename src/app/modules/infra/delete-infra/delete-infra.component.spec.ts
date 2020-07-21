import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteInfraComponent } from './delete-infra.component';

describe('DeleteInfraComponent', () => {
  let component: DeleteInfraComponent;
  let fixture: ComponentFixture<DeleteInfraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteInfraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteInfraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
