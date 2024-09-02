import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {

  emailForm: FormGroup;
  otpForm: FormGroup;
  newPasswordForm: FormGroup;
  step: number = 1; // To track the current step
  email:String='';
  otp:String='';

  constructor(private fb: FormBuilder, private service: AuthServiceService,private router:Router) {
    // Initialize forms
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });

    this.otpForm = this.fb.group({
      otp: ['', Validators.required]
    });

    this.newPasswordForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }
  ngOnInit(): void {
  }

  passwordMatchValidator(form: FormGroup) {
    const newPassword = form.get('newPassword');
    const confirmPassword = form.get('confirmPassword');
    if (newPassword?.value !== confirmPassword?.value) {
      confirmPassword?.setErrors({ mismatch: true });
    } else {
      confirmPassword?.setErrors(null);
    }
  }
sendOtp() {
  if (this.emailForm.valid) {
    this.service.sendPasswordResetOTP(this.emailForm.value.email).subscribe(response => {
      if (response.statusCode=='OK' && response.statusCodeValue==200) {
        this.email=this.emailForm.value.email;
        // this.emailSent = true;
        alert(response.body);
        this.step = 2;
      } else {
        alert('Failed to send OTP. Please try again.');
      }
    });
  }
}
// otpForm: FormGroup<any>;
verifyOtp() {
  if (this.otpForm.valid) {
    console.log(this.email);
    console.log(this.otpForm.value.otp);
    this.service.VerifyOtp(this.email,this.otpForm.value.otp).subscribe(response=>{
      if (response.statusCode=='OK' && response.statusCodeValue==200) {
        this.otp=this.otpForm.value.otp;
        // this.emailSent = true;
        alert(response.body);
        this.step = 3;
      } else {
        alert('Failed to send OTP. Please try again.');
      }
    });
  }
}
// newPasswordForm: FormGroup<any>;
resetPassword() {
  if(this.newPasswordForm.valid){
    console.log(this.newPasswordForm.value.newPassword);
    
    this.service.forgotPassword(this.email,this.otp,this.newPasswordForm.value.newPassword).subscribe(response=>{
      if (response.statusCode=='OK' && response.statusCodeValue==200) {
        // this.emailSent = true;
        alert(response.body);
        this.router.navigate(['/login']);
      } else {
        alert(response.body);
      }
    });
  }
}
}