import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginManufacturerPage } from './login-manufacturer.page';

const routes: Routes = [
  {
    path: '',
    component: LoginManufacturerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginManufacturerPage]
})
export class LoginManufacturerPageModule {}
