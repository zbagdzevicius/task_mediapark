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

  static creditCardValidator(control) {
    // Visa, MasterCard, American Express, Diners Club, Discover, JCB
    if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
      return null;
    } else {
      return { invalidCreditCard: true };
    }
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
