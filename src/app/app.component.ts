import {Component ,OnInit } from '@angular/core';

import { Todo } from './todo';
import { HeroService } from './todo.services';
@Component({
  selector:'app-root',
  template:`
  {{title}}
<ul class="heroes">
  <li *ngFor="let todo of HEROES">
      {{todo.name}}
        </li>
        </ul>
  `,
  providers:[HeroService]
  // styleUrls:['app/css/hero.component.css'],
})
export class AppComponent implements OnInit{
  HEROES: Todo[];
  constructor(private HeroService:HeroService){}

getHeroes():void{
  this.HeroService.getHeroes().then( HEROES=>this.HEROES= HEROES);
}
ngOnInit():void{
  this.getHeroes();
}
}
