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

@NgModule({
  declarations: [AppComponent, HomePage, PeoplePage, ItemsPage, AddItemPage],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule,
    IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
