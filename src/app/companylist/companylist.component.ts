import { Component, OnInit } from '@angular/core';
import { Organization } from '../organization';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companylist',
  templateUrl: './companylist.component.html',
  styleUrls: ['./companylist.component.css']
})
export class CompanylistComponent implements OnInit {

  company:Organization[]=[];

  constructor(private service:AuthServiceService,private router:Router){}
  ngOnInit(): void {
    this.companylist();
   
    
  }
  storeid(id:number){
    localStorage.setItem('companyid',id.toString());
    this.router.navigate(['/home',id]);

  }

  companylist(){
    this.service.getAllOrganization().subscribe(data =>{
      this.company=data;
  });
  }

 

  

}
