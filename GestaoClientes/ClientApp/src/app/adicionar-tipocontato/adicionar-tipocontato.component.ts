import { Component, Inject, OnInit } from '@angular/core';
import { empty, Observable } from 'rxjs';
import { Cliente } from 'src/app/clientes/clientes.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TipoContato } from '../tiposcontatos/tiposcontatos.component';

@Component({
  selector: 'app-adicionar-tipocontato',
  templateUrl: './adicionar-tipocontato.component.html',
  styleUrls: ['./adicionar-tipocontato.component.css']
})
export class AdicionarTipoContatoComponent implements OnInit {

  public http: HttpClient;
  public baseUrl: string;
  public tiposcontatos: TipoContato[] = [];

  AdicionarTipoContatoRequest: TipoContato = {
    id: 0,
    nome: '',
  }
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private router: Router) {

    this.http = http;
    this.baseUrl = baseUrl;


  }

  ngOnInit(): void {
  }

  AdicionarTipoContato() {
    var res = this.http.post<Cliente>(this.baseUrl + 'tipocontato', this.AdicionarTipoContatoRequest).subscribe(
      result => {
      console.log("result:" );
        console.log(result);
        this.router.navigate(['tiposcontatos']);

      }
    );

  }

}
