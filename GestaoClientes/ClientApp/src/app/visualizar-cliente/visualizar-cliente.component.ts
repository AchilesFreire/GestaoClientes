import { Component, Inject, OnInit } from '@angular/core';
import { empty, Observable } from 'rxjs';
import { Cliente } from 'src/app/clientes/clientes.component';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-visualizar-cliente',
  templateUrl: './visualizar-cliente.component.html',
  styleUrls: ['./visualizar-cliente.component.css']
})
export class VisualizarClienteComponent implements OnInit {

  public http: HttpClient;
  public baseUrl: string;

  VisualizarClienteRequest: Cliente = {
    id: 0,
    nome: '',
    email: '',
    dataNascimento: new Date('01/01/0001')
  }
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, route: ActivatedRoute, private router :Router ) {

    this.http = http;
    this.baseUrl = baseUrl;
    route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          console.log("subscribe:");
          this.editaCliente(id).subscribe(
            {
              next: (response) => {
                console.log("response:");
                console.log(response);

                this.VisualizarClienteRequest = response;
              }

              }
            )
        }
      }
      })
  }

  ngOnInit(): void {


  }

  editaCliente(id: string): Observable<Cliente> {
    return  this.http.get <Cliente>(this.baseUrl + 'cliente/edit/'+ id);
  }

  SalvarCliente() {
    var res = this.http.post<Cliente>(this.baseUrl + 'Cliente', this.VisualizarClienteRequest).subscribe(
      result => {
        console.log("result:" );
        console.log(result);
        this.router.navigate(['clientes']);

      }
    );
  }
  ExcluiCliente(id: number) {
    this.http.delete<Cliente>(this.baseUrl + 'Cliente/' + id).subscribe(
      {
        next: (response) => {
          this.router.navigate(['clientes']);
        }
      }
    );

  }

}
