import { Component } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-appointment', // This is the component's selector
  templateUrl: './appointment.component.html', // Path to the template
  styleUrls: ['./appointment.component.css'] // Path to the styles
})
export class AppointmentComponent {
  appointments: Appointment[] = [];
  searchText: string = '';  // This property is used to store the search text
  
  constructor(private appointmentService: AppointmentService) {}
  
  ngOnInit():void{
    this.getAppointments();
  }
  getAppointments() {
    this.appointmentService.getAllAppointments().subscribe(data => {
      this.appointments = data; // Store fetched appointments into the component's array
    });
  }

  searchPatients() {
    // Here you will implement the logic to filter appointments based on the searchText
    if (this.searchText) {
      this.appointments = this.appointments.filter(appointment => 
        appointment.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.getAppointments(); // Fetch appointments again if the searchText is empty
    }
  }
  delete(id:number){
    this.appointmentService.deleteAppointment(id).subscribe(data=>{
      console.log(data);
      this.getAppointments();
    })
  }
}
