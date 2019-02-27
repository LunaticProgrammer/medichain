import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'notifications', loadChildren: './notifications/notifications.module#NotificationsPageModule' },
  { path: 'tracking', loadChildren: './tracking/tracking.module#TrackingPageModule' },
  { path: 'scan', loadChildren: './scan/scan.module#ScanPageModule' },

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

  { path: 'register/register-dist', loadChildren: './register/register-dist/register-dist.module#RegisterDistPageModule' },
  { path: 'register/register-fin-stock-manager', loadChildren: './register/register-fin-stock-manager/register-fin-stock-manager.module#RegisterFinStockManagerPageModule' },
  { path: 'register/register-hospital', loadChildren: './register/register-hospital/register-hospital.module#RegisterHospitalPageModule' },
  { path: 'register/register-manufacturer', loadChildren: './register/register-manufacturer/register-manufacturer.module#RegisterManufacturerPageModule' },
  { path: 'register/register-pharma', loadChildren: './register/register-pharma/register-pharma.module#RegisterPharmaPageModule' },
  { path: 'register/register-raw-mat-collector', loadChildren: './register/register-raw-mat-collector/register-raw-mat-collector.module#RegisterRawMatCollectorPageModule' },
  { path: 'register/-raw-mat-stock', loadChildren: './register/register-raw-mat-stock/register-raw-mat-stock.module#RegisterRawMatStockPageModule' },
  { path: 'register/register-sub-dist', loadChildren: './register/register-sub-dist/register-sub-dist.module#RegisterSubDistPageModule' },
  { path: 'register/register-transporter', loadChildren: './register/register-transporter/register-transporter.module#RegisterTransporterPageModule' },
  { path: 'register-options', loadChildren: './register-options/register-options.module#RegisterOptionsPageModule' },

  { path: 'entry-by-transporters', loadChildren: './EntryForms/entry-by-transporters/entry-by-transporters.module#EntryByTransportersPageModule' },
  { path: 'entry-by-hospital', loadChildren: './EntryForms/entry-by-hospital/entry-by-hospital.module#EntryByHospitalPageModule' },
  { path: 'entry-by-pharma', loadChildren: './EntryForms/entry-by-pharma/entry-by-pharma.module#EntryByPharmaPageModule' },
  { path: 'entry-by-raw-mat-collector', loadChildren: './EntryForms/entry-by-raw-mat-collector/entry-by-raw-mat-collector.module#EntryByRawMatCollectorPageModule' },
  { path: 'entry-by-raw-mat-stocker', loadChildren: './EntryForms/entry-by-raw-mat-stocker/entry-by-raw-mat-stocker.module#EntryByRawMatStockerPageModule' },
  { path: 'entry-by-sub-distributor', loadChildren: './EntryForms/entry-by-sub-distributor/entry-by-sub-distributor.module#EntryBySubDistributorPageModule' },
  { path: 'entry-by-manufacturer', loadChildren: './EntryForms/entry-by-manufacturer/entry-by-manufacturer.module#EntryByManufacturerPageModule' },
  { path: 'entry-by-distributor', loadChildren: './EntryForms/entry-by-distributor/entry-by-distributor.module#EntryByDistributorPageModule' },
  { path: 'entry-by-fin-stock-manager', loadChildren: './EntryForms/entry-by-fin-stock-manager/entry-by-fin-stock-manager.module#EntryByFinStockManagerPageModule' },
  
  { path: '**', loadChildren: './page-not-found/page-not-found.module#PageNotFoundPageModule' }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
