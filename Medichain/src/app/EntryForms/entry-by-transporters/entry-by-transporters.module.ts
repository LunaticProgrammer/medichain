import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EntryByTransportersPage } from './entry-by-transporters.page';

const routes: Routes = [
  {
    path: '',
    component: EntryByTransportersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EntryByTransportersPage]
})
export class EntryByTransportersPageModule {}
