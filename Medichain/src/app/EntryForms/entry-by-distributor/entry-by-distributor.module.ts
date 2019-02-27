import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EntryByDistributorPage } from './entry-by-distributor.page';

const routes: Routes = [
  {
    path: '',
    component: EntryByDistributorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EntryByDistributorPage]
})
export class EntryByDistributorPageModule {}
