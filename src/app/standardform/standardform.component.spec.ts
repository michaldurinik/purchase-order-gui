import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardformComponent } from './standardform.component';

describe('StandardformComponent', () => {
  let component: StandardformComponent;
  let fixture: ComponentFixture<StandardformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
