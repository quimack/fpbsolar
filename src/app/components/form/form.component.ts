import { Component, OnInit } from '@angular/core';
import { InstallationType, Place, MonthlyExpenditure } from '../../models/formData';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  step: number = 1;
  lastStep: number = 1;
  // step1: boolean = true;
  // step2: boolean = false;
  // step3: boolean = false;
  // step4: boolean = false;
  // step5: boolean = false;



  installationType: InstallationType = InstallationType.HOGAR;
  place: Place = Place.CASA;
  monthlyExpenditure: MonthlyExpenditure = MonthlyExpenditure.NO_LO_SE;

  personalDataForm = new FormGroup({
    firstName: new FormControl("", Validators.minLength(3)),
    lastName: new FormControl(""),
    email: new FormControl("", Validators.email),
    phone: new FormControl(""),
    cp: new FormControl(""),
    population: new FormControl(""),
  });

  constructor() { }

  ngOnInit(): void {
    console.log(this.installationType);
  }

  setInstallationType(typeId: InstallationType){
    console.log("aslj")
    this.installationType = typeId;

    // this.step1 = false;
    this.lastStep = Number(this.step);

    if(typeId === InstallationType.HOGAR){
      // this.step2 = true;
      this.step = 2;
    }else{
      // this.step4 = true;
      this.step = 4;
    }
  }

  setPlace(placeId: Place){
    this.place = placeId;

    // this.step2 = false;
    // this.step3 = true;
    this.lastStep = Number(this.step);

    this.step = 3;
  }

  setMonthlyExpenditure(value: MonthlyExpenditure){
    this.monthlyExpenditure = value;

    // this.step3 = false;
    // this.step4 = true;
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
}
