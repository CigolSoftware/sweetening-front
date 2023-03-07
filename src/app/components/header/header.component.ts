import { Button, Color, Icon, Tools } from '@cigol/sdk';
import { CDK, CDKConstants } from '@cigol/cdk';
import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { Platform } from '@angular/cdk/platform';

@Component({ selector: 'swe-header', templateUrl: './header.component.html' })
export class HeaderComponent extends CDK {
    @HostListener(CDKConstants.INSTALL_PROMPT, [CDKConstants.EVENT]) public override preventDefault(e: any) { super.preventDefault(e) }
    @Input() public title?: string;
    @ViewChild('ref') protected ref?: ElementRef;

    public button: Button = { color: Color.PRIMARY, icon: Icon.DOWNLOAD };

    constructor(protected override platform: Platform) {
        super(platform);
        Tools.MENU.subscribe(() => this.ref?.nativeElement.click());
    }

}