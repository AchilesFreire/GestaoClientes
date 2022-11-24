import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { TipoContato } from '../tiposcontatos/tiposcontatos.component';

@Component({
  selector: 'contatocliente',
  templateUrl: './contatocliente.component.html'
})
export class ContatoClienteComponent {
  public contatocliente: ContatoCliente[] = [];

  public clienteselecionado: string = '';

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, route: ActivatedRoute) {

    route.paramMap.subscribe({
      next: (params) => {
        const cliente = params.get('cliente');
        if (cliente) {
          this.clienteselecionado = cliente;
          http.get<ContatoCliente[]>(baseUrl + 'ContatoCliente/Visualizar/' + cliente).subscribe(result => {
            console.log("result:");
            console.log(result);
            this.contatocliente = result;
          }, error => console.error(error));
        }
      }
    })

  }
}

export interface ContatoCliente {
  id: number;
  cliente: number;
  tipoContato: number;
  numero: string;
  refTipoContato: TipoContato;
}
