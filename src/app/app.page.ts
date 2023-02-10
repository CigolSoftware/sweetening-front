import { App } from "@cigol/sdk";
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({ selector: 'app-root', templateUrl: './app.page.html' })
export class AppPage extends App {
    @ViewChild('closeRef') protected override closeRef?: ElementRef;
    @ViewChild('loadingRef') protected override loadingRef?: ElementRef;
    @ViewChild('toastRef') protected override toastRef?: ElementRef;
}