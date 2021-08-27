import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinaltestPageRoutingModule } from './finaltest-routing.module';

import { FinaltestPage } from './finaltest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinaltestPageRoutingModule
  ],
  declarations: [FinaltestPage]
})
export class FinaltestPageModule {}
