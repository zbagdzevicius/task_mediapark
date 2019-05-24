import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

import { LoginService } from './services/login/login.service';
import { RegisterService } from './services/register/register.service';



const COMPONENTS = [
  LoginComponent,
  RegisterComponent
]

const SERVICES = [
  LoginService,
  RegisterService
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  providers: [...SERVICES]
})
export class AuthModule { }
