import { Component } from '@angular/core';
import { Bank } from '../bank';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addbank',
  templateUrl: './addbank.component.html',
  styleUrls: ['./addbank.component.css'],
})
export class AddbankComponent {
  collapsed = false;

  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }

  searchQuery: string = '';
  isAdmin: boolean = false;
  regForm: FormGroup;
  bank: Bank = {
    accountHolderName: '',
    bankAccountNumber: '',
    ifccode: '',
    bankName: '',
    branch: '',
    accountType: '',
    active: null,
    mcircode: null,
    loginid: '',
    loginpassword: '',
    secondarysignatory: '',
    primarysignatory: '',
    transpassword: '',
    email: '',
    mobileNo: null,
    company: {
      companyid: null,
    },
  };
  companyId: number;

  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.regForm = new FormGroup({
      accountHolderName: new FormControl(this.bank.accountHolderName, [
        Validators.required,
      ]),
      accountType: new FormControl(this.bank.accountType, [
        Validators.required,
      ]),
      bankAccountNumber: new FormControl(this.bank.bankAccountNumber, [
        Validators.required,
      ]),
      ifccode: new FormControl(this.bank.ifccode, [Validators.required]),
      bankName: new FormControl(this.bank.bankName, [Validators.required]),
      branch: new FormControl(this.bank.branch, [Validators.required]),
      mcircode: new FormControl(this.bank.mcircode, [Validators.required]),
      loginid: new FormControl(this.bank.loginid, [Validators.required]),
      loginpassword: new FormControl(this.bank.loginpassword, [
        Validators.required,
      ]),
      primarysignatory: new FormControl(this.bank.primarysignatory),
      secondarysignatory: new FormControl(this.bank.secondarysignatory),
      transpassword: new FormControl(this.bank.transpassword, [
        Validators.required,
      ]),
      email: new FormControl(this.bank.email, [
        Validators.required,
        Validators.email,
      ]),
      mobileNo: new FormControl(this.bank.mobileNo, [
        Validators.required,
        Validators.pattern(/^[0-9]{10}$/),
      ]),
      active: new FormControl(this.bank.active, [Validators.required]),
    });
  }

  ngOnInit(): void {
    const companyId = localStorage.getItem('companyid');
    if (companyId) {
      this.bank.company.companyid = +companyId;
    } else {
      console.error('Company ID not found in local storage.');
    }
  }

  onSubmit(): void {
    if (this.regForm.valid) {
      this.authService.createBank(this.bank).subscribe(
        (response) => {
          console.log('Bank registered successfully:', response);
          this.router.navigate(['/banklist']);
        },
        (error) => {
          console.error('Error registering bank:', error);
        }
      );
    }
  }
}
