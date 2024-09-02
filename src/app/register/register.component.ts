import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService, AuthServiceService } from '../auth-service.service'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  adminForm: FormGroup;
  responseMessage: string = ''; // Property to store the backend response message

  constructor(private fb: FormBuilder, private adminService: AuthServiceService,private router:Router) { // Inject HttpClient
    this.adminForm = this.fb.group({
      userName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$')]],
      repeatPassword: ['', Validators.required],
      role: ['ROLE_USER', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const repeatPassword = form.get('repeatPassword');
    return password && repeatPassword && password.value === repeatPassword.value ? null : { mismatch: true };
  }

  onSubmit() {    
    if (this.adminForm.valid) {
      const formData = this.adminForm.value;
      delete formData.repeatPassword;
    this.adminService.signup(formData).subscribe(data=>{
      if(data.statusCode=='OK' && data.statusCodeValue==200){
        this.router.navigate(['/login']);
      }else{
        alert(data.body.message)
      }     
    })
  }
    
  }
  isValidForm() {
    return this.adminForm.valid;
  }
}
export class Admin{
  userName:String;
  email:String;
  password:String;
  mobile:bigint
  role:String='ROLE_ADMIN';
mobilePrefix: any;
}