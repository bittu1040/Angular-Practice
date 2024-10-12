import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get email() {
    return this.myForm.get('email');
  }


  resetForm() {
    this.myForm.reset();
  }

  logFormState() {
    console.log('Form Value:', this.myForm.value);
    console.log('Form Valid:', this.myForm.valid);
    console.log('Email Touched:', this.email?.touched);
    console.log('Email Dirty:', this.email?.dirty);
    console.log('Email Errors:', this.email?.errors);
  }

}
