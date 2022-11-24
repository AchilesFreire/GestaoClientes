import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarTipoContatoComponent } from './adicionar-tipocontato.component';

describe('AdicionarTipoContatoComponent', () => {
  let component: AdicionarTipoContatoComponent;
  let fixture: ComponentFixture<AdicionarTipoContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdicionarTipoContatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarTipoContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
