import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoArticuloComponent } from './tipo-articulo.component';

describe('TipoArticuloComponent', () => {
  let component: TipoArticuloComponent;
  let fixture: ComponentFixture<TipoArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoArticuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
