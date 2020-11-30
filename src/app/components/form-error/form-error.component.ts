import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss'],
})
export class FormErrorComponent {

  @Input() model: NgModel;

  constructor() { }
  public message(): string {
    if (this.model.errors?.required) {
      return 'O campo é obrigatório';
    }
    return JSON.stringify(this.model.errors);
  }

}
