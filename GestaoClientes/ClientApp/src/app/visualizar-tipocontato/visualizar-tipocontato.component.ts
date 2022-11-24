import { Component, Inject, OnInit } from '@angular/core';
import { empty, Observable } from 'rxjs';
import { Cliente } from 'src/app/clientes/clientes.component';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoContato } from '../tiposcontatos/tiposcontatos.component';

@Component({
  selector: 'app-visualizar-tipocontato',
  templateUrl: './visualizar-tipocontato.component.html',
  styleUrls: ['./visualizar-tipocontato.component.css']
})
export class VisualizarTipoContatoComponent implements OnInit {

  public http: HttpClient;
  public baseUrl: string;

  VisualizarTipoContatoRequest: TipoContato = {
    id: 0,
    nome: '',
  }
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, route: ActivatedRoute, private router :Router ) {

    this.http = http;
    this.baseUrl = baseUrl;
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

                this.VisualizarTipoContatoRequest = response;
              }

              }
            )
        }
      }
      })
  }

  ngOnInit(): void {


  }

  editaTipoContato(id: string): Observable<TipoContato> {
    return this.http.get<TipoContato>(this.baseUrl + 'TipoContato/edit/'+ id);
  }

  SalvarTipoContato() {
    var res = this.http.post<TipoContato>(this.baseUrl + 'TipoContato', this.VisualizarTipoContatoRequest).subscribe(
      result => {
        console.log("result:" );
        console.log(result);
        this.router.navigate(['tiposcontatos']);

      }
    );
  }
  ExcluiTipoContato(id: number) {
    this.http.delete<TipoContato>(this.baseUrl + 'TipoContato/' + id).subscribe(
      {
        next: (response) => {
          this.router.navigate(['tiposcontatos']);
        }
      }
    );

  }

}
