import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtletaCardComponent } from './atleta-card.component';

describe('AtletaCardComponent', () => {
  let component: AtletaCardComponent;
  let fixture: ComponentFixture<AtletaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtletaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtletaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
