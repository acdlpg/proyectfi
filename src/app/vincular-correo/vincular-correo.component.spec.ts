import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VincularCorreoComponent } from './vincular-correo.component';

describe('VincularCorreoComponent', () => {
  let component: VincularCorreoComponent;
  let fixture: ComponentFixture<VincularCorreoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VincularCorreoComponent]
    });
    fixture = TestBed.createComponent(VincularCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
