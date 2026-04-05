import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss',
})
export class ContactoComponent {
  private fb = inject(FormBuilder);
  
  contactForm: FormGroup;
  submitted = false;
  touchedFields: { [key: string]: boolean } = {};

  constructor() {
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      servicio: ['', Validators.required],
      problema: ['', Validators.required]
    });
  }

  onSubmit() {
    // Mark all fields as touched to show errors
    Object.keys(this.contactForm.controls).forEach(key => {
      this.touchedFields[key] = true;
    });

    if (this.contactForm.valid) {
      console.log('Formulario enviado:', this.contactForm.value);
      this.submitted = true;
      
      // Reset form after 3 seconds
      setTimeout(() => {
        this.contactForm.reset();
        this.submitted = false;
        this.touchedFields = {};
      }, 3000);
    }
  }
}

