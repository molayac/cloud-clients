import { Cliente } from 'app/model/cliente.class';

export class Empresa {
    nombre: string;
    propietario: string;
    clientes: Cliente[];

    constructor () {
        this.clientes = [];
    }
}
