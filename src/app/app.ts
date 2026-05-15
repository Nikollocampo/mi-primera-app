import { Component, OnInit, signal } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ApiService } from './services/api';
import { User } from './models/user.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  usuarios = signal<User[]>([]);
  cargando = signal(true);
  error = signal('');

  // Estados para posts
  posts = signal<any[]>([]);
  cargandoPosts = signal(true);
  errorPosts = signal('');

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.obtenerUsuarios().subscribe({
      next: (data: User[]) => {
        this.usuarios.set(data);
        this.cargando.set(false);
      },
      error: (err: Error) => {
        this.error.set('Error al cargar usuarios: ' + err.message);
        this.cargando.set(false);
        console.error('Error:', err);
      }
    });

    // Obtener posts
    this.apiService.obtenerPosts().subscribe({
      next: (data: any[]) => {
        this.posts.set(data);
        this.cargandoPosts.set(false);
      },
      error: (err: Error) => {
        this.errorPosts.set('Error al cargar posts: ' + err.message);
        this.cargandoPosts.set(false);
        console.error('Error:', err);
      }
    });
  }
}
