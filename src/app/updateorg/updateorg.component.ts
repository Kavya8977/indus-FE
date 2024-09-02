import { Component } from '@angular/core';
import { Organization } from '../organization';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-updateorg',
  templateUrl: './updateorg.component.html',
  styleUrls: ['./updateorg.component.css']
})
export class UpdateorgComponent {

  collapsed = false;

toggleSidebar() {
  this.collapsed = !this.collapsed;
} 

searchQuery: string='';
isAdmin: boolean=false;

  org:Organization;
  companyid: number;
  constructor(private authService:AuthServiceService,private router:Router,private route:ActivatedRoute){}

ngOnInit(): void {
  this.companyid=this.route.snapshot.params['companyid'];
  this.org=new Organization();
  this.authService.fetchOrganizationById(this.companyid).subscribe(data=>{
    this.org=data;
  },
  error=>console.log(error));
}

  onSubmit(){
    this.authService.updateOrganization(this.companyid,this.org).subscribe(data=>{
      this.router.navigate(['/orglist']);
    },error=>console.log(error));
  }

}
