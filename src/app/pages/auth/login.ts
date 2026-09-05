// Component permite declarar una pantalla standalone de Angular.
// inject permite pedir servicios sin usar constructor.
import { Component, inject } from '@angular/core';

// FormBuilder ayuda a crear formularios reactivos.
// ReactiveFormsModule habilita [formGroup] y formControlName en el template.
// Validators permite validar campos antes de llamar al backend.
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

// Router se usa para navegar al dashboard después del login.
// RouterModule permite usar routerLink en el HTML.
import { Router, RouterModule } from '@angular/router';

// Módulos visuales de PrimeNG/Sakai.
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';

// ApiErrorService convierte errores HTTP del backend en mensajes legibles.
import { ApiErrorService } from '../../core/services/api-error.service';

// AuthService contiene la llamada real a POST /api/v1/auth/login.
// También guarda los tokens cuando el backend responde correctamente.
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,

  // Estos imports son necesarios porque el componente es standalone.
  // Si usas p-button, p-password, formGroup o routerLink en el template,
  // el módulo correspondiente debe estar aquí.
  imports: [ButtonModule, InputTextModule, PasswordModule, ReactiveFormsModule, RouterModule, ToastModule],

  // MessageService permite mostrar mensajes tipo toast en esta pantalla.
  providers: [MessageService],
     template: `
    <p-toast />

    <div class="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4">
        <div class="pointer-events-none absolute inset-0 opacity-60" style="background-image: radial-gradient(circle at 1px 1px, rgb(212 175 55 / 0.4) 1px, transparent 0); background-size: 40px 40px;"></div>
        <div class="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-yellow-600 opacity-10 blur-3xl"></div>
        <div class="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-yellow-500 opacity-10 blur-3xl"></div>

        <div class="relative z-10 w-full max-w-md">
            <div class="mb-8 text-center">
                <div class="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-700 shadow-lg shadow-yellow-900/50 mb-4">
                    <svg viewBox="0 0 40 40" class="h-9 w-9">
                        <line x1="8" y1="30" x2="14" y2="18" stroke="black" stroke-width="1.5" />
                        <line x1="14" y1="18" x2="20" y2="8" stroke="black" stroke-width="1.5" />
                        <line x1="20" y1="8" x2="26" y2="18" stroke="black" stroke-width="1.5" />
                        <line x1="26" y1="18" x2="32" y2="30" stroke="black" stroke-width="1.5" />
                        <line x1="14" y1="18" x2="26" y2="18" stroke="black" stroke-width="1.5" />
                        <circle cx="8" cy="30" r="2" fill="black" />
                        <circle cx="14" cy="18" r="2.2" fill="black" />
                        <circle cx="20" cy="8" r="2" fill="black" />
                        <circle cx="26" cy="18" r="2.2" fill="black" />
                        <circle cx="32" cy="30" r="2" fill="black" />
                    </svg>
                </div>
                <h1 class="text-3xl font-bold tracking-wide" style="color: #eab308;">ORIÓN</h1>
                <p class="mt-2 text-surface-400">Barbería · Inicia sesión para continuar</p>
            </div>

            <div class="w-full rounded-2xl bg-surface-900 p-8 shadow-xl border border-yellow-900/30">
                <form class="flex flex-col gap-5" [formGroup]="form" (ngSubmit)="submit()">
                    <div>
                        <label class="mb-2 block text-sm font-medium text-surface-300" for="email">Correo</label>
                        <input id="email" pInputText class="w-full" formControlName="email" placeholder="tucorreo@ejemplo.com" />
                        @if (form.controls.email.invalid && form.controls.email.touched) {
                            <small class="text-red-400">Ingresa un correo válido.</small>
                        }
                    </div>

                    <div>
                        <label class="mb-2 block text-sm font-medium text-surface-300" for="password">Contraseña</label>
                        <p-password
                            inputId="password"
                            styleClass="w-full"
                            inputStyleClass="w-full"
                            formControlName="password"
                            [feedback]="false"
                            [toggleMask]="true"
                            placeholder="••••••••"
                        />
                        @if (form.controls.password.invalid && form.controls.password.touched) {
                            <small class="text-red-400">La contraseña debe tener mínimo 8 caracteres.</small>
                        }
                    </div>

                    <button
                        pButton
                        type="submit"
                        label="Ingresar"
                        icon="pi pi-sign-in"
                        [loading]="loading"
                        class="w-full mt-2"
                        style="background: linear-gradient(to bottom right, #eab308, #a16207); border: none; color: black; font-weight: 600;"
                    ></button>
                </form>

                <div class="mt-6 text-center text-sm text-surface-400">
                    ¿No tienes cuenta?
                    <a routerLink="/auth/register" class="font-medium text-yellow-500 hover:text-yellow-400">Crea una aquí</a>
                </div>
            </div>
        </div>
    </div>
`,
})
export class Login {
  // formBuilder crea el formulario reactivo.
  private readonly formBuilder = inject(FormBuilder);

  // authService conecta esta pantalla con los endpoints de autenticación de NestJS.
  private readonly authService = inject(AuthService);

  // apiErrorService toma errores de NestJS y devuelve un texto amigable.
  private readonly apiErrorService = inject(ApiErrorService);

  // messageService muestra el toast de error en pantalla.
  private readonly messageService = inject(MessageService);

  // router permite navegar al dashboard cuando el login sale bien.
  private readonly router = inject(Router);

  // Controla el estado visual de carga del botón.
  loading = false;

  // Formulario reactivo: Angular valida antes de llamar a la API.
  // Estos nombres deben coincidir con LoginDto del backend: email y password.
  form = this.formBuilder.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  // Se ejecuta cuando el usuario envía el formulario.
  submit() {
    // Si el formulario no cumple validaciones, no llamamos a NestJS.
    if (this.form.invalid) {
      // Marca los campos como tocados para mostrar los mensajes de error.
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;

    // Llama AuthService.login(), que internamente hace:
    // POST http://localhost:3000/api/v1/auth/login
    this.authService.login(this.form.getRawValue()).subscribe({
      next: () => {
        // Si el login fue correcto, AuthService ya guardó accessToken y refreshToken.
        // Ahora enviamos al usuario al dashboard protegido.
        this.router.navigateByUrl('/');
      },
      error: (error) => {
        // Si NestJS responde 401, 400 u otro error, quitamos loading.
        this.loading = false;

        // Mostramos el mensaje del backend en un toast amigable.
        this.messageService.add({
          severity: 'error',
          summary: 'No se pudo iniciar sesión',
          detail: this.apiErrorService.getMessage(error),
        });
      },
    });
  }
}