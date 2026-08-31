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

    <div class="relative flex min-h-screen items-center justify-center overflow-hidden bg-surface-50 px-4">
      <div class="pointer-events-none absolute inset-0 opacity-40" style="background-image: radial-gradient(circle at 1px 1px, rgb(99 102 241 / 0.3) 1px, transparent 0); background-size: 24px 24px;"></div>
      <div class="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-300 opacity-50 blur-3xl"></div>
      <div class="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-cyan-300 opacity-50 blur-3xl"></div>

      <div class="relative z-10 w-full max-w-md">
        <div class="mb-8 text-center">
          <div class="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 shadow-lg shadow-indigo-200 mb-4">
            <i class="pi pi-user-plus text-white text-2xl"></i>
          </div>
          <h1 class="text-3xl font-bold text-surface-900">Crea tu cuenta</h1>
          <p class="mt-2 text-surface-500">Únete en unos segundos</p>
        </div>

        <div class="w-full rounded-2xl bg-white p-8 shadow-xl shadow-surface-200/50 border border-surface-100">
          <form class="flex flex-col gap-5" [formGroup]="form" (ngSubmit)="submit()">
            <div>
              <label class="mb-2 block text-sm font-medium text-surface-700" for="name">Nombre</label>
              <input id="name" pInputText class="w-full" formControlName="name" placeholder="Tu nombre" />
              @if (form.controls.name.invalid && form.controls.name.touched) {
                <small class="text-red-500">El nombre debe tener mínimo 2 caracteres.</small>
              }
            </div>

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
              label="Registrarme"
              icon="pi pi-user-plus"
              [loading]="loading"
              class="w-full mt-2"
            ></button>
          </form>

          <div class="mt-6 text-center text-sm text-surface-500">
            ¿Ya tienes cuenta?
            <a routerLink="/auth/login" class="font-medium text-indigo-600 hover:text-indigo-700">Inicia sesión</a>
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