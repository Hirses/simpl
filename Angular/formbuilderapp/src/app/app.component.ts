import {Component} from "@angular/core";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  myForm : FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      'userName': ['Tom', [Validators.required]],
      'userEmail': ['', [Validators.required, Validators.email]],
      'phones': formBuilder.array(['+7', [Validators.required]])
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
