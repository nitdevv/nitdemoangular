import{Pipe , PipeTransform} from '@angular/core';

@Pipe({name:'orderBy'})

 export class OrderByPipe implements PipeTransform{

   transform(todos:Array<any>,args?:any):any{
  
   };
 }
 