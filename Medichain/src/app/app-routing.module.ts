import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'notifications', loadChildren: './notifications/notifications.module#NotificationsPageModule' },
  { path: 'tracking', loadChildren: './tracking/tracking.module#TrackingPageModule' },
  { path: 'scan', loadChildren: './scan/scan.module#ScanPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'login/login-raw-mat', loadChildren: './login/login-raw-mat/login-raw-mat.module#LoginRawMatPageModule' },
  { path: 'login/login-dist', loadChildren: './login/login-dist/login-dist.module#LoginDistPageModule' },
  { path: 'login/login-hospital', loadChildren: './login/login-hospital/login-hospital.module#LoginHospitalPageModule' },
  { path: 'login/login-transporter', loadChildren: './login/login-transporter/login-transporter.module#LoginTransporterPageModule' },
  { path: 'login/login-sub-dist', loadChildren: './login/login-sub-dist/login-sub-dist.module#LoginSubDistPageModule' },
  { path: 'login/login-raw-mat-stock', loadChildren: './login/login-raw-mat-stock/login-raw-mat-stock.module#LoginRawMatStockPageModule' },
  { path: 'login/login-raw-mat-collector', loadChildren: './login/login-raw-mat-collector/login-raw-mat-collector.module#LoginRawMatCollectorPageModule' },
  { path: 'login/login-pharma', loadChildren: './login/login-pharma/login-pharma.module#LoginPharmaPageModule' },
  { path: 'login/login-manufacturer', loadChildren: './login/login-manufacturer/login-manufacturer.module#LoginManufacturerPageModule' },
  { path: 'login/login-fin-stock-manager', loadChildren: './login/login-fin-stock-manager/login-fin-stock-manager.module#LoginFinStockManagerPageModule' },
  { path: 'login-options', loadChildren: './login-options/login-options.module#LoginOptionsPageModule' },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
