import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearfichaComponent } from './crearficha.component';

describe('CrearfichaComponent', () => {
  let component: CrearfichaComponent;
  let fixture: ComponentFixture<CrearfichaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearfichaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearfichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
