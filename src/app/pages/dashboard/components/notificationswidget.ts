import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';

@Component({
    standalone: true,
    selector: 'app-notifications-widget',
    imports: [ButtonModule, MenuModule],
              template: `<div class="rounded-2xl p-6 shadow-md border border-yellow-900/30" style="background: #1a1a1a;">
        <div class="flex items-center justify-between mb-6">
            <div class="font-bold text-xl text-yellow-500">Notificaciones</div>
            <div>
                <button pButton type="button" icon="pi pi-ellipsis-v" class="p-button-rounded p-button-text p-button-plain" (click)="menu.toggle($event)"></button>
                <p-menu #menu [popup]="true" [model]="items"></p-menu>
            </div>
        </div>

        <span class="block text-surface-500 font-semibold text-xs tracking-wide mb-4">HOY</span>
        <ul class="p-0 mx-0 mt-0 mb-6 list-none flex flex-col gap-3">
            <li class="flex items-center">
                <div class="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-full mr-4 shrink-0 shadow-md shadow-yellow-900/50">
                    <i class="pi pi-calendar text-xl! text-black"></i>
                </div>
                <span class="text-surface-100 leading-normal"
                    >Carlos Ramírez
                    <span class="text-surface-500">agendó un <span class="text-yellow-500 font-bold">Corte + Barba</span> para las 4:00 PM</span>
                </span>
            </li>
            <li class="flex items-center">
                <div class="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-full mr-4 shrink-0 shadow-md shadow-yellow-900/50">
                    <i class="pi pi-check-circle text-xl! text-black"></i>
                </div>
                <span class="text-surface-500 leading-normal">Cita con <span class="text-yellow-500 font-bold">Andrés Peña</span> completada exitosamente.</span>
            </li>
        </ul>

        <span class="block text-surface-500 font-semibold text-xs tracking-wide mb-4">AYER</span>
        <ul class="p-0 m-0 list-none mb-6 flex flex-col gap-3">
            <li class="flex items-center">
                <div class="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-full mr-4 shrink-0 shadow-md shadow-yellow-900/50">
                    <i class="pi pi-calendar text-xl! text-black"></i>
                </div>
                <span class="text-surface-100 leading-normal"
                    >Keyser Wick
                    <span class="text-surface-500">agendó un <span class="text-yellow-500 font-bold">Afeitado Tradicional</span> para mañana</span>
                </span>
            </li>
            <li class="flex items-center">
                <div class="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-full mr-4 shrink-0 shadow-md shadow-yellow-900/50">
                    <i class="pi pi-question-circle text-xl! text-black"></i>
                </div>
                <span class="text-surface-100 leading-normal"
                    >Jane Davis
                    <span class="text-surface-500">preguntó sobre disponibilidad de horarios.</span>
                </span>
            </li>
        </ul>
        <span class="block text-surface-500 font-semibold text-xs tracking-wide mb-4">ÚLTIMA SEMANA</span>
        <ul class="p-0 m-0 list-none flex flex-col gap-3">
            <li class="flex items-center">
                <div class="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-full mr-4 shrink-0 shadow-md shadow-yellow-900/50">
                    <i class="pi pi-arrow-up text-xl! text-black"></i>
                </div>
                <span class="text-surface-100 leading-normal">Los ingresos aumentaron un <span class="text-yellow-500 font-bold">25%</span>.</span>
            </li>
            <li class="flex items-center">
                <div class="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-full mr-4 shrink-0 shadow-md shadow-yellow-900/50">
                    <i class="pi pi-star text-xl! text-black"></i>
                </div>
                <span class="text-surface-100 leading-normal"><span class="text-yellow-500 font-bold">12</span> clientes nuevos se registraron esta semana.</span>
            </li>
        </ul>
    </div>`  
})
export class NotificationsWidget {
    items = [
        { label: 'Add New', icon: 'pi pi-fw pi-plus' },
        { label: 'Remove', icon: 'pi pi-fw pi-trash' }
    ];
}
