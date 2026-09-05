import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';

@Component({
    standalone: true,
    selector: 'app-best-selling-widget',
    imports: [CommonModule, ButtonModule, MenuModule],
               template: ` <div class="rounded-2xl p-6 shadow-md border border-yellow-900/30" style="background: #1a1a1a;">
        <div class="flex justify-between items-center mb-6">
            <div class="font-bold text-xl text-yellow-500">Servicios Más Solicitados</div>
            <div>
                <button pButton type="button" icon="pi pi-ellipsis-v" class="p-button-rounded p-button-text p-button-plain" (click)="menu.toggle($event)"></button>
                <p-menu #menu [popup]="true" [model]="items"></p-menu>
            </div>
        </div>
        <ul class="list-none p-0 m-0 flex flex-col gap-5">
            <li class="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                    <span class="text-surface-100 font-semibold mr-2 mb-1 md:mb-0">Corte Clásico</span>
                    <div class="mt-1 text-surface-500 text-sm">Cabello</div>
                </div>
                <div class="mt-2 md:mt-0 flex items-center">
                    <div class="bg-surface-800 rounded-full overflow-hidden w-40 lg:w-24" style="height: 8px">
                        <div class="bg-gradient-to-r from-yellow-500 to-yellow-600 h-full rounded-full" style="width: 68%"></div>
                    </div>
                    <span class="text-yellow-500 ml-4 font-semibold text-sm">68%</span>
                </div>
            </li>
            <li class="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                    <span class="text-surface-100 font-semibold mr-2 mb-1 md:mb-0">Arreglo de Barba</span>
                    <div class="mt-1 text-surface-500 text-sm">Barba</div>
                </div>
                <div class="mt-2 md:mt-0 ml-0 md:ml-20 flex items-center">
                    <div class="bg-surface-800 rounded-full overflow-hidden w-40 lg:w-24" style="height: 8px">
                        <div class="bg-gradient-to-r from-yellow-500 to-yellow-600 h-full rounded-full" style="width: 54%"></div>
                    </div>
                    <span class="text-yellow-500 ml-4 font-semibold text-sm">54%</span>
                </div>
            </li>
            <li class="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                    <span class="text-surface-100 font-semibold mr-2 mb-1 md:mb-0">Afeitado Tradicional</span>
                    <div class="mt-1 text-surface-500 text-sm">Navaja</div>
                </div>
                <div class="mt-2 md:mt-0 ml-0 md:ml-20 flex items-center">
                    <div class="bg-surface-800 rounded-full overflow-hidden w-40 lg:w-24" style="height: 8px">
                        <div class="bg-gradient-to-r from-yellow-500 to-yellow-600 h-full rounded-full" style="width: 41%"></div>
                    </div>
                    <span class="text-yellow-500 ml-4 font-semibold text-sm">41%</span>
                </div>
            </li>
            <li class="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                    <span class="text-surface-100 font-semibold mr-2 mb-1 md:mb-0">Corte + Barba (Combo)</span>
                    <div class="mt-1 text-surface-500 text-sm">Combo</div>
                </div>
                <div class="mt-2 md:mt-0 ml-0 md:ml-20 flex items-center">
                    <div class="bg-surface-800 rounded-full overflow-hidden w-40 lg:w-24" style="height: 8px">
                        <div class="bg-gradient-to-r from-yellow-500 to-yellow-600 h-full rounded-full" style="width: 82%"></div>
                    </div>
                    <span class="text-yellow-500 ml-4 font-semibold text-sm">82%</span>
                </div>
            </li>
            <li class="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                    <span class="text-surface-100 font-semibold mr-2 mb-1 md:mb-0">Diseño de Cejas</span>
                    <div class="mt-1 text-surface-500 text-sm">Detalle</div>
                </div>
                <div class="mt-2 md:mt-0 ml-0 md:ml-20 flex items-center">
                    <div class="bg-surface-800 rounded-full overflow-hidden w-40 lg:w-24" style="height: 8px">
                        <div class="bg-gradient-to-r from-yellow-500 to-yellow-600 h-full rounded-full" style="width: 29%"></div>
                    </div>
                    <span class="text-yellow-500 ml-4 font-semibold text-sm">29%</span>
                </div>
            </li>
            <li class="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                    <span class="text-surface-100 font-semibold mr-2 mb-1 md:mb-0">Tinte / Color</span>
                    <div class="mt-1 text-surface-500 text-sm">Cabello</div>
                </div>
                <div class="mt-2 md:mt-0 ml-0 md:ml-20 flex items-center">
                    <div class="bg-surface-800 rounded-full overflow-hidden w-40 lg:w-24" style="height: 8px">
                        <div class="bg-gradient-to-r from-yellow-500 to-yellow-600 h-full rounded-full" style="width: 18%"></div>
                    </div>
                    <span class="text-yellow-500 ml-4 font-semibold text-sm">18%</span>
                </div>
            </li>
        </ul>
    </div>`
})
export class BestSellingWidget {
    menu = null;

    items = [
        { label: 'Add New', icon: 'pi pi-fw pi-plus' },
        { label: 'Remove', icon: 'pi pi-fw pi-trash' }
    ];
}
