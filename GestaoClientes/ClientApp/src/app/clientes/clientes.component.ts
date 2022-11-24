import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent {
  public clientes: Cliente[] = [];
  private http: HttpClient;
  private baseUrl: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private route: ActivatedRoute, private router: Router) {

    this.http = http;
    this.baseUrl = baseUrl;
    http.get<Cliente[]>(baseUrl + 'cliente').subscribe(result => {
      this.clientes = result;
      this.router.navigate(['clientes']);
    }, error => console.error(error));

  }
}

export interface Cliente {
  id: number;
  nome: string;
  email: string;
  dataNascimento: Date;
}


