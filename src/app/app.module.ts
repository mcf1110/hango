import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from './pages/home/home.page';
import { PeoplePage } from './pages/people/people.page';
import { FormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';
import { ItemsPage } from './pages/items/items.page';
import { AddItemPage } from './pages/add-item/add-item.page';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { EditItemPage } from './pages/edit-item/edit-item.page';
import { ReportPage } from './pages/report/report.page';
import { ReportDetailsComponent } from './components/report-details/report-details.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
    ReportDetailsComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule,
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
