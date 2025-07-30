import { Component, input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [ FormsModule, ReactiveFormsModule],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {
  //Component input properties
  occupation = input<string>();
  username = 'youngTech';

  //Create an input field
  favoriteFramework= '';

  //Getting form control value
  showFramework() {
    alert(this.favoriteFramework);
  }

  //Reactive Forms
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  handleSubmit() {
    alert(
      this.profileForm.value.name + ' | ' + this.profileForm.value.email
    );
  }
}
