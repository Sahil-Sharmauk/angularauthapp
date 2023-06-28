import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators,ValidationErrors} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  registerForm! :FormGroup
  Genders: String[] = []
  constructor(private fb : FormBuilder){
    console.log("register component")
      this.Genders = ["Male","Female","Other"]
      this.createForm()
  }

  createForm(){
    this.registerForm = this.fb.group({
      name:["",Validators.required],
      email:["",[Validators.required,Validators.email]],
      phone:["",[Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
      password:["",Validators.required],
      user_gender:["",Validators.required],
      country:["",Validators.required],
      remote_work:[false,Validators.required],
      image_path:["",Validators.required],
      extraFiles:[[],Validators.required],
    })
  }

  onImageSelected(event:any){
    const file = event.target.files[0];
    console.log(event.target.files[0])
    if (file) {
      this.registerForm.patchValue({ image_path: file });
    }
  }

  onFilesSelected(event: any) {
    const files: FileList = event.target.files;
    this.registerForm.patchValue({ extraFiles: files });
  }

  onRegister(){
    console.log("this.registerForm",this.registerForm);
    
    if(this.registerForm.valid){
        
    }else{
      for (const controlName in this.registerForm.controls) {
        const control = this.registerForm.controls[controlName];
        if (control.errors) {
          console.log(`Validation error in ${controlName}:`, control.errors);
        }
      }
    }
  }
}
