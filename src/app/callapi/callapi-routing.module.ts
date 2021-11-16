import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallapiPage } from './callapi.page';

const routes: Routes = [
  {
    path: '',
    component: CallapiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CallapiPageRoutingModule {}
