import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeAgregarComponent } from './heroe-agregar.component';

describe('HeroeAgregarComponent', () => {
  let component: HeroeAgregarComponent;
  let fixture: ComponentFixture<HeroeAgregarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroeAgregarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroeAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
