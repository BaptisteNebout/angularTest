import { Component, output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.scss'
})
export class Child {
  addItem() {
    this.addItemEvent.emit('🐢');
  }
  addItemEvent = output<string>();
}
