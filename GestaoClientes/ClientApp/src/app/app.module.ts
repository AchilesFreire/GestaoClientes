import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';

import { ClientesComponent } from './clientes/clientes.component';
import { AdicionarClienteComponent } from './adicionar-cliente/adicionar-cliente.component';
import { VisualizarClienteComponent } from './visualizar-cliente/visualizar-cliente.component';
import { TiposContatosComponent } from './tiposcontatos/tiposcontatos.component';
import { AdicionarTipoContatoComponent } from './adicionar-tipocontato/adicionar-tipocontato.component';
import { VisualizarTipoContatoComponent } from './visualizar-tipocontato/visualizar-tipocontato.component';

import { ContatoClienteComponent } from './contatocliente/contatocliente.component';
import { VisualizarContatoClienteComponent } from './visualizar-contatocliente/visualizar-contatocliente.component';
import { AdicionarContatoClienteComponent } from './adicionar-contatocliente/adicionar-contatocliente.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ClientesComponent,
    AdicionarClienteComponent,
    VisualizarClienteComponent,
    TiposContatosComponent,
    AdicionarTipoContatoComponent,
    VisualizarTipoContatoComponent,
    ContatoClienteComponent,
    VisualizarContatoClienteComponent,
    AdicionarContatoClienteComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'clientes', component: ClientesComponent },
      { path: 'adicionar-cliente', component: AdicionarClienteComponent },
      { path: 'clientes/visualizar/:id', component: VisualizarClienteComponent },
      { path: 'tiposcontatos', component: TiposContatosComponent },
      { path: 'adicionar-tipocontato', component: AdicionarTipoContatoComponent },
      { path: 'tiposcontatos/visualizar/:id', component: VisualizarTipoContatoComponent },
      { path: 'contatocliente/contatos/:cliente', component: ContatoClienteComponent },
      { path: 'contatocliente/visualizar/:id', component: VisualizarContatoClienteComponent },
      { path: 'adicionar-contatocliente/:cliente', component: AdicionarContatoClienteComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
