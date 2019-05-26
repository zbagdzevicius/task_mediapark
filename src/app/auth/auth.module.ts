import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

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
    AuthRoutingModule
  ],
  exports: [LogoutComponent]
})
export class AuthModule { }
