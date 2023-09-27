import { Pipe, PipeTransform } from '@angular/core';
import { Hero, Color } from '../interfaces/hero.interface';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform( value: Color ) {
    switch( value) {

      case Color.blue:
        return ('azul');

      case Color.black:
        return ('negro')

      case Color.green:
      return ('verde')

      case Color.red:
        return ('rojo')
    }
  }

}
