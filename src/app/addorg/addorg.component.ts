import { Component } from '@angular/core';
import { Organization } from '../organization';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addorg',
  templateUrl: './addorg.component.html',
  styleUrls: ['./addorg.component.css']
})
export class AddorgComponent {

  collapsed = false;
  regForm: FormGroup;

toggleSidebar() {
  this.collapsed = !this.collapsed;
} 

searchQuery: string='';
isAdmin: boolean=false;

  org:Organization= new Organization();

  constructor(private authService: AuthServiceService, private router: Router) {
    this.regForm = new FormGroup({
      // companyid: new FormControl('', [Validators.required]),
      companyCode: new FormControl('', [Validators.required]),
      cin: new FormControl('', [Validators.required]),
      companyname: new FormControl('', [Validators.required]),
      incorporationDate: new FormControl('', [Validators.required]),
      registerNo: new FormControl('', [Validators.required]),
      phoneNo: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required]),
      website: new FormControl('', [Validators.required]),
      telephoneNo: new FormControl('', [Validators.required]),
      faxNo: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      pincode: new FormControl('', [Validators.required]),
      active: new FormControl(this.org.active, [Validators.required])
    });
  }

  ngOnInit(): void {
    this.org = new Organization();
  }

  onSubmit(): void {
    this.authService.createOrganization(this.org).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/orglist']);
      },
      error => console.error(error)
    );
  }

}
