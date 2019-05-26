import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanActivateViaAuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    CanActivateViaAuthGuard
  ]
})
export class CoreModule { }
