import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginRawMatCollectorPage } from './login-raw-mat-collector.page';

const routes: Routes = [
  {
    path: '',
    component: LoginRawMatCollectorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginRawMatCollectorPage]
})
export class LoginRawMatCollectorPageModule {}
