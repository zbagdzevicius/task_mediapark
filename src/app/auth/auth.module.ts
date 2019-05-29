import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CoreModule } from '../core/core.module';

const COMPONENTS = [
  LoginComponent,
  RegisterComponent,
  LogoutComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    CoreModule
  ],
  exports: [LogoutComponent]
})
export class AuthModule { }
