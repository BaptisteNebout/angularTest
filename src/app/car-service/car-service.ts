import { Component } from '@angular/core';
import {Injectable} from '@angular/core';

@Component({
  selector: 'app-car-service',
  imports: [],
  templateUrl: './car-service.html',
  styleUrl: './car-service.scss'
})

@Injectable({
  providedIn: 'root'
})

export class CarService {
  cars = ['Sunflower GT', 'Flexus Sport', 'Sprout Mach One'];

  getCars(): string[] {
    return this.cars;
  }

  getCar(id: number) {
    return this.cars[id];
  }
}