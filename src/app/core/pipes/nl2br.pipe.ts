import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nl2br',
  standalone: true
})

export class Nl2brPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value) {
      return value.replace(/(?:\r\n|\r|\n)/g, '<br>');
    }
  }

}
