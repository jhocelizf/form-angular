import { Validators, AbstractControl } from '@angular/forms';


export function validatePassword(control: AbstractControl): {[key: string]: any} | null {
  const value: string = control.value || '';
  const hasUpperCase = /[A-Z]/.test(value);
  const hasNumber = /\d/.test(value);
  const isValid = value.length >= 8 && hasUpperCase && hasNumber;

return isValid ? null : { 'strongPassword': true };
}


