import { Component } from '@angular/core';
import { Esi } from '../esi';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addesi',
  templateUrl: './addesi.component.html',
  styleUrls: ['./addesi.component.css']
})
export class AddesiComponent {

  collapsed = false;
  regForm: FormGroup;

toggleSidebar() {
  this.collapsed = !this.collapsed;
} 

searchQuery: string='';
isAdmin: boolean=false;

  esi:Esi = {
    employerCodeNo:null,
    employerName: '',
    ro: '',
    lin:null,
    active:null,
    userid: '',
    password: '',
    emailId: '',
    mobileNo: null,
    signatory: '',
    company: {
      companyid:null
    }
  }

  constructor(private authService: AuthServiceService, private router: Router) {
    this.regForm = new FormGroup({
      employeeCode: new FormControl(this.esi.employerCodeNo, [Validators.required,]),
      employeeName: new FormControl(this.esi.employerName, [Validators.required]),
      ro: new FormControl(this.esi.ro, [Validators.required]),
      lin: new FormControl(this.esi.lin, [Validators.required]),
      active: new FormControl(this.esi.active, [Validators.required]),
      userid: new FormControl(this.esi.userid, [Validators.required]),
      password: new FormControl(this.esi.password, [Validators.required]),
      email: new FormControl(this.esi.emailId, [Validators.required, Validators.email]),
      mobileno: new FormControl(this.esi.mobileNo, [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      signatory: new FormControl(this.esi.signatory, [Validators.required]),
  
    });
  }

  ngOnInit(): void {
    const companyId = localStorage.getItem('companyid');
    if (companyId) {
      this.esi.company.companyid = +companyId;
    } else {
      console.error('Company ID not found in local storage.');
    }
  }

  onSubmit(): void {
    this.authService.createEsi(this.esi).subscribe(
      response => {
        console.log('Esi registered successfully:', response);
        this.router.navigate(['/esilist']); // Navigate to the bank list after successful registration
      },
      error => {
        console.error('Error registering Esi:', error);
      }
    );
  }

}