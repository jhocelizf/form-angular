import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { validatePassword } from '../utils/validator';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.scss'
})
export class ReactiveformComponent {
  constructor(private fb: FormBuilder) {}

studentForm = this.fb.group({
    email: this.fb.control('',
      [Validators.required, 
      Validators.email]),
    password: ['', [Validators.required, Validators.minLength(8), validatePassword]],
    name: this.fb.control('', Validators.required),
    lastName: this.fb.control('', Validators.required),
    address: this.fb.control('', Validators.required),
    city: this.fb.control('', Validators.required),
  }); 

  get emailControl() {
    return this.studentForm.get('email');
  }

  get passwordControl() {
    return this.studentForm.get('password');
  }

  get nameControl() {
    return this.studentForm.get('name');
  }

  get lastnameControl() {
    return this.studentForm.get('lastName');
  }

  get addressControl() {
    return this.studentForm.get('address');
  }

  get cityControl() {
    return this.studentForm.get('city');
  }



  

onSubmit(): void {
if(this.studentForm.valid){
  Swal.fire({
      icon: 'success',
      title: 'Realizado',
      text: 'Usuario registrado', 
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Por favor, completa el formulario correctamente.',
});
}

}}
  
  // SIN FORM BUILDER
//     studentForm = new FormGroup({
//     email: new FormControl(''),
//     password: new FormControl('', [Validators.required]),
//     name: new FormControl(''),
//     lastName: new FormControl(''),
//     address: new FormGroup(''),
  
// })


