import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {User} from './user/user';
import { Child } from "./child/child";
import { Comments } from "./comments/comments";

@Component({
  selector: 'app-person',
  template: `
    personName: {{ personName }}
  `,
})
export class Person {
  personName = 'youngTech';
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Person, User, Child, Comments],
  templateUrl:`app.html`,
  styleUrl: './app.scss'
})

export class App {
  //Updating the Component Class
  protected readonly title = signal('portfolio');

  //Control Flow in Components
  isLoggedIn = true;
  users = [{id: 0, name: 'Sarah'}, {id: 1, name: 'Amy'}, {id: 2, name: 'Rachel'}, {id: 3, name: 'Jessica'}, {id: 4, name: 'Poornima'}];
  
  //Property Binding in Angular
  isEditable = true;

  //Event handling
  greet() {
    console.log('Hello, there 👋');
  }
  message = 'hehe';
  onMouseOver() {
    this.message = 'Way to go 🚀';
  }

  //Component output properties
  items = new Array();
  addItem(item: string) {
    this.items.push(item);
  }
}
