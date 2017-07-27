import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  todos: object[];  // adds a todos instance variable that is an array of objects.

  constructor() { 
    // populate our todos instance variable with actual todo objects.
    this.todos = [
      {
        id: 1,
        text: 'Learn Angular bitch!',
        completed: false
      },
      {
        id: 2,
        text: 'Be the most magnificent, living life that is benevolent, the highest of the highest of, anything equivalent',
        completed: true

      },
      {
        id: 3,
        text: 'Write a world changing app',
        completed: false
      }
    ];
  }
}

