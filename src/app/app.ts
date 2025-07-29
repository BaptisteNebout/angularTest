import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {User} from './user/user';
import { Child } from "./child/child";
import { Comments } from "./comments/comments";
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl:`app.html`,
  styleUrl: './app.scss'
})

export class App {
  
}
