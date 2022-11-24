import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'tiposcontatos',
  templateUrl: './tiposcontatos.component.html'
})
export class TiposContatosComponent {
  public tiposcontatos: TipoContato[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
 
    http.get<TipoContato[]>(baseUrl + 'tipocontato').subscribe(result => {
      this.tiposcontatos = result;
    }, error => console.error(error));

  }
}

export interface TipoContato {
  id: number;
  nome: string;
}
