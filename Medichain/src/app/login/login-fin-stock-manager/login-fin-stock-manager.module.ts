import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginFinStockManagerPage } from './login-fin-stock-manager.page';

const routes: Routes = [
  {
    path: '',
    component: LoginFinStockManagerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginFinStockManagerPage]
})
export class LoginFinStockManagerPageModule {}
