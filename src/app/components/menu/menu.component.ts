import { Component } from '@angular/core';
import { Icon, Menu } from '@cigol/sdk';
import { Router } from '@angular/router';

@Component({ selector: 'swe-menu', templateUrl: './menu.component.html' })
export class MenuComponent extends Menu {
    constructor(protected override router: Router) {
        super(router)
        this.setLinks([
            { icon: Icon.MAGNET, name: 'Magnitudes', link: '/magnitudes' },
            { icon: Icon.PRESCRIPTION, name: 'Prefijos', link: '/prefixes' }
        ])
    }

    protected closeMenu(): boolean { return Boolean(document.getElementById('navbarVerticalCollapse')?.getAttribute('class')?.includes('show')) }
}