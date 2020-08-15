import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { PeoplePage } from './pages/people/people.page';
import { ItemsPage } from './pages/items/items.page';
import { AddItemPage } from './pages/add-item/add-item.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      { path: 'people', component: PeoplePage },
      {
        path: 'items',
        children: [
          { path: 'add', component: AddItemPage },
          {
            path: '', component: ItemsPage,
            pathMatch: 'full',
          },
        ]
      },
      {
        path: '',
        redirectTo: 'people',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
