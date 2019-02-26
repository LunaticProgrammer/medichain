import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginRawMatStockPage } from './login-raw-mat-stock.page';

const routes: Routes = [
  {
    path: '',
    component: LoginRawMatStockPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginRawMatStockPage]
})
export class LoginRawMatStockPageModule {}
