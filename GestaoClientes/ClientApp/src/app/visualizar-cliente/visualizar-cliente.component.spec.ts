import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarClienteComponent } from './visualizar-cliente.component';

describe('EditarClienteComponent', () => {
  let component: VisualizarClienteComponent;
  let fixture: ComponentFixture<VisualizarClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisualizarClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});