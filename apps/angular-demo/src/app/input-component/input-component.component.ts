import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'abgov-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent {

  favoriteColor1 = 'ABCD1';
  favoriteColor2 = 'ABCD2';

  profileForm = this.fb.group({
    favoriteColor3: ['ABCD3']
  });

  onSubmit() {
    console.warn(console.log(this.favoriteColor1));
    console.warn(console.log(this.favoriteColor2));
  }

  constructor(private fb: FormBuilder) { }

  onInputChangeEvent(event: any) {
    console.log('onEvent', event);
  }

  handleTrailingIconClick() {
    console.log('handleTrailingIconClick');
  }
}
