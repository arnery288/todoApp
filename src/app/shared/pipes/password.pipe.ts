import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appPassword',
  standalone: true,
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, showPassword: boolean = false): string {
    if (!value) return ''; // Handle empty or undefined passwords
    return showPassword ? value : '*'.repeat(value.length);
  }

}
