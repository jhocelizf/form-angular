import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';

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
    password: ['', Validators.required],
    name: this.fb.control(''),
    lastName: this.fb.control(''),
    address: this.fb.control(''),
    
  }); 

  get emailControl() {
    return this.studentForm.get('email');
  }

  get passwordControl() {
    return this.studentForm.get('password');
  }

onSubmit(): void {
    //alert('Usuario creado' + JSON.stringify(this.studentForm.value));
Swal.fire({
      icon: 'success',
      title: 'Realizado',
      text: 'Usuario registrado', 
    });
  }
}


  
  // SIN FORM BUILDER
//     studentForm = new FormGroup({
//     email: new FormControl(''),
//     password: new FormControl('', [Validators.required]),
//     name: new FormControl(''),
//     lastName: new FormControl(''),
//     address: new FormGroup(''),
  
// })
