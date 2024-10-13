import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  registrationForm: FormGroup;
  isInteracted = false;
  isFormDirty = false;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      name: ['' , Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      ageCheck: [false],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    this.registrationForm.valueChanges.subscribe(() => {
      this.isFormDirty = this.registrationForm.dirty; 
    });

    this.ageCheck?.valueChanges.subscribe((checked) => {
      const ageControl = this.registrationForm.get('age');
      if (checked) {
        ageControl?.setValidators([Validators.required, Validators.min(0)]);
      } else {
        ageControl?.clearValidators();
      }
      ageControl?.updateValueAndValidity();
    });

  }

  onSubmit() {
    const ageCheckValue = this.ageCheck?.value;

    if (this.registrationForm.invalid) {
      if (!ageCheckValue) {
        this.registrationForm.get('age')?.clearValidators();
        this.registrationForm.get('age')?.updateValueAndValidity();
      }
      this.registrationForm.markAllAsTouched();
      this.isFormDirty = false;
      return;
    }
    console.log('Form Submitted:', this.registrationForm.value);
  }

  onInteraction() {
    if (!this.isInteracted) {
      this.isInteracted = true;
    }
  }

  get name():AbstractControl | null {
    return this.registrationForm.get('name'); 
  }

  get age():AbstractControl | null {
    return this.registrationForm.get('age');
  }

  get ageCheck():AbstractControl | null {
    return this.registrationForm.get('ageCheck');
  }

  get email():AbstractControl | null {
    return this.registrationForm.get('email');
  }



  resetForm() {
    this.registrationForm.reset();
  }

  logFormState() {
    console.log('Form Value:', this.registrationForm.value);
    console.log('Form Valid:', this.registrationForm.valid);
    console.log('Email Touched:', this.email?.touched);
    console.log('Email Dirty:', this.email?.dirty);
    console.log('Email Errors:', this.email?.errors);
    console.log("form dirty", this.registrationForm.dirty);

  }

}
