import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EntryByRawMatCollectorPage } from './entry-by-raw-mat-collector.page';

const routes: Routes = [
  {
    path: '',
    component: EntryByRawMatCollectorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EntryByRawMatCollectorPage]
})
export class EntryByRawMatCollectorPageModule {}
