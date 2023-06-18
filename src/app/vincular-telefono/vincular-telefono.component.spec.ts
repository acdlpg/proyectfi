import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VincularTelefonoComponent } from './vincular-telefono.component';

describe('VincularTelefonoComponent', () => {
  let component: VincularTelefonoComponent;
  let fixture: ComponentFixture<VincularTelefonoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VincularTelefonoComponent]
    });
    fixture = TestBed.createComponent(VincularTelefonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
