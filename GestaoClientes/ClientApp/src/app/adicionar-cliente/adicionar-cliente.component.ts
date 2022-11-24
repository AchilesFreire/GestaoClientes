import { Component, Inject, OnInit } from '@angular/core';
import { empty, Observable } from 'rxjs';
import { Cliente } from 'src/app/clientes/clientes.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-cliente',
  templateUrl: './adicionar-cliente.component.html',
  styleUrls: ['./adicionar-cliente.component.css']
})
export class AdicionarClienteComponent implements OnInit {

  public http: HttpClient;
  public baseUrl: string;

  AdicionarClienteRequest: Cliente = {
    id: 0,
    nome: '',
    email: '',
    dataNascimento: new Date('01/01/0001')
  }
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private router: Router) {

    this.http = http;
    this.baseUrl = baseUrl;
  }

  ngOnInit(): void {
  }

  AdicionarCliente() {
    var res = this.http.post<Cliente>(this.baseUrl + 'Cliente', this.AdicionarClienteRequest).subscribe(
      result => {
      console.log("result:" );
        console.log(result);
        this.router.navigate(['clientes']);

      }
    );

  }

}
