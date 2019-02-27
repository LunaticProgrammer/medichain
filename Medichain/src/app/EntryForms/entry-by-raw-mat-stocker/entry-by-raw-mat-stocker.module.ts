import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EntryByRawMatStockerPage } from './entry-by-raw-mat-stocker.page';

const routes: Routes = [
  {
    path: '',
    component: EntryByRawMatStockerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EntryByRawMatStockerPage]
})
export class EntryByRawMatStockerPageModule {}
