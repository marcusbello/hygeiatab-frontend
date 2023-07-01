import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterRequest, RegisterResponse, RegisterError } from 'src/app/models/register';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
   
   formGroup!: FormGroup;

   constructor( private userService:UserService) {
   }
   ngOnInit() {
     this.initForm();
   }
 
   initForm() {
     this.formGroup = new FormGroup<any>({
       name: new FormControl('', [Validators.required]),
       username: new FormControl('', [Validators.required]),
       email: new FormControl('', [Validators.required]),
       password: new FormControl('', [Validators.required]),
       confirmPassword: new FormControl('', [Validators.required]),
     })
   }


  register() {
    if(this.formGroup.valid){
      const registerRequest: RegisterRequest = {
        first_name: this.getFirstName(this.formGroup.value['name']),
        last_name: this.getLastName(this.formGroup.value['name']),
        username: this.formGroup.value['username'],
        email: this.formGroup.value['email'],
        password: this.formGroup.value['password']
      };
      // login service
      this.userService.userCreate(registerRequest).subscribe(
        (response: RegisterResponse | RegisterError) => {
          
          // Handle successful login response
          console.log('Register successful');
          console.log('Data:', response);
          // Redirect to another page, set token in local storage, etc.
        },
        (error: RegisterError) => {
          // Handle error response
          console.log('Login error:', error.error);
          // Display error message to the user, show/hide error div, etc.
        }
      );
    }
  }

  private getFirstName(fullName: string): string {
    const names = fullName.trim().split(' ');
    return names[0];
  }

  private getLastName(fullName: string): string {
    const names = fullName.trim().split(' ');
    return names[names.length - 1];
  }

}

