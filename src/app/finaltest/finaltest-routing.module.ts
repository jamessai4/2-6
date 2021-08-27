import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinaltestPage } from './finaltest.page';

const routes: Routes = [
  {
    path: '',
    component: FinaltestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinaltestPageRoutingModule {}
