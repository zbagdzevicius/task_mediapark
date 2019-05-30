import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgxsModule } from '@ngxs/store';
// import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
// import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { LayoutModule } from './layout/layout.module';
import { AuthModule } from './auth/auth.module';
import { AuthState } from './auth/state/auth.state';
import { CoreModule } from './core/core.module';
import { CanActivateViaAuthGuard } from './core/guards/auth.guard';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const SELF_MODULES = [
  LayoutModule,
  AuthModule,
  CoreModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([
      AuthState
    ]),
    // NgxsReduxDevtoolsPluginModule.forRoot(),
    // NgxsLoggerPluginModule.forRoot(),
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ...SELF_MODULES
  ],
  providers: [CanActivateViaAuthGuard,
    {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
