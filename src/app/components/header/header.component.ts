import { Button, Color, Icon } from '@cigol/sdk';
import { CDK, CDKConstants } from '@cigol/cdk';
import { Component, HostListener } from '@angular/core';
import { Platform } from '@angular/cdk/platform';

@Component({ selector: 'app-header', templateUrl: './header.component.html' })
export class HeaderComponent extends CDK {
    public button: Button = { color: Color.PRIMARY, icon: Icon.DOWNLOAD };

    constructor(protected override platform: Platform) { super(platform) }

    @HostListener(CDKConstants.INSTALL_PROMPT, [CDKConstants.EVENT]) public override preventDefault(e: any) { super.preventDefault(e) }
}