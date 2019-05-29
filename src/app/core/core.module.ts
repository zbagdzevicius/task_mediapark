import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanActivateViaAuthGuard } from './guards/auth.guard';
import { FormErrorMessagesComponent } from './components/form-error-messages/form-error-messages.component';
import { FormErrorMessagesService } from './components/form-error-messages/form-error-messages.service';

@NgModule({
  declarations: [FormErrorMessagesComponent],
  imports: [
    CommonModule
  ],
  providers: [
    CanActivateViaAuthGuard,
    FormErrorMessagesService
  ],
  exports: [
    FormErrorMessagesComponent
  ]
})
export class CoreModule { }
