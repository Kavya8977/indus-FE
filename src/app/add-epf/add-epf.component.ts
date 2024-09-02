import { Component } from '@angular/core';
import { Epf } from '../epf';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-epf',
  templateUrl: './add-epf.component.html',
  styleUrls: ['./add-epf.component.css']
})
export class AddEpfComponent {

  collapsed = false;
  regForm: FormGroup;

toggleSidebar() {
  this.collapsed = !this.collapsed;
} 

searchQuery: string='';
isAdmin: boolean=false;

  epf:Epf = {
    estid: '',
    lin:null,
    niccode: '',
    pfOfficeAddress: '',
    signatory: '',
    active:null,
    userid: '',
    password: '',
    emailId: '',
    mobileNo: null,
    company: {
      companyid:null
    }
  };
  companyId: number;

  constructor(private authService: AuthServiceService, private router: Router) {
    this.regForm = new FormGroup({
      estid: new FormControl(this.epf.estid, [Validators.required,]),
      lin: new FormControl(this.epf.lin, [Validators.required]),
    niccode: new FormControl(this.epf.niccode, [Validators.required]),
    pfOfficeAddress: new FormControl(this.epf.pfOfficeAddress, [Validators.required]),
    signatory: new FormControl(this.epf.signatory, [Validators.required]),
    active: new FormControl(this.epf.active, [Validators.required]),
    userid: new FormControl(this.epf.userid, [Validators.required]),
    password: new FormControl(this.epf.password, [Validators.required]),
    emailId: new FormControl(this.epf.emailId, [Validators.required, Validators.email]),
    mobileNo: new FormControl(this.epf.mobileNo, [Validators.required]),
    });

  }

  ngOnInit(): void {
    const companyId = localStorage.getItem('companyid');
    if (companyId) {
      this.epf.company.companyid = +companyId;
    } else {
      console.error('Company ID not found in local storage.');
    }
  }

  onSubmit(): void {
    this.authService.createEpf(this.epf).subscribe(
      response => {
        console.log('Epf registered successfully:', response);
        this.router.navigate(['/epflist']); // Navigate to the bank list after successful registration
      },
      error => {
        console.error('Error registering epf:', error);
      }
    );
  }

}