import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailTrim'
})
export class EmailTrimPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let trimedEmail: string = `@${value.split("@")[1]}`;
    return trimedEmail;
  }

}
