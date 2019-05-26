import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateViaAuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: 'table',
    loadChildren: './table/table.module#TableModule',
    canActivate: [CanActivateViaAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
