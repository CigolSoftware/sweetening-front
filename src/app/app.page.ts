import { App, Tools } from "@cigol/sdk";
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({ selector: 'app-root', templateUrl: './app.page.html' })
export class AppPage extends App {
    @ViewChild('closeRef') protected override closeRef?: ElementRef;
    @ViewChild('loadingRef') protected override loadingRef?: ElementRef;
    @ViewChild('toastRef') protected override toastRef?: ElementRef;

    public title?: string;

    constructor() {
        super()
        Tools.LINKS.subscribe(lin => this.title = lin.find(l => l.active)?.name)
    }
}