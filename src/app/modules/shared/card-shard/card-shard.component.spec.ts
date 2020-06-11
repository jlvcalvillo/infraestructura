import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardShardComponent } from './card-shard.component';

describe('CardShardComponent', () => {
  let component: CardShardComponent;
  let fixture: ComponentFixture<CardShardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardShardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardShardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
