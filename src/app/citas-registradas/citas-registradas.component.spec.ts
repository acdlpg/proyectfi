import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasRegistradasComponent } from './citas-registradas.component';

describe('CitasRegistradasComponent', () => {
  let component: CitasRegistradasComponent;
  let fixture: ComponentFixture<CitasRegistradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CitasRegistradasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CitasRegistradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
