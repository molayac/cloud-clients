import { Cliente } from './../model/cliente.class';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Empresa } from './../model/empresa.class';
import 'rxjs/add/operator/map';

@Injectable()
export class ClientesService {
  apiHost: string;
  constructor(private http: Http) {
    this.apiHost = 'https://cloudclients-96260.firebaseio.com/emperesas/:idEmpresa/clientes.json';
  }

  guardarCliente( cliente: Cliente, idEmpresa: string ) {
    const body = JSON.stringify(cliente);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.apiHost.replace(':idEmpresa', idEmpresa), body, { headers })
      .map(res => res.json());
  }
}
