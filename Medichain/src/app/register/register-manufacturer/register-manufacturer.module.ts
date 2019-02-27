import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegisterManufacturerPage } from './register-manufacturer.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterManufacturerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegisterManufacturerPage]
})
export class RegisterManufacturerPageModule {}
