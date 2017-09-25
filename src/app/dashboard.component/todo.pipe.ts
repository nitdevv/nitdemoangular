
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: "sort"
})
export class FilterPipe implements PipeTransform {
  transform(array: Array<any>, args: string): Array<string> {
    {
      array.sort((todosorta: any, todosortb: any) => {
        if (args) {
          if (todosorta.name < todosortb.name) {
            return -1;
          } else if (todosorta.name > todosortb.name) {
            return 1;
          } else {
            return 0;
          }
        } else {
          if (todosorta.name > todosortb.name) {

            return -1;
          } else if (todosorta.name < todosortb.name) {
            return 1;
          } else {
            return 0;
          }
        }
      });
      return array;
    }
  }
}
