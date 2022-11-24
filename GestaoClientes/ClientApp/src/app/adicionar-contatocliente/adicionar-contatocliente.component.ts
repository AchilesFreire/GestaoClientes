import { Component, Inject, OnInit } from '@angular/core';
import { empty, Observable } from 'rxjs';
import { Cliente } from 'src/app/clientes/clientes.component';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoContato } from '../tiposcontatos/tiposcontatos.component';
import { ContatoCliente } from '../contatocliente/contatocliente.component';

@Component({
  selector: 'app-adicionar-contatocliente',
  templateUrl: './adicionar-contatocliente.component.html',
  styleUrls: ['./adicionar-contatocliente.component.css']
})
export class AdicionarContatoClienteComponent implements OnInit {

  public http: HttpClient;
  public baseUrl: string;
  public tiposcontatos: TipoContato[] = [];

  public clienteselecionado: string = '';

  AdicionarContatoClienteRequest: ContatoCliente = {
    id: 0,
    cliente: 0,
    tipoContato: 0,
    numero: '',
    refTipoContato: { id: 0, nome: '' }
  }
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, route: ActivatedRoute, private router: Router) {

    this.http = http;
    this.baseUrl = baseUrl;

    http.get<TipoContato[]>(baseUrl + 'tipocontato').subscribe(result => {
      this.tiposcontatos = result;
    }, error => console.error(error));

    route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('cliente');
        if (id) {
          this.clienteselecionado = id;
          console.log('cliente selecionado: ' + this.clienteselecionado);
        }
      }
    })

  }

  ngOnInit(): void {
  }

  AdicionarContatoCliente() {

    this.AdicionarContatoClienteRequest.cliente = Number( this.clienteselecionado);

    var res = this.http.post<Cliente>(this.baseUrl + 'ContatoCliente', this.AdicionarContatoClienteRequest).subscribe(
      result => {
      console.log("result:" );
        console.log(result);
        this.router.navigate(['contatocliente/contatos/' + this.AdicionarContatoClienteRequest.cliente]);

      }
    );

  }

}
