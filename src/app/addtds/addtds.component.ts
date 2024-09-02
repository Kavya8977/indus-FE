import { Component } from '@angular/core';
import { Tds } from '../tds';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addtds',
  templateUrl: './addtds.component.html',
  styleUrls: ['./addtds.component.css']
})
export class AddtdsComponent {

  collapsed = false;
  regForm: FormGroup;

  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }

  searchQuery: string = '';
  isAdmin: boolean = false;

  tds: Tds = {
    tanNo: '',
    userid: '',
    password: '',
    mobileNo: null,
    surrendered: null,
    email: '',
    active: null,
    signatory:'',
    company: {
      companyid: null,
    },
  };
  companyId: number;

  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {
    this.regForm = new FormGroup({
      tan: new FormControl(this.tds.tanNo, [Validators.required,]),
      userid: new FormControl(this.tds.userid, [Validators.required,]),
      password: new FormControl(this.tds.password, [Validators.required,]),
      mobileNo: new FormControl(this.tds.mobileNo, [Validators.required,]),
      surrendered: new FormControl(this.tds.surrendered, [Validators.required,]),
      email: new FormControl(this.tds.email, [Validators.required,]),
      active: new FormControl(this.tds.active, [Validators.required,]),
      signatory: new FormControl(this.tds.signatory, [Validators.required,]),
    });
  }

  ngOnInit(): void {
    const companyId = localStorage.getItem('companyid');
    if (companyId) {
      this.tds.company.companyid = +companyId;
    } else {
      console.error('Company ID not found in local storage.');
    }
  }

  onSubmit(): void {
    this.authService.createTds(this.tds).subscribe(
      (response) => {
        console.log('Tds registered successfully:', response);
        this.router.navigate(['/tdslist']); // Navigate to the bank list after successful registration
      },
      (error) => {
        console.error('Error registering Tds:', error);
      }
    );
  }

}
