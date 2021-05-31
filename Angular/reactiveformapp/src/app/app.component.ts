import {Component} from "@angular/core";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      'userName': new FormControl('Tom', [Validators.required]),
      'userEmail': new FormControl('', [Validators.required, Validators.email]),
      'phones': new FormArray([new FormControl(+7, [Validators.required])])
    });
  }

  getFormsControls(): FormArray {
    return this.myForm.controls['phones'] as FormArray;
  }

  addPhone() {
    (<FormArray>this.myForm.controls['phones']).push(new FormControl('+7', [Validators.required]));
  }

  submit() {
    console.log(this.myForm);
  }
}
