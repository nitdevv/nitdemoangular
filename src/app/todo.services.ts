import { Injectable } from '@angular/core';

import { Todo } from './todo';
import { HEROES } from './data-todo';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Todo[]> {
    return Promise.resolve(HEROES);
  }
}
