import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Midpoint } from '../midpoint/midpoint';

@Component({
  selector: 'midpoint-component',
  templateUrl: './midpoint.component.html',
  styleUrls: ['./midpoint.component.css']
})
export class MidpointComponent implements OnInit{
    midpointForm!: FormGroup;
    result : any;

    constructor() { }
  
    // Initialise the FormGroup with the 2 FormControls we need.
    // ngOnInit ensures the FormGroup and it's form controls are
    // created when the component is initialised
    ngOnInit() {
      this.midpointForm = new FormGroup({
        x1: new FormControl('', Validators.required),
        y1: new FormControl('', Validators.required),
        x2: new FormControl('', Validators.required),
        y2: new FormControl('', Validators.required)
      });
    }

    onSubmit(): String {
      let x1 : number; let y1 : number; let x2 : number; let y2 : number;
      let result : any;
      let point : any;

      x1 = Number(this.midpointForm.value.x1);
      y1 = Number(this.midpointForm.value.y1);
      x2 = Number(this.midpointForm.value.x2);
      y2 = Number(this.midpointForm.value.y2);

      if (isNaN(x1) || isNaN(x2) || isNaN(y1) || isNaN(y2)){
          result = 'No se pueden utilizar letras';
          this.result = result;
          return result;
      }

      point = new Midpoint();
      point.midpoint(x1,y1,x2,y2);
      result = point.punto;
      this.result = '(' + result.x + ', ' + result.y + ')'
      return result;
    }
}
