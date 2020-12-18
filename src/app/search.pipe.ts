import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'customerEmailFilter'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val: { destinationName: string; }) => {
      let rVal = (val.destinationName.toLocaleLowerCase().includes(args));
      return rVal;
    })

  }

}