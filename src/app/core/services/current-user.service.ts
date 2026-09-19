import { Injectable, inject, signal } from '@angular/core';
import { AuthService } from './auth.service';
import type { AuthenticatedUser } from '../models/auth.models';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  private readonly authService = inject(AuthService);

  // Guarda el usuario autenticado en memoria una vez consultado.
  user = signal<AuthenticatedUser | null>(null);

  // Trae /auth/me y lo guarda en el signal.
  // Se llama una vez al cargar el layout principal (ver AppLayout).
  load() {
    return this.authService.me().subscribe({
      next: (user) => this.user.set(user),
      error: () => this.user.set(null),
    });
  }

  isAdmin() {
    return this.user()?.role === 'ADMIN';
  }
}