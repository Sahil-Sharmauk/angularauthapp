import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

  loginForm = this.formBuilder.group({
    email: ['',[Validators.required, Validators.email]],
    password : ['',Validators.required]
  });
  
  constructor(
    private formBuilder: FormBuilder
  ) {
    console.log("login component")
  }

  onLogIn()  {
    console.log(this.loginForm)
    if (this.loginForm.valid) {
      // Form submission logic
      console.log('Form submitted!');
    } else {
      // Handle invalid form
      console.log('Form is invalid!');
    }
  }
}
