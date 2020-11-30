import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormErrorComponent } from './components/form-error/form-error.component';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { ReportDetailsComponent } from './components/report-details/report-details.component';
import { AddItemPage } from './pages/add-item/add-item.page';
import { EditItemPage } from './pages/edit-item/edit-item.page';
import { HomePage } from './pages/home/home.page';
import { ItemsPage } from './pages/items/items.page';
import { PeoplePage } from './pages/people/people.page';
import { ReportPage } from './pages/report/report.page';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    PeoplePage,
    ItemsPage,
    AddItemPage,
    EditItemPage,
    ReportPage,
    ItemFormComponent,
    ReportDetailsComponent,
    FormErrorComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
