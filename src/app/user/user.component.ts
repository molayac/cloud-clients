import { Empresa } from './../model/empresa.class';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Cliente } from 'app/model/cliente.class';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  action: string;
  private sub: any;
  private formularioCliente: FormGroup;
  @Input() clienteInicial: Cliente;
  @Input() empresa: Empresa;
  constructor(private route: ActivatedRoute, private _fb: FormBuilder ) { }

  ngOnInit() {
    const empresa = this.empresa ? this.empresa : new Empresa();
    empresa.nombre = 'HILO COLOR';
    empresa.propietario = 'Daniel Muñoz';
    const inicial = this.clienteInicial ? this.clienteInicial : new Cliente();
    this.formularioCliente = this._fb.group({
      nombre: [inicial.nombre, [Validators.required]],
      apellido: [inicial.apellido, [Validators.required]],
      celular: [inicial.celular, [Validators.required, Validators.pattern('+[0-9]{10}')]],
      telefono: [inicial.telefono, [Validators.maxLength(8)]],
      correo: [inicial.correo, [Validators.required, Validators.email]],
      direccion: [inicial.direccion, [Validators.required]]
    });
    this.sub = this.route.params.subscribe(params => {
      this.action = params['action']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
