import { environment } from 'src/environments/environment';
import { isDevMode, NgModule } from '@angular/core';
import { AppPage } from './app.page';
import { AppRouting } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { MeasurementModule } from '@cigol/measurement';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  bootstrap: [AppPage],
  declarations: [AppPage, ButtonComponent, HeaderComponent],
  imports: [
    AppRouting,
    BrowserModule,
    HttpClientModule,
    MeasurementModule.forRoot(environment.url),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: !isDevMode(), registrationStrategy: 'registerWhenStable:30000' })
  ]
})
export class AppModule { }