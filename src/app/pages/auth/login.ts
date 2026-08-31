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

    <div class="relative flex min-h-screen items-center justify-center overflow-hidden bg-surface-50 px-4">
    <!-- Patrón geométrico de fondo -->
    <div class="pointer-events-none absolute inset-0 opacity-40"
         style="background-image: radial-gradient(circle at 1px 1px, rgb(99 102 241 / 0.15) 1px, transparent 0);
                background-size: 32px 32px;">
    </div>

    <!-- Manchas de color difuminadas para dar profundidad -->
    <div class="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-300 opacity-50 blur-2xl"></div>
    <div class="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-cyan-300 opacity-50 blur-3xl"></div>

        <div class="relative z-10 w-full max-w-md">
            <!-- Logo / marca -->
            <div class="mb-8 text-center">
                <div class="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 shadow-lg shadow-indigo-200 mb-4">
                    <i class="pi pi-shield text-white text-2xl"></i>
                </div>
                <h1 class="text-3xl font-bold text-surface-900">Bienvenido</h1>
                <p class="mt-2 text-surface-500">Inicia sesión para continuar</p>
            </div>

            <!-- Card -->
            <div class="w-full rounded-2xl bg-white p-8 shadow-xl shadow-surface-200/50 border border-surface-100">
                <form class="flex flex-col gap-5" [formGroup]="form" (ngSubmit)="submit()">
                    <div>
                        <label class="mb-2 block text-sm font-medium text-surface-700" for="email">Correo</label>
                        <input id="email" pInputText class="w-full" formControlName="email" placeholder="tucorreo@ejemplo.com" />
                        @if (form.controls.email.invalid && form.controls.email.touched) {
                            <small class="text-red-500">Ingresa un correo válido.</small>
                        }
                    </div>

                    <div>
                        <label class="mb-2 block text-sm font-medium text-surface-700" for="password">Contraseña</label>
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
                            <small class="text-red-500">La contraseña debe tener mínimo 8 caracteres.</small>
                        }
                    </div>

                    <button
                        pButton
                        type="submit"
                        label="Ingresar"
                        icon="pi pi-sign-in"
                        [loading]="loading"
                        class="w-full mt-2"
                    ></button>
                </form>

                <div class="mt-6 text-center text-sm text-surface-500">
                    ¿No tienes cuenta?
                    <a routerLink="/auth/register" class="font-medium text-indigo-600 hover:text-indigo-700">Crea una aquí</a>
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