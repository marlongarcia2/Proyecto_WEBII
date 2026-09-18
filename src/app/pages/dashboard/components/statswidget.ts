import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-stats-widget',
    imports: [CommonModule],
           template: `<div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="rounded-2xl p-6 shadow-md border border-yellow-900/30 hover:border-yellow-700/50 transition-colors" style="background: #1a1a1a;">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-surface-400 font-medium mb-2 text-sm">Ordenes</span>
                        <div class="text-yellow-500 font-bold text-2xl">152</div>
                    </div>
                    <div class="flex items-center justify-center rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-700 shadow-md shadow-yellow-900/50" style="width: 3rem; height: 3rem">
                        <i class="pi pi-shopping-cart text-black text-xl!"></i>
                    </div>
                </div>
                <span class="text-emerald-500 font-semibold text-sm">↑ 24 nuevos </span>
                <span class="text-surface-500 text-sm">Ultima visita</span>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="rounded-2xl p-6 shadow-md border border-yellow-900/30 hover:border-yellow-700/50 transition-colors" style="background: #1a1a1a;">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-surface-400 font-medium mb-2 text-sm">Ingresos</span>
                        <div class="text-yellow-500 font-bold text-2xl">$2.100</div>
                    </div>
                    <div class="flex items-center justify-center rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-700 shadow-md shadow-yellow-900/50" style="width: 3rem; height: 3rem">
                        <i class="pi pi-dollar text-black text-xl!"></i>
                    </div>
                </div>
                <span class="text-emerald-500 font-semibold text-sm">↑ 52% </span>
                <span class="text-surface-500 text-sm">Ultima semana</span>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="rounded-2xl p-6 shadow-md border border-yellow-900/30 hover:border-yellow-700/50 transition-colors" style="background: #1a1a1a;">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-surface-400 font-medium mb-2 text-sm">Clientes</span>
                        <div class="text-yellow-500 font-bold text-2xl">28,441</div>
                    </div>
                    <div class="flex items-center justify-center rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-700 shadow-md shadow-yellow-900/50" style="width: 3rem; height: 3rem">
                        <i class="pi pi-users text-black text-xl!"></i>
                    </div>
                </div>
                <span class="text-emerald-500 font-semibold text-sm">↑ 520 </span>
                <span class="text-surface-500 text-sm">nuevos registros</span>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="rounded-2xl p-6 shadow-md border border-yellow-900/30 hover:border-yellow-700/50 transition-colors" style="background: #1a1a1a;">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-surface-400 font-medium mb-2 text-sm">Comentarios</span>
                        <div class="text-yellow-500 font-bold text-2xl">152 No leidos</div>
                    </div>
                    <div class="flex items-center justify-center rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-700 shadow-md shadow-yellow-900/50" style="width: 3rem; height: 3rem">
                        <i class="pi pi-comment text-black text-xl!"></i>
                    </div>
                </div>
                <span class="text-emerald-500 font-semibold text-sm">↑ 85 </span>
                <span class="text-surface-500 text-sm">respondidos</span>
            </div>
        </div>`
})
export class StatsWidget {}
