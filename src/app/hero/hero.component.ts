import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  heroDetails = new FormGroup({
    name: new FormControl(''),
    realName: new FormControl(''),
    biometricData: new FormGroup({
      age: new FormControl(''),
      eyes: new FormControl(''),
      hair: new FormControl(''),
    }),

    powers: new FormArray([]),
  });

  get powers(): FormArray {
    return this.heroDetails.controls.powers as FormArray;
  }

  addPower() {
    this.powers.push(new FormControl(''));
  }

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {}
}
