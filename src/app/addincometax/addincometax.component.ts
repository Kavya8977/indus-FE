import { Component } from '@angular/core';
import { Incometax } from '../incometax';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addincometax',
  templateUrl: './addincometax.component.html',
  styleUrls: ['./addincometax.component.css']
})
export class AddincometaxComponent {

  collapsed = false;
  regForm: FormGroup;

toggleSidebar() {
  this.collapsed = !this.collapsed;
} 

searchQuery: string='';
isAdmin: boolean=false;

  tax:Incometax = {
    panNumber:  '',
  name:  '',
  panIssuedDate:  '',
  primaryMobile: null,
  secondaryMobile:  null,
  primaryEmail:  '',
  secondaryEmail:  '',
  userid:  '',
  password:  '',
  active:null,
  primarysignatory:'',
  secondarysignatory:'',
  incorporationDate:'',
  company: {
    companyid:null
  }
  };
  companyId: number;

  constructor(private authService: AuthServiceService, private router: Router) {
    this.regForm = new FormGroup({
      panNumber: new FormControl(this.tax.panNumber, [Validators.required,]),
      name: new FormControl(this.tax.name, [Validators.required,]),
      panIssuedDate: new FormControl(this.tax.panIssuedDate, [Validators.required,]),
      primaryMobile: new FormControl(this.tax.primaryMobile, [Validators.required,]),
      secondaryMobile: new FormControl(this.tax.secondaryMobile, [Validators.required,]),
      primaryEmail: new FormControl(this.tax.primaryEmail, [Validators.required,]),
      secondaryEmail: new FormControl(this.tax.secondaryEmail, [Validators.required,]),
      userid: new FormControl(this.tax.userid, [Validators.required,]),
      password: new FormControl(this.tax.password, [Validators.required,]),
      active: new FormControl(this.tax.active, [Validators.required,]),
      primarysignatory: new FormControl(this.tax.primarysignatory, [Validators.required,]),
      secondarysignatory: new FormControl(this.tax.secondarysignatory, [Validators.required,]),
      incorporationDate: new FormControl(this.tax.incorporationDate, [Validators.required,]),
    });
  }

  ngOnInit(): void {
    const companyId = localStorage.getItem('companyid');
    if (companyId) {
      this.tax.company.companyid = +companyId;
    } else {
      console.error('Company ID not found in local storage.');
    }
  }

  onSubmit(): void {
    this.authService.createIncometax(this.tax).subscribe(
      response => {
        console.log('IncomeTax registered successfully:', response);
        this.router.navigate(['/incometaxlist']); // Navigate to the bank list after successful registration
      },
      error => {
        console.error('Error registering incometax:', error);
      }
    );
  }

}
