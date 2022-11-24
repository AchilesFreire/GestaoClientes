import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarTipoContatoComponent } from './visualizar-tipocontato.component';

describe('EditarClienteComponent', () => {
  let component: VisualizarTipoContatoComponent;
  let fixture: ComponentFixture<VisualizarTipoContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisualizarTipoContatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarTipoContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
