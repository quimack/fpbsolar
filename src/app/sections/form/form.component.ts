import { Component, OnInit } from '@angular/core';
import { InstallationType, Place, MonthlyExpenditure } from '../../models/formData';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { fadeInOutAnimation } from 'src/assets/animations';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  animations: [fadeInOutAnimation],
})
export class FormComponent implements OnInit {
  step: number = 1;
  lastStep: number = 1;

  installationForm = new FormGroup({
    installationType: new FormControl(null, Validators.required),
    place: new FormControl(null),
    monthlyExpenditure: new FormControl(null),
  });

  personalDataForm = new FormGroup({
    firstName: new FormControl("", [Validators.minLength(3), Validators.required]),
    lastName: new FormControl("", [Validators.minLength(3), Validators.required]),
    email: new FormControl("", [Validators.email, Validators.required]),
    phone: new FormControl("", Validators.required),
    cp: new FormControl("", Validators.required),
    population: new FormControl("", Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
    this.installationForm.get('installationType')?.valueChanges.subscribe((value: InstallationType) => {
      this.lastStep = Number(this.step);
      if(value === InstallationType.HOGAR){
        this.step = 2;
      }else{
        this.step = 4;
      }
    });
  
    this.installationForm.get('place')?.valueChanges.subscribe(() => {
      this.lastStep = Number(this.step);
      this.step = 3;
    });
  
    this.installationForm.get('monthlyExpenditure')?.valueChanges.subscribe(() => {
      this.lastStep = Number(this.step);
      this.step = 4;
    });
  }


  setInstallationType(typeId: InstallationType){
    console.log("aslj", typeId)
    this.installationForm.get("installationType")?.setValue(typeId)
  }

  setPlace(placeId: Place){
    this.installationForm.get("place")?.setValue(placeId)

    this.lastStep = Number(this.step);

    this.step = 3;
  }

  setMonthlyExpenditure(value: MonthlyExpenditure){
    this.installationForm.get("monthlyExpenditure")?.setValue(value)

    this.lastStep = Number(this.step);
    this.step = 4;
  }

  onSubmit(){
    console.log(this.personalDataForm)
  }

  backStep(){
    if(this.step > 1){
      this.step = Number(this.lastStep);
      this.lastStep = this.step - 1;
    }
  }
  nextStep(){
    if(this.step <= 4){
      this.lastStep = Number(this.step);
      this.step = this.lastStep + 1;
    }
  }
}
