import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginSubDistPage } from './login-sub-dist.page';

const routes: Routes = [
  {
    path: '',
    component: LoginSubDistPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginSubDistPage]
})
export class LoginSubDistPageModule {}
