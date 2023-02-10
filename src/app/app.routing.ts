import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({ exports: [RouterModule], imports: [RouterModule.forRoot([
    { loadChildren: () => import('node_modules/@sweetening/measurement').then(m => m.MeasurementModule), path: '' },
    { path: '', pathMatch: 'full', redirectTo: '' }
  ])] })
export class AppRouting { }
