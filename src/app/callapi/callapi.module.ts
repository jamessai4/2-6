import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CallapiPageRoutingModule } from './callapi-routing.module';

import { CallapiPage } from './callapi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CallapiPageRoutingModule
  ],
  declarations: [CallapiPage]
})
export class CallapiPageModule {}
