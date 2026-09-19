import { Component, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';
import { CurrentUserService } from '@/app/core/services/current-user.service';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        @for (item of model; track item.label) {
            @if (!item.separator) {
                <li app-menuitem [item]="item" [root]="true"></li>
            } @else {
                <li class="menu-separator"></li>
            }
        }
    </ul> `,
})
export class AppMenu {
    private readonly currentUserService = inject(CurrentUserService);

    model: MenuItem[] = [];

    constructor() {
        effect(() => {
            const user = this.currentUserService.user();

            this.model = [
                {
                    label: 'Inicio',
                    items: [{ label: 'Tablero', icon: 'pi pi-fw pi-home', routerLink: ['/'] }]
                }
            ];

            if (user?.role === 'ADMIN') {
                this.model = [
                    ...this.model,
                    {
                        label: 'Administración',
                        items: [
                            { label: 'Usuarios', icon: 'pi pi-fw pi-users', routerLink: ['/users'] }
                        ]
                    }
                ];
            }
        });
    }
}