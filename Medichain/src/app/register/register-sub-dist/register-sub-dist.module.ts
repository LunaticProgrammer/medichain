import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegisterSubDistPage } from './register-sub-dist.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterSubDistPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegisterSubDistPage]
})
export class RegisterSubDistPageModule {}
