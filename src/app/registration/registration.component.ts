import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  userData = {
    role: 'patient', // Default role
    name: '',
    email: '',
    phone: '',
    password: '',
  };

  roles = ['patient', 'doctor'];

  onSubmit() {
    // Handle registration logic
    if (this.userData.role === 'patient') {
      console.log('Registering as Patient:', this.userData);
    } else if (this.userData.role === 'doctor') {
      console.log('Registering as Doctor:', this.userData);
    }
    // Reset form
    this.userData = {
      role: 'patient',
      name: '',
      email: '',
      phone: '',
      password: '',
    };
  }
}
