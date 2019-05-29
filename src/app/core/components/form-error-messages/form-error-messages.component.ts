import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormErrorMessagesService } from './form-error-messages.service';

@Component({
  selector: 'app-form-error-messages',
  templateUrl: './form-error-messages.component.html',
  styleUrls: ['./form-error-messages.component.scss']
})
export class FormErrorMessagesComponent {
  @Input() control: FormControl;

  constructor() { }

  get errorMessage() {
    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return FormErrorMessagesService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }

}
