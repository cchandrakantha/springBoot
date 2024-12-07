import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrl: './update-patient.component.css'
})
export class UpdatePatientComponent {
  id:number=0;
  constructor(private patientService:PatientService,private route:ActivatedRoute,private router:Router){}
  patient:Patient =new Patient();
  ngOnInit():void{
    this.id = this.route.snapshot.params['id'];
    this.patientService.getPatientById(this.id).subscribe(data=>{
      this.patient= data;
    })
  }

  onSubmit(){
     this.patientService.updatePatient(this.id,this.patient).subscribe(data=>{
      console.log(data);
      this.goToDocDash();
     })
  }
  goToDocDash(){
    this.router.navigate(['docdash']);
   }
}
