import { Component, Inject, OnInit } from '@angular/core';
import { EMPTY, empty, Observable } from 'rxjs';
import { Cliente } from 'src/app/clientes/clientes.component';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ContatoCliente } from '../contatocliente/contatocliente.component';
import { TipoContato } from '../tiposcontatos/tiposcontatos.component';

@Component({
  selector: 'app-visualizar-contatocliente',
  templateUrl: './visualizar-contatocliente.component.html',
  styleUrls: ['./visualizar-contatocliente.component.css']
})
export class VisualizarContatoClienteComponent implements OnInit {

  public http: HttpClient;
  public baseUrl: string;

  public tiposcontatos: TipoContato[] = [];

  VisualizarTipoContatoRequest: TipoContato = {
    id: 0,
    nome: '',
  }

  VisualizarContatoClienteRequest: ContatoCliente = {
    id: 0,
    cliente: 0,
    tipoContato: 0,
    numero: '',
    refTipoContato: { id: 0, nome:''}
  }
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, route: ActivatedRoute, private router :Router ) {

    this.http = http;
    this.baseUrl = baseUrl;


    http.get<TipoContato[]>(baseUrl + 'tipocontato').subscribe(result => {
      this.tiposcontatos = result;
    }, error => console.error(error));

    route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          console.log("subscribe:");
          this.editaTipoContato(id).subscribe(
            {
              next: (response) => {
                console.log("response:");
                console.log(response);

                this.VisualizarContatoClienteRequest = response;
              }

              }
            )
        }
      }
      })
  }

  ngOnInit(): void {


  }

  editaTipoContato(id: string): Observable<ContatoCliente> {
    return this.http.get<ContatoCliente>(this.baseUrl + 'ContatoCliente/edit/'+ id);
  }

  SalvarContatoCliente() {

    console.log('request:');
    console.log(this.VisualizarContatoClienteRequest);

    this.VisualizarContatoClienteRequest.refTipoContato = { id: 0, nome: '' };
    var res = this.http.post<Cliente>(this.baseUrl + 'ContatoCliente', this.VisualizarContatoClienteRequest).subscribe(
      result => {
        console.log("result:" );
        console.log(result);
        this.router.navigate(['contatocliente/contatos/'+ this.VisualizarContatoClienteRequest.cliente]);

      }
    );
  }
  ExcluiContatoCliente(id: number) {
    this.http.delete<Cliente>(this.baseUrl + 'ContatoCliente/' + id).subscribe(
      {
        next: (response) => {
          this.router.navigate(['contatocliente/contatos/' + this.VisualizarContatoClienteRequest.cliente]);
        }
      }
    );

  }

}
