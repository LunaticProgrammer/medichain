import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegisterRawMatStockPage } from './register-raw-mat-stock.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterRawMatStockPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegisterRawMatStockPage]
})
export class RegisterRawMatStockPageModule {}
