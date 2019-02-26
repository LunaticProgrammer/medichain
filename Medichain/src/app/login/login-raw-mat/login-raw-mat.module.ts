import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginRawMatPage } from './login-raw-mat.page';

const routes: Routes = [
  {
    path: '',
    component: LoginRawMatPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginRawMatPage]
})
export class LoginRawMatPageModule {}
