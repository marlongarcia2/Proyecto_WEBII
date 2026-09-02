import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-stats-widget',
    imports: [CommonModule],
        template: `<div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="rounded-2xl bg-white p-6 shadow-md shadow-surface-200/50 border border-surface-100 hover:shadow-lg transition-shadow">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-surface-500 font-medium mb-2 text-sm">Orders</span>
                        <div class="text-surface-900 font-bold text-2xl">152</div>
                    </div>
                    <div class="flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 shadow-md shadow-blue-200" style="width: 3rem; height: 3rem">
                        <i class="pi pi-shopping-cart text-white text-xl!"></i>
                    </div>
                </div>
                <span class="text-emerald-600 font-semibold text-sm">↑ 24 new </span>
                <span class="text-surface-400 text-sm">since last visit</span>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="rounded-2xl bg-white p-6 shadow-md shadow-surface-200/50 border border-surface-100 hover:shadow-lg transition-shadow">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-surface-500 font-medium mb-2 text-sm">Revenue</span>
                        <div class="text-surface-900 font-bold text-2xl">$2.100</div>
                    </div>
                    <div class="flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 shadow-md shadow-orange-200" style="width: 3rem; height: 3rem">
                        <i class="pi pi-dollar text-white text-xl!"></i>
                    </div>
                </div>
                <span class="text-emerald-600 font-semibold text-sm">↑ 52% </span>
                <span class="text-surface-400 text-sm">since last week</span>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="rounded-2xl bg-white p-6 shadow-md shadow-surface-200/50 border border-surface-100 hover:shadow-lg transition-shadow">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-surface-500 font-medium mb-2 text-sm">Customers</span>
                        <div class="text-surface-900 font-bold text-2xl">28,441</div>
                    </div>
                    <div class="flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-md shadow-cyan-200" style="width: 3rem; height: 3rem">
                        <i class="pi pi-users text-white text-xl!"></i>
                    </div>
                </div>
                <span class="text-emerald-600 font-semibold text-sm">↑ 520 </span>
                <span class="text-surface-400 text-sm">newly registered</span>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-3">
            <div class="rounded-2xl bg-white p-6 shadow-md shadow-surface-200/50 border border-surface-100 hover:shadow-lg transition-shadow">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-surface-500 font-medium mb-2 text-sm">Comments</span>
                        <div class="text-surface-900 font-bold text-2xl">152 Unread</div>
                    </div>
                    <div class="flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 shadow-md shadow-purple-200" style="width: 3rem; height: 3rem">
                        <i class="pi pi-comment text-white text-xl!"></i>
                    </div>
                </div>
                <span class="text-emerald-600 font-semibold text-sm">↑ 85 </span>
                <span class="text-surface-400 text-sm">responded</span>
            </div>
        </div>`
})
export class StatsWidget {}
