import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'precio'
})
export class PrecioPipe implements PipeTransform {
  transform(value: number | string): string {
    const numero = typeof value === 'string' ? parseFloat(value.toString().replace(/\$|\./g, '')) : value;
    if (isNaN(numero)) return '$0';

    return '$' + numero.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
}