import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarfichaComponent } from './buscarficha.component';

describe('BuscarfichaComponent', () => {
  let component: BuscarfichaComponent;
  let fixture: ComponentFixture<BuscarfichaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarfichaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarfichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
