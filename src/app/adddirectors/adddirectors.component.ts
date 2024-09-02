import { Component } from '@angular/core';
import { Director } from '../director';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adddirectors',
  templateUrl: './adddirectors.component.html',
  styleUrls: ['./adddirectors.component.css'],
})
export class AdddirectorsComponent {
  collapsed = false;
  regForm: FormGroup;

  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }

  searchQuery: string = '';
  isAdmin: boolean = false;

  directors: Director = {
    name: '',
    email: '',
    dinNo: null,
    panNo: '',
    passportNo: '',
    dateOfAppointment: '',
    dateOfExit: '',
    address: '',
    active: null,
    designation: '',
    aadharNo:null,
    mobileNo:null,
    image: '',
    company: {
      companyid: null, // Initialize the company object here
    },
  };
  // companyId: number;

  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.regForm = new FormGroup({
      name: new FormControl(this.directors.name, [Validators.required,]),
      email: new FormControl(this.directors.email, [Validators.required, Validators.email]),
      dinNo: new FormControl(this.directors.dinNo, [Validators.required]),
      panNo: new FormControl(this.directors.panNo, [Validators.required]),
      passportNo: new FormControl(this.directors.passportNo, [Validators.required]),
      // position: new FormControl(this.directors.position, [Validators.required]),
      dateOfAppointment: new FormControl(this.directors.dateOfAppointment, [Validators.required]),
      // dateOfExit: new FormControl(this.directors.dateOfExit, [Validators.required,]),
      address: new FormControl(this.directors.address, [Validators.required]),
      active: new FormControl(this.directors.active, [Validators.required]),
      designation: new FormControl(this.directors.designation, [Validators.required]),
      aadharNo: new FormControl(this.directors.aadharNo, [Validators.required]),
      mobileNo: new FormControl(this.directors.mobileNo, [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]),
    });
  }

  ngOnInit(): void {
    const companyId = localStorage.getItem('companyid');
    if (companyId) {
      this.directors.company.companyid = +companyId;
    } else {
      console.error('Company ID not found in local storage.');
    }
  }
 
  onSubmit(): void {
    this.authService.createDirector(this.directors).subscribe(
      (response) => {
        // this.directors=response;
        console.log('director registered successfully:', response);
        this.router.navigate(['/directorlist']); // Navigate to the bank list after successful registration
      },
      (error) => {
        console.error('Error registering directors:', error);
      }
    );
  }
}