import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';

@Component({
    standalone: true,
    selector: 'app-notifications-widget',
    imports: [ButtonModule, MenuModule],
        template: `<div class="rounded-2xl bg-white p-6 shadow-md shadow-surface-200/50 border border-surface-100">
        <div class="flex items-center justify-between mb-6">
            <div class="font-bold text-xl text-surface-900">Notifications</div>
            <div>
                <button pButton type="button" icon="pi pi-ellipsis-v" class="p-button-rounded p-button-text p-button-plain" (click)="menu.toggle($event)"></button>
                <p-menu #menu [popup]="true" [model]="items"></p-menu>
            </div>
        </div>

        <span class="block text-surface-400 font-semibold text-xs tracking-wide mb-4">TODAY</span>
        <ul class="p-0 mx-0 mt-0 mb-6 list-none flex flex-col gap-3">
            <li class="flex items-center">
                <div class="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mr-4 shrink-0 shadow-md shadow-blue-200">
                    <i class="pi pi-dollar text-xl! text-white"></i>
                </div>
                <span class="text-surface-900 leading-normal"
                    >Richard Jones
                    <span class="text-surface-500">has purchased a blue t-shirt for <span class="text-emerald-600 font-bold">$79.00</span></span>
                </span>
            </li>
            <li class="flex items-center">
                <div class="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mr-4 shrink-0 shadow-md shadow-orange-200">
                    <i class="pi pi-download text-xl! text-white"></i>
                </div>
                <span class="text-surface-500 leading-normal">Your request for withdrawal of <span class="text-emerald-600 font-bold">$2500.00</span> has been initiated.</span>
            </li>
        </ul>

        <span class="block text-surface-400 font-semibold text-xs tracking-wide mb-4">YESTERDAY</span>
        <ul class="p-0 m-0 list-none mb-6 flex flex-col gap-3">
            <li class="flex items-center">
                <div class="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mr-4 shrink-0 shadow-md shadow-blue-200">
                    <i class="pi pi-dollar text-xl! text-white"></i>
                </div>
                <span class="text-surface-900 leading-normal"
                    >Keyser Wick
                    <span class="text-surface-500">has purchased a black jacket for <span class="text-emerald-600 font-bold">$59.00</span></span>
                </span>
            </li>
            <li class="flex items-center">
                <div class="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-pink-400 to-pink-600 rounded-full mr-4 shrink-0 shadow-md shadow-pink-200">
                    <i class="pi pi-question text-xl! text-white"></i>
                </div>
                <span class="text-surface-900 leading-normal"
                    >Jane Davis
                    <span class="text-surface-500">has posted a new questions about your product.</span>
                </span>
            </li>
        </ul>
        <span class="block text-surface-400 font-semibold text-xs tracking-wide mb-4">LAST WEEK</span>
        <ul class="p-0 m-0 list-none flex flex-col gap-3">
            <li class="flex items-center">
                <div class="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full mr-4 shrink-0 shadow-md shadow-emerald-200">
                    <i class="pi pi-arrow-up text-xl! text-white"></i>
                </div>
                <span class="text-surface-900 leading-normal">Your revenue has increased by <span class="text-emerald-600 font-bold">25%</span>.</span>
            </li>
            <li class="flex items-center">
                <div class="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mr-4 shrink-0 shadow-md shadow-purple-200">
                    <i class="pi pi-heart text-xl! text-white"></i>
                </div>
                <span class="text-surface-900 leading-normal"><span class="text-emerald-600 font-bold">12</span> users have added your products to their wishlist.</span>
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
