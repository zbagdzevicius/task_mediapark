import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormErrorMessagesService {
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    let config = {
      invalidEmailAddress: 'Invalid email address',
      required: 'Required',
      invalidPassword:
      "between 6 and 25 characters, one of each type (symbol, upper/lower case, number)",
      minlength: `Minimum length is ${validatorValue.requiredLength}`,
      maxlength: `Maximum length is  ${validatorValue.requiredLength}`,
      max: `Maximum value is 99 999 999`

    };

    return config[validatorName];
  }

  static emailValidator(control) {
    // RFC 2822 compliant regex
    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
      return { invalidEmailAddress: true };
    }
  }

  static passwordValidator(control) {
    // {6,100}           - Assert password is between 6 and 100 characters
    // (?=.*[0-9])       - Assert a string has at least one number
    if (control.value.match(/(?=^.{6,25}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/)) {
      return null;
    } else {
      return { invalidPassword: true };
    }
  }
}
