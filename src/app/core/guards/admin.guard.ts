import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { map, catchError, of } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const adminGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Consulta el usuario actual directo al backend, sin depender de que
  // el signal ya esté cargado (evita el problema de carga por URL directa).
  return authService.me().pipe(
    map((user) => {
      if (user.role === 'ADMIN') {
        return true;
      }
      return router.createUrlTree(['/']);
    }),
    catchError(() => of(router.createUrlTree(['/auth/login']))),
  );
};