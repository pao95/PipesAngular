import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from 'querystring';

@Pipe({
  name: 'contrasenia'
})
export class ContraseniaPipe implements PipeTransform {

  transform(value: string, activar: boolean): any {

// tslint:disable-next-line:one-variable-per-declaration
if (activar) {
// tslint:disable-next-line:no-inferrable-types
let salida: string = '';
for (let index = 0; index < value.length; index++) {
  salida += '*';
}
return salida;
} else {
  return value;
}

}}
