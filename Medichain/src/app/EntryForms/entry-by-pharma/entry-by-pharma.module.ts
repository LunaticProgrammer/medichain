import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EntryByPharmaPage } from './entry-by-pharma.page';

const routes: Routes = [
  {
    path: '',
    component: EntryByPharmaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EntryByPharmaPage]
})
export class EntryByPharmaPageModule {}
