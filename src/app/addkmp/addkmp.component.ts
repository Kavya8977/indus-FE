import { Component } from '@angular/core';
import { Kmp } from '../kmp';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addkmp',
  templateUrl: './addkmp.component.html',
  styleUrls: ['./addkmp.component.css']
})
export class AddkmpComponent {

  collapsed = false;
  regForm: FormGroup;

toggleSidebar() {
  this.collapsed = !this.collapsed;
} 

searchQuery: string='';
isAdmin: boolean=false;

  kmp:Kmp = {
    name:  '',
  email:  '',
  aadharNo: null,
  passportNo:  '',
  panNo:  '', 
  resume:  '',
  active:null,
  designation: '',
  address: '',
  state: '',
  photo: '',
  mobileNo:null,
  company: {
    companyid:null
  }
  };

  constructor(private authService: AuthServiceService, private router: Router) {
    this.regForm = new FormGroup({
      name: new FormControl(this.kmp.name, [Validators.required]),
      email: new FormControl(this.kmp.email, [Validators.required, Validators.email]),
      aadharNo: new FormControl(this.kmp.aadharNo, [Validators.required]),
      passportNo: new FormControl(this.kmp.passportNo, [Validators.required]),
      panNo: new FormControl(this.kmp.panNo, [Validators.required]),
      active: new FormControl(this.kmp.active, [Validators.required]),
      designation: new FormControl(this.kmp.designation, [Validators.required]),
      address: new FormControl(this.kmp.address, [Validators.required]),
      state: new FormControl(this.kmp.state, [Validators.required]),
      mobileno: new FormControl(this.kmp.mobileNo, [Validators.required, Validators.pattern('^[0-9]{10}$')]),
    });

  }

  ngOnInit(): void {
    const companyId = localStorage.getItem('companyid');
    if (companyId) {
      this.kmp.company.companyid = +companyId;
    } else {
      console.error('Company ID not found in local storage.');
    }
  }

  onSubmit(): void {
    console.log(this.regForm.value);
    console.log(this.kmp);    
    
    this.authService.createKmp(this.kmp).subscribe(
      response => {
        console.log('KMP registered successfully:', response);
        this.router.navigate(['/kmplist']);
      },
      error => {
        console.error('Error registering kmp:', error);
      }
    );
  }

}