import { Component, inject, signal } from '@angular/core';
import {User} from '../user/user';
import { Child } from "../child/child";
import { Comments } from "../comments/comments";
import { NgOptimizedImage } from '@angular/common';
import { CarService } from '../car-service/car-service';

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
  selector: 'app-home',
  imports: [ Person, User, Child, Comments, NgOptimizedImage],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})

export class Home {
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

  //Optimizing images
  logoUrl = 'assets/logo.png';
  logoAlt = 'Angular logo';

  //Creating an injectable service
  carService = inject(CarService);

  //Inject-based dependency injection
  display = this.carService.getCars().join(' ⭐️ ');
}
