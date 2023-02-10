import { Button } from '@cigol/sdk'
import { Component, Input } from '@angular/core';

@Component({ selector: 'app-button', templateUrl: './button.component.html' })
export class ButtonComponent {
    @Input()
    public button?: Button;
}