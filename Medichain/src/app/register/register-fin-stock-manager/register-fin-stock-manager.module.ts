import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegisterFinStockManagerPage } from './register-fin-stock-manager.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterFinStockManagerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegisterFinStockManagerPage]
})
export class RegisterFinStockManagerPageModule {}
