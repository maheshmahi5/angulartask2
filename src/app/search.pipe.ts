import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'underscore';

@Pipe({
  name: 'LockFilter'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], value: string): any[] {
    if (!items) { return []; }
    if (!value) { return items; }
    console.log(items);
    console.log(value);

    return items.filter(str => {

      let search = _.values(str)
      console.log(search)

      return search.join(",").toLowerCase().includes(value.toLowerCase());
    });

    // const arr = [];

    // for (const obj of items)
    // {
    //   for (const key in obj)
    //   {
    //     let search=obj[key]
    //     if (search.toLowerCase() === value.toLowerCase())
    //     {
    //       arr.push(obj);
    //     }
    //   }
    // }
    // return arr;
  }
}
