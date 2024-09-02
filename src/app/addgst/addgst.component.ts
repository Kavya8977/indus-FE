import { Component } from '@angular/core';
import { Gst } from '../gst';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface State {
  name: string;
  gstCode: string;
}

@Component({
  selector: 'app-addgst',
  templateUrl: './addgst.component.html',
  styleUrls: ['./addgst.component.css'],
})
export class AddgstComponent {
  collapsed = false;
  regForm: FormGroup;

  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }

  searchQuery: string = '';
  isAdmin: boolean = false;
  states: State[] = [];
  selectedStateCode: string | null = null;
  gstNum: string='';

  gst: Gst = {
    gstNumber: '',
    userid: '',
    password: '',
    address: '',
    state: '',
    email: '',
    mobileno: null,
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
      gstNumber: new FormControl(this.gst.gstNumber, [Validators.required,]),
      userid: new FormControl(this.gst.userid, [Validators.required]),
    password: new FormControl(this.gst.password, [Validators.required]),
    address: new FormControl(this.gst.address, [Validators.required]),
    state: new FormControl(this.gst.state, [Validators.required]),
    email: new FormControl(this.gst.email, [Validators.required, Validators.email]),
    mobileno: new FormControl(this.gst.mobileno, [Validators.required, Validators.pattern('^[0-9]{10}$')]),
    active: new FormControl(this.gst.active, [Validators.required]),
    signatory: new FormControl(this.gst.signatory, [Validators.required]),

    });
  }

  ngOnInit(): void {
    const companyId = localStorage.getItem('companyid');
    this.authService.getStates().subscribe(data => {
      this.states = data;
    });
    if (companyId) {
      this.gst.company.companyid = +companyId;
    } else {
      console.error('Company ID not found in local storage.');
    }
  }

  onSubmit(): void {
    const companyid = localStorage.getItem('companyid');
    const cratedBy='ADMIN';
    this.authService.createGst(this.regForm.value,cratedBy,+companyid).subscribe(
      (response) => {
        this.router.navigate(['/gstlist']); 
      },
      (error) => {
        console.error('Error registering gst:', error);
      }
    );
  }

  onStateChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedStateCode = selectElement.value;
  
    // Prepend the selected state code to the GST Number
    this.gstNum = this.selectedStateCode + this.gstNum.slice(2); // Assuming GST Number has a specific format
    this.regForm.get('gstNumber')?.setValue(this.gstNum);
  
    // console.log('Selected state code:', this.selectedStateCode);
    // console.log('Updated GST Number:', this.gstNum);
  }
}
