import { Component } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
  patientData = {
    name: '',
    email: '',
    phone: '',
    password: ''
  };

  onSubmit() {
    console.log('Patient registered:', this.patientData);
    alert('Patient registration successful!');
  }
}
