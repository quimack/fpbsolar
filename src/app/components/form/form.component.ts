import { Component, OnInit } from '@angular/core';
import { InstallationType } from '../../models/installationType';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
  step1: boolean = true;
  step2: boolean = false;

  installationType: InstallationType = InstallationType.HOGAR;

  constructor() { }

  ngOnInit(): void {
    console.log(this.installationType);
  }

  setInstallationType(typeId: InstallationType){
    this.installationType = typeId;

    this.step1 = false;
    this.step2 = true;

  }

}
