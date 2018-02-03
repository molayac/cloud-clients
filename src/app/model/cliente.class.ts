export class Cliente {
    nombre: string;
    apellido: string;
    celular: string;
    direccion: string;
    correo: string;
    telefono?: string;
    constructor () {
        this.telefono = 'N/A';
    }
}