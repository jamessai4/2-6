import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'show-list',
    loadChildren: () => import('./show-list/show-list.module').then( m => m.ShowListPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'callapi',
    loadChildren: () => import('./callapi/callapi.module').then( m => m.CallapiPageModule)
  },  {
    path: 'add',
    loadChildren: () => import('./add/add.module').then( m => m.AddPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
