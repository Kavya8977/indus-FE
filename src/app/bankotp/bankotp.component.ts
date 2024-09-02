import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner'

@Component({
  selector: 'app-bankotp',
  templateUrl: './bankotp.component.html',
  styleUrls: ['./bankotp.component.css']
})
export class BankotpComponent {

  emailForm: FormGroup;
  otpForm: FormGroup;
  newPasswordForm: FormGroup;
  step: number = 1; // To track the current step
  email:String='';
  otp:String='';
  collapsed = false;

toggleSidebar() {
  this.collapsed = !this.collapsed;
} 

  constructor(private service: AuthServiceService, private router: Router,private fb: FormBuilder) {
     // Initialize forms
     this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });

    this.otpForm = this.fb.group({
      otp: ['', Validators.required]
    });
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
      this.router.navigate(['/banklist']);
      } else {
        alert('Failed to send OTP. Please try again.');
      }
    });
  }
}

}
