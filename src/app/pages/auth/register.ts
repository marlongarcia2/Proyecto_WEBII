import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { ApiErrorService } from '../../core/services/api-error.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ButtonModule, InputTextModule, PasswordModule, ReactiveFormsModule, RouterModule, ToastModule],
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
          <p class="mt-2 text-surface-400">Se parte de Orión</p>
        </div>

        <div class="w-full rounded-2xl bg-surface-900 p-8 shadow-xl border border-yellow-900/30">
          <form class="flex flex-col gap-5" [formGroup]="form" (ngSubmit)="submit()">
            <div>
              <label class="mb-2 block text-sm font-medium text-surface-300" for="name">Nombre</label>
              <input id="name" pInputText class="w-full" formControlName="name" placeholder="Tu nombre" />
              @if (form.controls.name.invalid && form.controls.name.touched) {
                <small class="text-red-400">El nombre debe tener mínimo 2 caracteres.</small>
              }
            </div>

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
              label="Registrarme"
              icon="pi pi-user-plus"
              [loading]="loading"
              class="w-full mt-2"
              style="background: linear-gradient(to bottom right, #eab308, #a16207); border: none; color: black; font-weight: 600;"
            ></button>
          </form>

          <div class="mt-6 text-center text-sm text-surface-400">
            ¿Ya tienes cuenta?
            <a routerLink="/auth/login" class="font-medium text-yellow-500 hover:text-yellow-400">Inicia sesión</a>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class Register {
  private readonly formBuilder = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly apiErrorService = inject(ApiErrorService);
  private readonly messageService = inject(MessageService);
  private readonly router = inject(Router);

  loading = false;

  form = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;

    this.authService.register(this.form.getRawValue()).subscribe({
      next: () => {
        this.router.navigateByUrl('/');
      },
      error: (error) => {
        this.loading = false;
        this.messageService.add({
          severity: 'error',
          summary: 'No se pudo crear la cuenta',
          detail: this.apiErrorService.getMessage(error),
        });
      },
    });
  }
}