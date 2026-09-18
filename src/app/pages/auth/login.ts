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
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

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
 imports: [ButtonModule, IconFieldModule, InputIconModule, InputTextModule, PasswordModule, ReactiveFormsModule, RouterModule, ToastModule],

  // MessageService permite mostrar mensajes tipo toast en esta pantalla.
  providers: [MessageService],
         template: `
    <p-toast />

    <div class="relative flex min-h-screen overflow-hidden bg-black">
        <div class="pointer-events-none absolute inset-0" style="background-image: radial-gradient(1.5px 1.5px at 20px 30px, #eab308, transparent), radial-gradient(1px 1px at 90px 80px, #eab308, transparent), radial-gradient(2px 2px at 160px 40px, rgba(234,179,8,0.7), transparent), radial-gradient(1px 1px at 220px 120px, #eab308, transparent), radial-gradient(1.5px 1.5px at 280px 60px, rgba(234,179,8,0.6), transparent), radial-gradient(1px 1px at 40px 150px, #eab308, transparent), radial-gradient(2px 2px at 340px 180px, rgba(234,179,8,0.5), transparent), radial-gradient(1px 1px at 130px 200px, #eab308, transparent); background-size: 380px 220px; background-repeat: repeat; opacity: 0.8;"></div>
        <div class="pointer-events-none absolute inset-0" style="background: radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(0,0,0,0.7) 100%);"></div>
        <div class="pointer-events-none absolute top-1/4 -left-40 h-96 w-96 rounded-full bg-yellow-600 opacity-10 blur-3xl"></div>
        <div class="pointer-events-none absolute bottom-1/4 -right-40 h-96 w-96 rounded-full bg-yellow-500 opacity-10 blur-3xl"></div>

                <!-- Columna izquierda: marca -->
                <div class="relative z-10 hidden lg:flex lg:w-1/2 flex-col items-center justify-center px-12 border-r border-yellow-800/20" style="background: linear-gradient(135deg, #0a0a0a 0%, #1a1408 100%);">
                    <!-- Ilustración de fondo tipo marca de agua -->
                                <svg viewBox="0 0 400 500" class="pointer-events-none absolute inset-0 h-full w-full">
                <circle cx="70" cy="90" r="2.5" fill="#eab308" opacity="0.4" />
                <circle cx="90" cy="140" r="1.5" fill="#eab308" opacity="0.3" />
                <circle cx="330" cy="80" r="2" fill="#eab308" opacity="0.35" />
                <circle cx="310" cy="130" r="3" fill="#eab308" opacity="0.4" />
                <circle cx="350" cy="160" r="1.5" fill="#eab308" opacity="0.3" />
                <circle cx="50" cy="380" r="2.5" fill="#eab308" opacity="0.35" />
                <circle cx="90" cy="420" r="1.5" fill="#eab308" opacity="0.3" />
                <circle cx="320" cy="400" r="2" fill="#eab308" opacity="0.35" />
                <circle cx="290" cy="440" r="3" fill="#eab308" opacity="0.4" />
                <circle cx="350" cy="420" r="1.5" fill="#eab308" opacity="0.25" />
                <circle cx="200" cy="60" r="1.5" fill="#eab308" opacity="0.25" />
                <circle cx="150" cy="450" r="2" fill="#eab308" opacity="0.3" />
                <line x1="70" y1="90" x2="90" y2="140" stroke="#eab308" stroke-width="0.5" opacity="0.2" />
                <line x1="330" y1="80" x2="310" y2="130" stroke="#eab308" stroke-width="0.5" opacity="0.2" />
                <line x1="310" y1="130" x2="350" y2="160" stroke="#eab308" stroke-width="0.5" opacity="0.2" />
                <line x1="50" y1="380" x2="90" y2="420" stroke="#eab308" stroke-width="0.5" opacity="0.2" />
                <line x1="320" y1="400" x2="290" y2="440" stroke="#eab308" stroke-width="0.5" opacity="0.2" />
                <line x1="290" y1="440" x2="350" y2="420" stroke="#eab308" stroke-width="0.5" opacity="0.2" />
            </svg>

            <!-- Marco decorativo -->
            <div class="pointer-events-none absolute inset-8 border border-yellow-700/30"></div>
            <div class="pointer-events-none absolute inset-10 border border-yellow-700/20"></div>
            <svg class="pointer-events-none absolute top-8 left-8 h-6 w-6" viewBox="0 0 24 24"><path d="M0 0 L24 0 M0 0 L0 24" stroke="#eab308" stroke-width="1.5" opacity="0.6"/></svg>
            <svg class="pointer-events-none absolute top-8 right-8 h-6 w-6" viewBox="0 0 24 24"><path d="M24 0 L0 0 M24 0 L24 24" stroke="#eab308" stroke-width="1.5" opacity="0.6"/></svg>
            <svg class="pointer-events-none absolute bottom-8 left-8 h-6 w-6" viewBox="0 0 24 24"><path d="M0 24 L24 24 M0 24 L0 0" stroke="#eab308" stroke-width="1.5" opacity="0.6"/></svg>
            <svg class="pointer-events-none absolute bottom-8 right-8 h-6 w-6" viewBox="0 0 24 24"><path d="M24 24 L0 24 M24 24 L24 0" stroke="#eab308" stroke-width="1.5" opacity="0.6"/></svg>

            <!-- Contenido principal -->
            <div class="relative z-10 flex flex-col items-center">
                    <div class="relative mb-6 flex items-center justify-center" style="width: 160px; height: 160px;">
                        <div class="absolute inset-0 rounded-full bg-yellow-500 opacity-20 blur-2xl"></div>
                        <div class="absolute rounded-full border border-yellow-600/60" style="width: 130px; height: 130px;"></div>
                        <div class="absolute rounded-full border border-yellow-600/30" style="width: 150px; height: 150px;"></div>
                        <svg viewBox="0 0 40 40" class="relative h-16 w-16">
                        <line x1="8" y1="30" x2="14" y2="18" stroke="#eab308" stroke-width="1" />
                        <line x1="14" y1="18" x2="20" y2="8" stroke="#eab308" stroke-width="1" />
                        <line x1="20" y1="8" x2="26" y2="18" stroke="#eab308" stroke-width="1" />
                        <line x1="26" y1="18" x2="32" y2="30" stroke="#eab308" stroke-width="1" />
                        <line x1="14" y1="18" x2="26" y2="18" stroke="#eab308" stroke-width="1" />
                        <circle cx="8" cy="30" r="2" fill="#eab308" />
                        <circle cx="14" cy="18" r="2.2" fill="#eab308" />
                        <circle cx="20" cy="8" r="2" fill="#eab308" />
                        <circle cx="26" cy="18" r="2.2" fill="#eab308" />
                        <circle cx="32" cy="30" r="2" fill="#eab308" />
                    </svg>
                </div>
                <h1 class="text-6xl font-bold tracking-wider" style="color: #eab308; font-family: 'Playfair Display', serif;">ORIÓN</h1>
                    <div class="my-6 flex items-center gap-3">
                    <div class="h-px w-12 bg-yellow-600/50"></div>
                    <div class="h-2 w-2 rotate-45 border border-yellow-500"></div>
                    <div class="h-px w-12 bg-yellow-600/50"></div>
                </div>
                <p class="text-surface-400 text-center max-w-xs tracking-wide">Tradición y estilo en cada corte</p>
            </div>
        </div>

        <!-- Columna derecha: formulario -->
        <div class="relative z-10 flex w-full lg:w-1/2 items-center justify-center px-6 py-12">
            <div class="w-full max-w-sm">
                <div class="mb-10 text-center lg:hidden">
                    <h1 class="text-4xl font-bold tracking-wider mb-2" style="color: #eab308; font-family: 'Playfair Display', serif;">ORIÓN</h1>
                    <p class="text-surface-500 text-sm">Barbería</p>
                </div>

                <h2 class="text-2xl font-semibold mb-1" style="font-family: 'Playfair Display', serif; color: #f0d78c;">Bienvenido de nuevo</h2>
                <p class="text-surface-500 text-sm mb-8">Inicia sesión para continuar</p>

                <form class="flex flex-col gap-7" [formGroup]="form" (ngSubmit)="submit()">
                    <div>
                        <label class="mb-2 block text-xs font-semibold uppercase tracking-wider text-yellow-600" for="email">Correo</label>
                        <div class="group flex items-center gap-3 border-b border-surface-700 pb-2 transition-colors focus-within:border-yellow-500">
                            <i class="pi pi-envelope text-surface-500 text-sm transition-colors group-focus-within:text-yellow-500"></i>
                            <input
                                id="email"
                                class="w-full bg-transparent text-surface-100 placeholder-surface-600 outline-none text-sm"
                                formControlName="email"
                                placeholder="tucorreo@ejemplo.com"
                            />
                        </div>
                        @if (form.controls.email.invalid && form.controls.email.touched) {
                            <small class="text-red-400">Ingresa un correo válido.</small>
                        }
                    </div>

                    <div>
                        <label class="mb-2 block text-xs font-semibold uppercase tracking-wider text-yellow-600" for="password">Contraseña</label>
                        <div class="group flex items-center gap-3 border-b border-surface-700 pb-2 transition-colors focus-within:border-yellow-500">
                            <i class="pi pi-lock text-surface-500 text-sm transition-colors group-focus-within:text-yellow-500"></i>
                            <p-password
                                inputId="password"
                                styleClass="w-full [&_.p-password-input]:!bg-transparent [&_.p-password-input]:!border-none [&_.p-password-input]:!shadow-none [&_.p-inputtext]:!bg-transparent [&_.p-inputtext]:!border-none [&_.p-inputtext]:!shadow-none"
                                inputStyleClass="w-full !bg-transparent !border-none !shadow-none !text-surface-100 !p-0 !text-sm"
                                formControlName="password"
                                [feedback]="false"
                                [toggleMask]="true"
                                placeholder="••••••••"
                            />
                        </div>
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
                        class="w-full mt-3"
                        style="background: linear-gradient(to bottom right, #eab308, #a16207); border: none; color: black; font-weight: 600; letter-spacing: 0.05em;"
                    ></button>
                </form>

                <div class="mt-8 text-center text-sm text-surface-500">
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