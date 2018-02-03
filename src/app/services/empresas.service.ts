import { Cliente } from './../model/cliente.class';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Empresa } from './../model/empresa.class';
import 'rxjs/add/operator/map';

@Injectable()
export class EmpresasService {
  apiHost: string;
  apiHostGetAll: string;
  apiHostGet; string;
  apiHostPost: string;
  apiHostPut: string;
  headers: Headers;

  constructor(private http: Http) {
    this.apiHost = 'https://cloudclients-96260.firebaseio.com/emperesas';
    this.apiHostGetAll = this.apiHost + '.json';
    this.apiHostPost = this.apiHost + '.json';
    this.apiHostPut = this.apiHost + '/:idEmpresa.json';
    this.apiHostGet = this.apiHost + '/:idEmpresa.json';
    this.headers = new Headers({
      'Content-Type': 'application/json'
    });
  }

  consultarEmpresas() {
    const headers = this.headers;
    return this.http.get(this.apiHostGetAll, { headers });
  }

  consultarEmpresa(idEmpresa: string) {
    const headers = this.headers;
    return this.http.get(this.apiHostGet.replace(':idEmpresa', idEmpresa), { headers });
  }

  guardarEmpresa(empresa: Empresa) {
    const body = JSON.stringify(empresa);
    const headers = this.headers;
    return this.http.post(this.apiHostPost, body, { headers }).map(res => res.json);
  }

  actualizarEmpresa(idEmpresa: string, empresa: Empresa) {
    const headers = this.headers;
    return this.http.put(this.apiHostPut.replace(':idEmpresa', idEmpresa), empresa, { headers })
      .map(res => res.json());
  }

}
