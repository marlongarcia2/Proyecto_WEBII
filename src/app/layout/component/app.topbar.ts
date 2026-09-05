import { Component, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { AppConfigurator } from './app.configurator';
import { LayoutService } from '@/app/layout/service/layout.service';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [RouterModule, CommonModule, StyleClassModule, AppConfigurator],
    template: ` <div class="layout-topbar">
        <div class="layout-topbar-logo-container">
            <button class="layout-menu-button layout-topbar-action" (click)="layoutService.onMenuToggle()">
                <i class="pi pi-bars"></i>
            </button>
            <a class="layout-topbar-logo" routerLink="/">
            <div class="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-700">
                <svg viewBox="0 0 40 40" class="h-5 w-5">
                    <line x1="8" y1="30" x2="14" y2="18" stroke="black" stroke-width="2" />
                    <line x1="14" y1="18" x2="20" y2="8" stroke="black" stroke-width="2" />
                    <line x1="20" y1="8" x2="26" y2="18" stroke="black" stroke-width="2" />
                    <line x1="26" y1="18" x2="32" y2="30" stroke="black" stroke-width="2" />
                    <line x1="14" y1="18" x2="26" y2="18" stroke="black" stroke-width="2" />
                    <circle cx="8" cy="30" r="2.5" fill="black" />
                    <circle cx="14" cy="18" r="2.8" fill="black" />
                    <circle cx="20" cy="8" r="2.5" fill="black" />
                    <circle cx="26" cy="18" r="2.8" fill="black" />
                    <circle cx="32" cy="30" r="2.5" fill="black" />
                </svg>
            </div>
            <span style="color: #eab308;">ORIÓN</span>
            </a>
        </div>

        <div class="layout-topbar-actions">
            <div class="layout-config-menu">
                <div class="relative">
                    <button
                        class="layout-topbar-action layout-topbar-action-highlight"
                        pStyleClass="@next"
                        enterFromClass="hidden"
                        enterActiveClass="animate-scalein"
                        leaveToClass="hidden"
                        leaveActiveClass="animate-fadeout"
                        [hideOnOutsideClick]="true"
                    >
                        <i class="pi pi-palette"></i>
                    </button>
                    <app-configurator />
                </div>
            </div>

            <button class="layout-topbar-menu-button layout-topbar-action" pStyleClass="@next" enterFromClass="hidden" enterActiveClass="animate-scalein" leaveToClass="hidden" leaveActiveClass="animate-fadeout" [hideOnOutsideClick]="true">
                <i class="pi pi-ellipsis-v"></i>
            </button>

            <div class="layout-topbar-menu hidden lg:block">
                <div class="layout-topbar-menu-content">
                    <button type="button" class="layout-topbar-action">
                        <i class="pi pi-calendar"></i>
                        <span>Calendar</span>
                    </button>
                    <button type="button" class="layout-topbar-action">
                        <i class="pi pi-inbox"></i>
                        <span>Messages</span>
                    </button>
                    <button type="button" class="layout-topbar-action">
                        <i class="pi pi-user"></i>
                        <span>Profile</span>
                    </button>
                </div>
            </div>
        </div>
    </div>`
})
export class AppTopbar {
    items!: MenuItem[];
    layoutService = inject(LayoutService);

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state) => ({
            ...state,
            darkTheme: !state.darkTheme
        }));
    }
}
