import { Injectable } from '@angular/core';

export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  rol: string;
}

@Injectable({
  providedIn: 'root',
})

export class UsuarioService {

  private usuarios: Usuario[] = [
    {id: 1, nombre: 'Juan', email: 'juan@gmail.com', rol: 'Admin'},
    {id: 2, nombre: 'Miguel', email: 'migue@gmail.com', rol: 'User'},
    {id: 3, nombre: 'Isabela', email: 'isabela@gmail.com', rol: 'User'}
  ];

  obtenerUsuarios(): Usuario[] {
    return this.usuarios;
  }
}
