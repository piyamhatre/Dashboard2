import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {
// Transform function to convert a full name to initials
  transform(value: string): unknown {
    if (!value) {
      return '';
    }
  // Split the full name into parts, capitalize the first character of each part, and join them to form initials
    const initials = value.split(' ')
      .map(part => part.charAt(0).toUpperCase())
      .join('');

    return initials;
  }

}
