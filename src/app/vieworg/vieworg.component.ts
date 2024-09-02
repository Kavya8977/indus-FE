import { Component } from '@angular/core';
import { Organization } from '../organization';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-vieworg',
  templateUrl: './vieworg.component.html',
  styleUrls: ['./vieworg.component.css']
})
export class VieworgComponent {

  collapsed = false;

toggleSidebar() {
  this.collapsed = !this.collapsed;
} 

searchQuery: string='';
isAdmin: boolean=false;

  org:Organization;
  companyid: number;

  constructor(private authService:AuthServiceService,private route:ActivatedRoute){ }

  ngOnInit(): void {
    this.companyid=this.route.snapshot.params['companyid'];
    this.authService.fetchOrganizationById(this.companyid).subscribe(data=>{
      this.org=data;
      console.log(data);
    },
    error=>console.log(error));
  }


}
