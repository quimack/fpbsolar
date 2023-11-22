import { Component, OnInit } from '@angular/core';
import {
  InstallationType,
  Place,
  MonthlyExpenditure,
} from '../../models/formData';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { fadeInOutAnimation } from 'src/assets/animations';
import { FormService } from 'src/app/services/form.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  animations: [fadeInOutAnimation],
})
export class FormComponent implements OnInit {
  step: number = 1;
  lastStep: number = 1;
  sendedMail: boolean = false;
  errorMail: boolean = false;


  installationForm = new FormGroup({
    installationType: new FormControl(0, Validators.required),
    place: new FormControl(0),
    monthlyExpenditure: new FormControl(0),
  });

  personalDataForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.minLength(3),
      Validators.required,
    ]),
    lastName: new FormControl('', [
      Validators.minLength(3),
      Validators.required,
    ]),
    email: new FormControl('', [Validators.email, Validators.required]),
    phone: new FormControl('', Validators.required),
    cp: new FormControl('', Validators.required),
    population: new FormControl('', Validators.required),
  });

  constructor(private formService: FormService, private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.installationForm
      .get('installationType')
      ?.valueChanges.subscribe((value) => {
        this.lastStep = Number(this.step);
        if (value === InstallationType.HOGAR) {
          this.step = 2;
        } else {
          this.step = 4;
        }
      });

    this.installationForm.get('place')?.valueChanges.subscribe(() => {
      this.lastStep = Number(this.step);
      this.step = 3;
    });

    this.installationForm
      .get('monthlyExpenditure')
      ?.valueChanges.subscribe(() => {
        this.lastStep = Number(this.step);
        this.step = 4;
      });
  }

  setInstallationType(typeId: InstallationType) {
    this.installationForm.get('installationType')?.setValue(typeId);
  }

  setPlace(placeId: Place) {
    this.installationForm.get('place')?.setValue(placeId);

    this.lastStep = Number(this.step);

    this.step = 3;
  }

  setMonthlyExpenditure(value: MonthlyExpenditure) {
    this.installationForm.get('monthlyExpenditure')?.setValue(value);

    this.lastStep = Number(this.step);
    this.step = 4;
  }

  onSubmit() {
    let installation_type;
    let place;
    let monthly_expenditure;

    if(this.installationForm.get('installationType')?.value === InstallationType.HOGAR){
      installation_type = "Hogar"
    }
    if(this.installationForm.get('installationType')?.value === InstallationType.INDUSTRIAL){
      installation_type = "Industrial"
    }
    if(this.installationForm.get('installationType')?.value === InstallationType.AMPLIACION){
      installation_type = "Ampliación"
    }

    if(this.installationForm.get('place')?.value === Place.CASA){
      place = "Casa"
    }
    if(this.installationForm.get('place')?.value === Place.COMUNIDAD){
      place = "Comunidad de vecinos"
    }
      if(this.installationForm.get('place')?.value === Place.NEGOCIO){
      place = "Negocio"
    }
    if(this.installationForm.get('place')?.value === Place.PISO){
      place = "Piso"
    }
    
    if(this.installationForm.get('monthlyExpenditure')?.value === MonthlyExpenditure.MENOS_DE_60){
      monthly_expenditure = "Menos de 60€"
    }
    if(this.installationForm.get('monthlyExpenditure')?.value === MonthlyExpenditure.DE_60_A_140){
      monthly_expenditure = "De 60€ a 140€"
    }
    if(this.installationForm.get('monthlyExpenditure')?.value === MonthlyExpenditure.MAS_DE_140){
      monthly_expenditure = "Más de 140€"
    }
    if(this.installationForm.get('monthlyExpenditure')?.value === MonthlyExpenditure.NO_LO_SE){
      monthly_expenditure = "No lo sé"
    }


    const payload = {
      first_name: this.personalDataForm.get('firstName')?.value,
      last_name: this.personalDataForm.get('lastName')?.value,
      email: this.personalDataForm.get('email')?.value,
      phone: this.personalDataForm.get('phone')?.value,
      cp: this.personalDataForm.get('cp')?.value,
      population: this.personalDataForm.get('population')?.value,
      installation_type: installation_type,
      place: place,
      monthly_expenditure: monthly_expenditure,
    };

    this.sendEmail(payload)   
  }

  sendEmail(payload: any){
    this.spinner.show()
    this.formService.sendEmail(payload).subscribe({
      next: (data) => {
        this.spinner.hide()
        this.sendedMail = true;

        this.installationForm.patchValue({
          installationType: null,
          place: null,
          monthlyExpenditure: null,
        })

        this.personalDataForm.patchValue({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          cp: "",
          population: "",
        })
      },
      error: (error) => {
        this.spinner.hide();
        const status = error?.status;
        
        if (status) {
          this.errorMail = true;
          console.log(error);
        }
      },
      complete: () => {},
    });
  }

  closeSendedModal(){
    this.sendedMail = false;
  }


  closeErrorModal(){
    this.errorMail = false;
  }

  backStep() {
    if (this.step > 1) {
      this.step = Number(this.lastStep);
      this.lastStep = this.step - 1;
    }
  }
  nextStep() {
    if (this.step <= 4) {
      this.lastStep = Number(this.step);
      this.step = this.lastStep + 1;
    }
  }
}
