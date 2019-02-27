import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EntryByFinStockManagerPage } from './entry-by-fin-stock-manager.page';

const routes: Routes = [
  {
    path: '',
    component: EntryByFinStockManagerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EntryByFinStockManagerPage]
})
export class EntryByFinStockManagerPageModule {}
